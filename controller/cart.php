<?php

use model\Model;

class Cart extends Model {
    protected $table = 'cart';
    public function insertCart($param) {
        $cart_id = $param['cart_id'];
        $member_id = $param['member_id'];
        $product_id = $param['product_id'];
        $count_id = $param['count_id'];
        $sql = $this->insert(['member_id' => $member_id, 'product_id' => $product_id, 'cart_id' => $cart_id, 'count_id' => $count_id]);
        return $this->execute($sql);
    }
    public function updateCart($param) {
        $comment_id = $param['comment_id'];
        $product_comment = $param['product_comment'];
        $comment_create_time = date("Y-m-d H:i:s");
        $sql = $this->update(['product_comment' => $product_comment, 'comment_create_time' => $comment_create_time]) . $this->where('comment_id', '=', $comment_id);
        return $this->execute($sql);
    }
    public function deleteCart($param) {
        $comment_id = $param['comment_id'];
        $sql = $this->delete() . $this->where('comment_id', '=', $comment_id);
        echo $sql;
        return $this->execute($sql);
    }
    public function getCart() {
        $sql = $this->select($this->table);
        return $this->execute($sql);
    }
}
