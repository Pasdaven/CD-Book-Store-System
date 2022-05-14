<?php

use model\Model;

require_once('./product.php');

class FollowList extends Model {
    protected $table = 'follow_list';

    public function insertFollowList($param) {
        $sql = $this->insert(['member_id' => $param['member_id'], 'product_id' => $param['product_id']]);
        $this->execute($sql);
    }

    public function deleteFollowList($param) {
        $sql = $this->delete() . $this->where('member_id', '=', $param['member_id']) . ' and ' . 'product_id = ' . $param['product_id'];
        $this->execute($sql);
    }

    public function getFollowList($param) {
        $member_id = $param['member_id'];
        $sql = $this->select($this->table) . $this->where('member_id', '=', $member_id);
        $result = $this->execute($sql);
        $product = new Product();
        foreach ($result as $r) {
            $arr[] = $product->searchProductById($r['product_id']);
        }
        return $arr;
    }
}
