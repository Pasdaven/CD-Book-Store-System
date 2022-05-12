<?php

use model\Model;

require_once('./product.php');

class OrderProduct extends Model {
    protected $table = 'order_product';

    //插入訂單商品及計算總價格
    public function insertOrderProductAndCalculatePrice($param, $order_id, $coupon_fee, $shipping_fee) {
        $arr = $param['arr'];
        $price = 0;
        foreach ($arr as $kvalue) {
            $product_id = $kvalue['product_id'];
            $count_num = $kvalue['count_num'];
            $sql = $this->insert(['order_id' => $order_id, 'product_id' => $product_id, 'count_num' => $count_num]);
            $this->execute($sql);
            $product = new Product();
            $price += ($product->searchPriceById($product_id)[0]['product_price']) * $count_num;
            $product->reduceProductNum($kvalue);
        }
        $price = $price - $coupon_fee + $shipping_fee;
        return $price;
    }
    public function deleteOrderProduct($param) {
        $order_id = $param['order_id'];
        $sql = $this->delete() . $this->where('order_id', '=', $order_id);
        return $this->execute($sql);
    }
}
