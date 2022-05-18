<?php

use model\Model;

require_once('./product.php');
require_once('./commentList.php');

class BrowserHistory extends Model {
    protected $table = 'browsing_history';

    public function insertBrowserHis($param) {
        $browse_time = date("Y-m-d H:i:s");
        $sql = $this->insert(['member_id' => $param['member_id'], 'product_id' => $param['product_id'], 'browse_time' => $browse_time]);
        $this->execute($sql);
    }

    public function getBrowserHis($param) {
        $member_id = $param['member_id'];
        $sql = $this->select($this->table) . $this->where('member_id', '=', $member_id) . $this->orderby('browsing_his_id', 'DESC');
        $result = $this->execute($sql);
        $commentlist = new CommentList();
        $product = new Product();
        foreach ($result as $r) {
            $param['product_id'] = $r['product_id'];
            $arr[] = [0 => $product->searchProductById($param), 1 => $r, 2 => $commentlist->getAvgStarById($param)];
        }
        return $arr;
    }

    public function deleteBrowserHis($param) {
        $member_id = $param['member_id'];
        $product_id = $param['product_id'];
        $sql = $this->delete() . $this->where('member_id', '=', $member_id) . $this->and('product_id', '=', $product_id);
        $this->execute($sql);
    }
}
