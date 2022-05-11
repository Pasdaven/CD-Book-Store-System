<?php

use model\Model;

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
}
