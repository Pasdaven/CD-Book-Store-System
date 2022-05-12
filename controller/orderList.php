<?php

use model\Model;

require_once('./orderProduct.php');

class OrderList extends Model {
    protected $table = 'order_list';
    public function insertOrder($param) {
        $member_id = $param['member_id'];
        $coupon_id = $param['coupon_id'];
        $deliver_method = $param['deliver_method'];
        $phone_num = $param['phone_num'];
        $convenience_store = $param['convenience_store'];
        $order_address = $param['order_address'];
        $payment = $param['payment'];
        $order_state = $param['order_state'];
        $sql = $this->insert([
            'member_id' => $member_id, 'coupon_id' => $coupon_id, 'deliver_method' => $deliver_method, 'phone_num' => $phone_num, 'convenience_store' => $convenience_store, 'order_address' => $order_address, 'payment' => $payment, 'order_state' => $order_state
        ]);
        $order_id = $this->execute($sql);
        $o_p = new OrderProduct();
        $price = $o_p->insertOrderProductAndCalculatePrice($param, $order_id);
        $sql = $this->update(['price' => $price]) . $this->where('order_id', '=', $order_id);
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
