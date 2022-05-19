<?php

use model\Model;

require_once('./orderProduct.php');
require_once('./coupon.php');
require_once('./cart.php');
class OrderList extends Model {
    protected $table = 'order_list';
    public function insertOrder($param) {
        $name = $param['name'];
        $member_id = $param['member_id'];
        $phone_num = $param['phone_num'];
        $price = $param['price'];
        $subtotal = $param['subtotal'];
        $deliver = $param['deliver'];
        $discount = $param['discount'];
        $convenience_store = $param['convenience_store'];
        $order_address = $param['order_address'];
        $payment = $param['payment'];
        $order_state = 'wait';
        $deliver_method = $param['deliver_method'];
        $sql = $this->insert([
            'name' => $name, 'member_id' => $member_id, 'deliver_method' => $deliver_method, 'price' => $price, 'subtotal' => $subtotal, 'deliver' => $deliver, 'discount' => $discount, 'phone_num' => $phone_num, 'convenience_store' => $convenience_store, 'order_address' => $order_address, 'payment' => $payment, 'order_state' => $order_state
        ]);
        $order_id = $this->execute($sql);
        $shipping_fee = 0;
        $coupon_fee = 0;
        // if ($deliver_method == 'home delivery') {
        //     $shipping_fee = 100;
        // } else {
        //     $shipping_fee = 60;
        // }
        $coupon = new Coupon();
        foreach ($param['coupon_id'] as $coupon_id) {
            // $feature = $coupon->getCouponFeature($coupon_id)[0]['feature'];
            // if ($feature == 'free-shipping') {
            //     $shipping_fee = 0;
            // } else {
            //     $coupon_fee = $feature;
            // }
            $coupon->useCoupon($order_id, $coupon_id);
        }
        $o_p = new OrderProduct();
        $price = $o_p->insertOrderProductAndCalculatePrice($param, $order_id, $coupon_fee, $shipping_fee);
        // $sql = $this->update(['price' => $price]) . $this->where('order_id', '=', $order_id);
        // $this->execute($sql);
        $cart = new Cart();
        return $cart->clearCart($member_id);
    }
    public function getOrder() {
        $sql = $this->select($this->table);
        return $this->execute($sql);
    }

    public function getOrderById($param) {
        $sql = $this->select($this->table) . $this->where('member_id', '=', $param['member_id']);
        return $this->execute($sql);
    }

    public function finishOrder($param) {
        $order_id = $param['order_id'];
        $order_state = 'finish';
        $sql = $this->update(['order_state' => $order_state]) . $this->where('order_id', '=', $order_id);
        return $this->execute($sql);
    }
    public function cancelOrder($param) {
        $order_id = $param['order_id'];
        $order_state = 'cancel';
        $sql = $this->update(['order_state' => $order_state]) . $this->where('order_id', '=', $order_id);
        return $this->execute($sql);
    }
    public function returnOrder($param) {
        $order_id = $param['order_id'];
        $refundAccount = $param['refundAccount'];
        $order_state = 'return';
        $sql = $this->update(['order_state' => $order_state, 'refund_account' => $refundAccount]) . $this->where('order_id', '=', $order_id);
        return $this->execute($sql);
    }
    public function updateOrderState($param) {
        $order_id = $param['order_id'];
        $order_state = $param['order_state'];
        $sql = $this->update(['order_state' => $order_state, 'order_state' => $order_state]) . $this->where('order_id', '=', $order_id);
        return $this->execute($sql);
    }
}
