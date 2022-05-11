<?php
$sql = $this->select('table') . $this->where('id', '=', '10');
//找幾個都要打[]
$sql = $this->select('table', ['id', 'name']) . $this->where('id', '=', '10');
//result是陣列
$result = $this->execute($sql);

$sql = $this->insert(['price' => 400, 'product' => 'Laptop', 'prod' => 'Laptop'], 'table');
$sql = $this->insert(['price' => 400, 'product' => 'Laptop', 'prod' => 'Laptop']);
//無回傳值
$this->execute($sql);

$sql = $this->update(['price' => 400, 'product' => 'Laptop', 'prod' => 'Laptop']);
$sql = $this->update(['price' => 400]);
$this->execute($sql);

$sql = $this->delete() . $this->where('id', '=', '10');

$sql = $this->select('table') . $this->where('id', '=', $this->select('othertable', ['id']));
$sql = $this->select('table') . $this->naturaljoin('othertable');

$sql = $this->select('table', ['id', 'name']) . $this->leftjoin('othertable');
