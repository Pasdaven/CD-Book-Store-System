<?php

class Model {

    //連接資料庫
    private function getDB() {
        $host = 'localhost';
        $dbuser = 'root';
        $dbpassword = '';
        $dbname = 'CD_Book_Store_System';
        $link = mysqli_connect($host, $dbuser, $dbpassword, $dbname);

        return $link;
    }
    //執行sql，返回結果集
    public function execute($sql) {
        $result = mysqli_query($this->getDB(), $sql);
        return $result;
    }
    public function insert($table, $line) {
        return "INSERT INTO $table (" . implode(',', array_keys($line)) . ") VALUES (" . implode(',', $line) . ")";
    }
    public function update($table, $line) {
        $str = "";
        $i = 0;
        foreach ($line as $kname => $kvalue) {
            $str .= $kname . "=" . $kvalue;
            $i++;
            if ($i < count($line)) {
                $str .= ",";
            }
        }
        return "UPDATE $table SET " . $str;
    }
    public function delete($table) {
        return "DELETE FROM $table";
    }
    public function select($table, $arr = NULL) {
        if ($arr) {
            return "SELECT " . implode(',', $arr) . " FROM $table";
        } else {
            return "SELECT * FROM $table";
        }
    }
    public function where($kname, $comparator, $kvalue) {
        return " WHERE $kname $comparator $kvalue";
    }
    public function orwhere($kname, $operator, $kvalue) {
        return " OR $kname $operator $kvalue";
    }
    public function orderby($kname, $sort) {
        return " ORDER BY $kname $sort";
    }
    public function naturaljoin($table) {
        return " NATURAL JOIN $table";
    }
    public function leftjoin($table, $kname, $comparator, $kvalue) {
        return " LEFT JOIN ON $kname $comparator $kvalue";
    }
    //取整個表
    public function getAll() {
        $sql = "SELECT * FROM $this->table";
        $list = $this->execute($sql);
        while ($row = mysqli_fetch_assoc($list)) {
            $result[] = $row;
        }
        return $result;
    }
    //取某屬性的全部值
    public function getSingleAttrAll($attr) {
        $sql = "SELECT $attr FROM $this->table";
        $list = $this->execute($sql);
        while ($row = mysqli_fetch_assoc($list)) {
            $result[] = $row;
        }
        return $result;
    }
    //取某表中的一行
    public function getSingle($table, $key_name, $key) {
        $sql = "SELECT * FROM $table WHERE $key_name = '$key'";
        $result = $this->execute($sql);
        $row = mysqli_fetch_assoc($result);
        return $row;
    }
    //取某表中的多行
    public function getMultiple($table, $key_name, $key) {
        $sql = "SELECT * FROM $table WHERE $key_name = '$key'";
        $list = $this->execute($sql);
        if (mysqli_num_rows($list) > 0) {
            while ($row = mysqli_fetch_assoc($list)) {
                $result[] = $row;
            }
            return $result;
        } else {
            return NULL;
        }
    }
    //從某屬性$attr1找另一屬性$attr2
    public function getOtherAttr($attr1, $table, $key, $attr2) {
        $sql = "SELECT $attr2 FROM $table WHERE $attr1 = '$key'";
        $list = $this->execute($sql);
        while ($row = mysqli_fetch_assoc($list)) {
            $result[] = $row;
        }
        return $result;
    }
    //通過某屬性判斷資料是否存在,返回資料筆數
    public function Exist($table, $key_name, $key) {
        $sql = "SELECT * FROM $table WHERE $key_name = '$key'";
        $result = $this->execute($sql);
        return mysqli_num_rows($result);
    }
}
