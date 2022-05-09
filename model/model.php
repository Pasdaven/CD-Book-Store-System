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
}
