<?php

use model\Model;

require_once('./product.php');
require_once('./commentList.php');

class FollowList extends Model {
    protected $table = 'follow_list';

    public function insertFollowList($param) {
        $sql = $this->insert(['member_id' => $param['member_id'], 'product_id' => $param['product_id']]);
        $this->execute($sql);
    }

    public function deleteFollowList($param) {
        $member_id = $param['member_id'];
        $product_id = $param['product_id'];
        $sql = $this->delete() . $this->where('member_id', '=', $member_id) . $this->and('product_id', '=', $product_id);
        $this->execute($sql);
    }

    public function getFollowList($param) {
        $member_id = $param['member_id'];
        $sql = $this->select($this->table) . $this->where('member_id', '=', $member_id);
        $result = $this->execute($sql);
        $commentlist = new CommentList();
        $product = new Product();
        foreach ($result as $r) {
            $param['product_id'] = $r['product_id'];
            $arr[] = [0 => $product->searchProductById($param), 1 => $commentlist->getAvgStarById($param)];
        }
        return $arr;
    }

    public function isFollow($param) {
        $member_id = $param['member_id'];
        $product_id = $param['product_id'];
        $sql = $this->select($this->table) . $this->where('member_id', '=', $member_id) . $this->and('product_id', '=', $product_id);

        return $this->execute($sql);
    }
}
