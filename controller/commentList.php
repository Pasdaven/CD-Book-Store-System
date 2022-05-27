<?php

use model\Model;
require_once "member.php";

class CommentList extends Model {
    protected $table = 'comment_list';
    public function createComment($param) {
        $member_id = $_SESSION['member_id'];
        $product_id = $param['product_id'];
        $star = $param['star'];
        $product_comment = $param['product_comment'];
        $comment_create_time = date("Y-m-d H:i:s");
        $sql = $this->insert(['member_id' => $member_id, 'product_id' => $product_id, 'star' => $star, 'product_comment' => $product_comment, 'comment_create_time' => $comment_create_time]);
        return $this->execute($sql);
    }
    public function updateComment($param) {
        $comment_id = $param['comment_id'];
        $product_comment = $param['product_comment'];
        $comment_create_time = date("Y-m-d H:i:s");
        $sql = $this->update(['product_comment' => $product_comment, 'comment_create_time' => $comment_create_time]) . $this->where('comment_id', '=', $comment_id);
        return $this->execute($sql);
    }
    public function deleteComment($param) {
        $comment_id = $param['comment_id'];
        $sql = $this->delete() . $this->where('comment_id', '=', $comment_id);
        return $this->execute($sql);
    }
    public function getCommentList() {
        $sql = $this->select($this->table);
        return $this->execute($sql);
    }

    public function getAvgStarById($param) {
        $product_id = $param['product_id'];
        $sql = $this->select($this->table, ['AVG(star)']) . $this->where('product_id', '=', $product_id);
        return $this->execute($sql);
    }
    public function getCommentByProductId($param) {
        $member = new Member();
        $product_id = $param['product_id'];
        $sql = $this->select($this->table) . $this->where('product_id', '=', $product_id);
        $result = $this->execute($sql);
        for ($i = 0; $i < count($result); $i++) {
            $result[$i]['member_name'] = $member->getMemberNameByMemberId($result[$i]['member_id'])[0]['member_name'];
        }
        return $result;
    }
}
