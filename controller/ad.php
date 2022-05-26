<?php

use model\Model;

class Ad extends Model {
    protected $table = 'ad';

    public function insertAd($param) {
        $sql = $this->insert(['product_id' => $param['product_id'], 'product_discount' => $param['product_discount']]);
        return $this->execute($sql);
    }

    public function deleteAd($param) {
        $sql = $this->delete() . $this->where('ad_id', '=', $param['ad_id']);
        return $this->execute($sql);
    }

    public function getAd() {
        $sql = $this->select($this->table);
        return $this->execute($sql);
    }
}
