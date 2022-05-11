<?php

use model\Model;

class BrowserHistory extends Model {
    protected $table = 'browsing_history';

    public function insertBrowserHis($param) {
        $sql = $this->insert(['member_id' => $param['member_id'], 'product_id' => $param['product_id'], 'browse_time' => $param['browse_time']]);
        $this->execute($sql);
    }

    public function getBrowserHis() {
        $sql = $this->select($this->table);
        return $this->execute($sql);
    }
}
