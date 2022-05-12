<?php

use model\Model;

class OrderProduct extends Model {
    protected $table = 'count_records';
    public function insertCountRecords($param) {
        $product_id = $param['product_id'];
        $count_num = $param['count_num'];
        $sql = $this->select($this->table) . $this->where('product_id', '=', $product_id);
        if ($this->execute($sql)) {
            $sql = $this->select($this->table, ['count_num']) . $this->where('product_id', '=', $product_id);
            $result = $this->execute($sql);
            $sql = $this->update(['count_num' => $count_num + $result[0]['count_num']]) . $this->where('product_id', '=', $product_id);
        } else {
            $sql = $this->insert(['product_id' => $product_id, 'count_num' => $count_num]);
        }
        $this->execute($sql);
        $sql = $this->select($this->table, ['count_id']) . $this->where('product_id', '=', $product_id);
        return $this->execute($sql);
    }
}
