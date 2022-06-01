<?php

use model\Model;

require_once("member.php");

class Coupon extends Model {

    protected $table = 'coupon';

    // 發送免運券給信用分數大於80的會員
    public function sendFreeShippingCoupon() {
        $month = date("Y-m");
        if (count($this->execute($this->select($this->table) . $this->where('coupon_month', '=', $month))) != 0) {
            return false;
        }

        $member = new Member();
        $memberList = $member->getMemberCredit();
        foreach ($memberList as $value) {
            $sql = $this->insert(['member_id' => $value['member_id'], 'feature' => 'free-shipping', 'coupon_month' => $month]);
            $this->execute($sql);
        }

        $year = date("Y");
        $month = date("m");

        if ($month == 1) {
            $month = 12;
            $year -= 1;
        } else {
            $month -= 1;
        }

        $sql = 'SELECT member_id, SUM(price) FROM order_list WHERE order_year = ' . $year . ' and order_month = ' . $month . ' GROUP BY member_id';
        $orderList = $this->execute($sql);
        for ($i = 0; $i < count($orderList); $i++) {
            if ($orderList[$i]['SUM(price)'] > 5000) {
                $this->execute($this->insert(['member_id' => $orderList[$i]['member_id'], 'feature' => '150', 'coupon_month' => date("Y-m")]));
            } else if ($orderList[$i]['SUM(price)'] > 3000 && $orderList[$i]['SUM(price)'] < 4999) {
                $this->execute($this->insert(['member_id' => $orderList[$i]['member_id'], 'feature' => '100', 'coupon_month' => date("Y-m")]));
            } else if ($orderList[$i]['SUM(price)'] > 1000 && $orderList[$i]['SUM(price)'] < 2999) {
                $this->execute($this->insert(['member_id' => $orderList[$i]['member_id'], 'feature' => '50', 'coupon_month' => date("Y-m")]));
            }
        }
        return true;
    }

    // 查詢某個member_id擁有的coupon
    public function getCoupon() {
        $member_id = $_SESSION['member_id'];
        $month = date("Y-m");
        $sql = $this->select($this->table) . $this->where('member_id', '=', $member_id) . $this->and('order_id', '=', $this->null) . $this->and('coupon_month', '=', $month);
        return $this->execute($sql);
    }

    // 透過coupon_id查詢卷種類
    public function getCouponFeature($coupon_id) {
        $sql = $this->select($this->table, ['feature']) . $this->where('coupon_id', '=', $coupon_id);
        return $this->execute($sql);
    }

    public function useCoupon($order_id, $coupon_id) {
        $sql = $this->update(['order_id' => $order_id]) . $this->where('coupon_id', '=', $coupon_id);
        return $this->execute($sql);
    }
}
