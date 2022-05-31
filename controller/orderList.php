<?php

use model\Model;

require_once('./orderProduct.php');
require_once('./coupon.php');
require_once('./cart.php');
require_once('./product.php');
require_once('./member.php');

class OrderList extends Model {
    protected $table = 'order_list';
    public function insertOrder($param) {
        $name = $param['name'];
        $member_id = $_SESSION['member_id'];
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
        $order_year = date("Y");
        $order_month = date("m");
        $order_date = date("d");
        $sql = $this->insert([
            'name' => $name, 'member_id' => $member_id, 'deliver_method' => $deliver_method, 'price' => $price, 'subtotal' => $subtotal, 'deliver' => $deliver, 'discount' => $discount, 'phone_num' => $phone_num, 'convenience_store' => $convenience_store, 'order_address' => $order_address, 'payment' => $payment, 'order_state' => $order_state, 'order_year' => $order_year, 'order_month' => $order_month, 'order_date' => $order_date
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

    public function getOrderById() {
        $sql = $this->select($this->table) . $this->where('member_id', '=', $_SESSION['member_id']);
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
        $member_id = $param['member_id'];

        if (strcmp($order_state, 'overtime') == 0) {
            $sql = $this->select('member', ['credit_num']) . $this->where('member_id', '=', $member_id);
            $credit_num = $this->execute($sql);
            $sql = $this->update(['credit_num' => $credit_num[0]['credit_num'] - 5], 'member') . $this->where('member_id', '=', $member_id);
            $this->execute($sql);
        }

        $sql = $this->update(['order_state' => $order_state]) . $this->where('order_id', '=', $order_id);
        return $this->execute($sql);
    }
    
    public function getOrderByOrderId($order_id) {
        $orderProduct = new OrderProduct();
        $product = new Product();
        $member = new Member();

        $sql = $this->select($this->table) . $this->where('order_id', '=', $order_id);
        $order_info = $this->execute($sql);

        $order_info[0]['member_name'] = $member->getMemberNameByMemberId($order_info[0]['member_id'])[0]['member_name'];
        $param = array('order_id' => $order_info[0]['order_id']);
        $order_product = $orderProduct->getOrderProductById($param);
        for ($i = 0; $i < count($order_product); $i++) {
            $param = array('product_id' => $order_product[$i]['product_id']);
            $order_product[$i]['product_info'] = $product->searchProductById($param);
        }

        $order_info['product'] = $order_product;

        return $order_info;
    }

    public function getMemberIdByOrderId($order_id) {
        $sql = $this->select($this->table, ['member_id']) . $this->where('order_id', '=', $order_id);

        return $this->execute($sql);
    }
}
