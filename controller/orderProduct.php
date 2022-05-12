<?php

use model\Model;

require_once('./product.php');

class OrderProduct extends Model {
    protected $table = 'order_product';

    //插入訂單商品及計算總價格
    public function insertOrderProductAndCalculatePrice($param, $order_id) {
        $arr = $param['arr'];
        $price = 0;
        foreach ($arr as $kvalue) {
            $product_id = $kvalue[0];
            $count_num = $kvalue[1];
            $sql = $this->insert(['order_id' => $order_id, 'product_id' => $product_id, 'count_num' => $count_num]);
            $this->execute($sql);
            $product = new Product();
            $price += $product->searchPriceById($product_id)[0]['product_price'] * $count_num;
        }
        return $price;
    }
}
