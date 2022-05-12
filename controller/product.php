<?php

use model\Model;

class Product extends Model {

    protected $table = "product";

    // 使用商品名稱模糊查詢商品名稱含有該字串的商品
    public function searchProductByName($param) {
        $product_name = $param["product_name"];
        $sql = $this->select($this->table) . $this->where('product_name', 'LIKE', "%{$product_name}%");
        $result = $this->execute($sql);
        
        return $result;
    }
    
    // 使用商品id查詢商品庫存
    public function searchProductNum($param) {
        $product_id = $param["product_id"];
        $sql = $this->select($this->table, ['product_number']) . $this->where('product_id', '=', $product_id);
        $result = $this->execute($sql);
        
        return $result;
    }
    
    // 更新傳入商品id的商品庫存
    public function updateProductNum($param) {
        $product_id = $param["product_id"];
        $new_product_number = $param["new_product_number"];
        $sql = $this->update(['product_number' => $new_product_number]) . $this->where('product_id', '=', $product_id);
        $result = $this->execute($sql);
        
        return $result;
    }
}
