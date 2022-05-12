<?php

use model\Model;

class Ad extends Model {
    protected $table = 'ad';

    public function insertAd($param) {
        $sql = $this->insert(['ad_description' => $param['ad_description'], 'ad_img_id' => $param['ad_img_id']]);
        $this->execute($sql);
    }

    public function deleteAd($param) {
        $sql = $this->delete() . $this->where('ad_id', '=', $param['ad_id']);
        $this->execute($sql);
    }

    public function getAd() {
        $sql = $this->select($this->table);
        return $this->execute($sql);
    }
}
