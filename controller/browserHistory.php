<?php

use model\Model;

require_once('./product.php');
require_once('./commentList.php');

class BrowserHistory extends Model {
    protected $table = 'browsing_history';

    public function insertBrowserHis($param) {
        $browse_time = date("Y-m-d H:i:s");
        $sql = $this->insert(['member_id' => $_SESSION['member_id'], 'product_id' => $param['product_id'], 'browse_time' => $browse_time]);
        $this->execute($sql);
    }

    public function getBrowserHis() {
        $member_id = $_SESSION['member_id'];
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
        $member_id = $_SESSION['member_id'];
        $product_id = $param['product_id'];
        $sql = $this->delete() . $this->where('member_id', '=', $member_id) . $this->and('product_id', '=', $product_id);
        $this->execute($sql);
    }

    public function getDistinctBrowserHis() {
        $member_id = $_SESSION['member_id'];
        $sql = $this->select($this->table) . $this->where('member_id', '=', $member_id) . $this->orderby('browsing_his_id', 'DESC');
        $list = $this->execute($sql);
        $count = 0;
        $result = array();
        for ($i = 0; $i < count($list); $i++) {
            $dup = 0;
            for ($j = 0; $j < $count; $j++) {
                if ($list[$i]['product_id'] == $result[$j]['product_id']) {
                    $dup = 1;
                }
            }
            if (!$dup) {
                $result[$count] = $list[$i];
                $count++;
            }
        }
        $commentlist = new CommentList();
        $product = new Product();
        foreach ($result as $r) {
            $param['product_id'] = $r['product_id'];
            $arr[] = [0 => $product->searchProductById($param), 1 => $r, 2 => $commentlist->getAvgStarById($param)];
        }
        return $arr;
    }
}
