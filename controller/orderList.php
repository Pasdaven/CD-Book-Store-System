<?php

use model\Model;

require_once('./orderProduct.php');

class OrderList extends Model {
    protected $table = 'order_list';
    public function insertOrder($param) {
        $member_id = $param['member_id'];
        $product_id = $param['product_id'];
        $count_num = $param['count_num'];
        $sql = $this->select($this->table, ['count_num']) . $this->where('product_id', '=', $product_id);
        if ($result = $this->execute($sql)) {
            $sql = $this->update(['count_num' => $count_num + $result[0]['count_num']]) . $this->where('product_id', '=', $product_id);
        } else {
            $sql = $this->insert(['member_id' => $member_id, 'product_id' => $product_id, 'count_num' => $count_num]);
        }
        return $this->execute($sql);
    }
    public function updateOrder($param) {
        $cart_id = $param['cart_id'];
        $count_num = $param['count_num'];
        $sql = $this->update(['count_num' => $count_num]) . $this->where('cart_id', '=', $cart_id);
        return $this->execute($sql);
    }
    public function deleteOrder($param) {
        $cart_id = $param['cart_id'];
        $sql = $this->delete() . $this->where('cart_id', '=', $cart_id);
        return $this->execute($sql);
    }
    public function getOrder() {
        $sql = $this->select($this->table);
        return $this->execute($sql);
    }
}
