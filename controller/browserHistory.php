<?php

use model\Model;

class BrowserHistory extends Model {
    protected $table = 'browser_history';

    public function insertBrowserHis($param) {
        $sql = $this->insert(['member_id' => $param['member_id'], 'product_id' => $param['product_id'], 'browse_time' => $param['browse_time']]);
        $this->execute($sql);
    }
}
