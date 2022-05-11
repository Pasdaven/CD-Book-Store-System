<?php

use model\Model;

class CommentList extends Model {
    protected $table = 'comment_list';
    public function createComment($param) {
        $member_id = $param['member_id'];
        $product_id = $param['product_id'];
        $product_comment = $param['product_comment'];
        $comment_create_time = date("Y-m-d H:i:s");
        $sql = $this->insert(['member_id' => $member_id, 'product_id' => $product_id, 'product_comment' => $product_comment, 'comment_create_time' => $comment_create_time]);
        return $this->execute($sql);
    }
}
