<?php

use model\Model;

class Product extends Model {

    protected $table = "product";

    // 使用商品名稱模糊查詢商品名稱含有該字串的商品
    public function searchProductByName($param) {
        $product_name = $param["product_name"];
        $sql = $this->select($this->table) . $this->where('product_name', 'LIKE', "%{$product_name}%");

        return $this->execute($sql);
    }

    // 使用商品id查詢商品庫存
    public function searchProductNum($param) {
        $product_id = $param["product_id"];
        $sql = $this->select($this->table, ['product_number']) . $this->where('product_id', '=', $product_id);

        return $this->execute($sql);
    }

    // 更新傳入商品id的商品庫存
    public function updateProductNum($param) {
        $product_id = $param["product_id"];
        $new_product_number = $param["new_product_number"];
        $sql = $this->update(['product_number' => $new_product_number]) . $this->where('product_id', '=', $product_id);
        return $this->execute($sql);
    }

    // 查詢某商品id對應的價錢
    public function searchPriceById($product_id) {
        $sql = $this->select($this->table, ['product_price']) . $this->where('product_id', '=', $product_id);

        return $this->execute($sql);
    }

    public function createProduct($param) {
        $product_name = $param['product_name'];
        $product_description = $param['product_description'];
        $product_image = $param['product_image'];
        $product_price = $param['product_price'];
        $product_number = $param['product_number'];
        $sql = $this->insert(['product_name' => $product_name, 'product_description' => $product_description, 'product_image' => $product_image, 'product_price' => $product_price, 'product_number' => $product_number]);

        return $this->execute($sql);
    }

    // 在訂單建立時減少商品庫存
    public function reduceProductNum($product_id, $count_num) {
        $param = ['product_id' => $product_id];
        $current_product_number = $this->searchProductNum($param);
        $new_product_number = $current_product_number - $count_num;
        $sql = $this->update(['product_number' => $new_product_number]) . $this->where('product_id', '=', $product_id);

        return $this->execute($sql);
    }
}
