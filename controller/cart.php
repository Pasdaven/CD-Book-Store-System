<?php

use model\Model;

require_once('./orderList.php');
class Cart extends Model {
    protected $table = 'cart';
    public function insertCart($param) {
        $member_id = $param['member_id'];
        $product_id = $param['product_id'];
        $count_num = 1;
        $product = new Product();
        $product_num = $product->searchProductNum($param)[0]['product_number'];

        $sql = $this->select($this->table, ['count_num']) . $this->where('product_id', '=', $product_id);
        if ($result = $this->execute($sql)) {
            if ($product_num >= $count_num + $result[0]['count_num']) {
                $sql = $this->update(['count_num' => $count_num + $result[0]['count_num']]) . $this->where('product_id', '=', $product_id);
            } else {
                return false;
            }
        } else {
            if ($product_num >= $count_num) {
                $sql = $this->insert(['member_id' => $member_id, 'product_id' => $product_id, 'count_num' => $count_num]);
            } else {
                return false;
            }
        }
        return $this->execute($sql);
    }
    public function updateCart($param) {
        $cart_id = $param['cart_id'];
        $count_num = $param['count_num'];
        $sql = $this->update(['count_num' => $count_num]) . $this->where('cart_id', '=', $cart_id);
        return $this->execute($sql);
    }
    //刪除購物車中一條紀錄
    public function deleteCart($param) {
        $cart_id = $param['cart_id'];
        $sql = $this->delete() . $this->where('cart_id', '=', $cart_id);
        return $this->execute($sql);
    }
    //清空購物車
    public function clearCart($member_id) {
        $sql = $this->delete() . $this->where('member_id', '=', $member_id);
        return $this->execute($sql);
    }
    public function getCart($param) {
        $member_id = $param['member_id'];
        $sql = $this->select($this->table) . ' AS c,product AS p WHERE p.product_id IN (' . $this->select($this->table, ['c.product_id']) . $this->where('c.member_id', '=', $member_id) . ')';
        return $this->execute($sql);
    }
    public function checkout($param) {
        $getcart = $this->getCart($param);
        return $getcart;
        foreach ($getcart as $a) {
            $param['arr'][] = ['product_id' => $a['product_id'], 'count_num' => $a['count_num']];
        }
        $order = new OrderList();
        return $order->insertOrder($param);
    }
    public function isCart($param) {
        $member_id = $param['member_id'];
        $product_id = $param['product_id'];
        $sql = $this->select($this->table) . $this->where('member_id', '=', $member_id) . $this->and('product_id', '=', $product_id);
        
        return $this->execute($sql);
    }
    //刪除購物車中一條紀錄
    public function deleteCartByMIdPId($param) {
        $member_id = $param['member_id'];
        $product_id = $param['product_id'];
        $sql = $this->delete() . $this->where('member_id', '=', $member_id) . $this->and('product_id', '=', $product_id);
        return $this->execute($sql);
    }
}
