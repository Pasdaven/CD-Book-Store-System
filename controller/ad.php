<?php

use model\Model;

class Ad extends Model {
    protected $table = 'ad';

    public function insertAd($param) {
        if (count($this->execute($this->select($this->table) . $this->where('product_id', '=', $param['product_id']))) == 1) {
            return 'exist';
        }

        $productData = $this->execute($this->select('product') . $this->where('product_id', '=', $param['product_id']));
        if (count($productData) != 1) {
            return false;
        }
        $this->execute($this->update(['product_price' => $productData[0]['product_price'] * $param['product_discount']], 'product') . $this->where('product_id', '=', $param['product_id']));

        $sql = $this->insert(['product_id' => $param['product_id'], 'product_discount' => $param['product_discount']]);
        return $this->execute($sql);
    }

    public function deleteAd($param) {
        $productData = $this->execute($this->select('product') . $this->where('product_id', '=', $param['product_id']));
        $this->execute($this->update(['product_price' => $productData[0]['product_price'] / $param['product_discount']], 'product') . $this->where('product_id', '=', $param['product_id']));
        $sql = $this->delete() . $this->where('product_id', '=', $param['product_id']);
        return $this->execute($sql);
    }

    public function getAd() {
        $sql = $this->select($this->table);
        return $this->execute($sql);
    }
}
