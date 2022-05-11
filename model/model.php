<?php

namespace model;

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
        $list = mysqli_query($this->getDB(), $sql);
        if (is_object($list)) {
            $result = array();
            while ($row = mysqli_fetch_assoc($list)) {
                $result[] = $row;
            }
            return $result;
        }
        return $list;
    }
    public function insert($line, $table = NULL) {
        if ($table) {
            return "INSERT INTO $table (" . implode(',', array_keys($line)) . ") VALUES (\"" . implode('","', $line) . "\")";
        }
        return "INSERT INTO $this->table (" . implode(',', array_keys($line)) . ") VALUES (\"" . implode('","', $line) . "\")";
    }
    public function update($line) {
        $str = "";
        $i = 0;
        foreach ($line as $kname => $kvalue) {
            $str .= $kname . "=" . $kvalue;
            $i++;
            if ($i < count($line)) {
                $str .= "','";
            }
        }
        return "UPDATE $this->table SET " . "'" . $str . "'";
    }
    public function delete() {
        return "DELETE FROM $this->table";
    }
    public function select($table, $arr = NULL) {
        if ($arr) {
            return "SELECT " . implode(',', $arr) . " FROM $table";
        } else {
            return "SELECT * FROM $table";
        }
    }
    public function where($kname, $comparator, $kvalue) {
        return " WHERE $kname $comparator '$kvalue'";
    }
    public function orwhere($kname, $operator, $kvalue) {
        return " OR $kname $operator '$kvalue'";
    }
    public function orderby($kname, $sort) {
        return " ORDER BY $kname $sort";
    }
    public function naturaljoin($table) {
        return " NATURAL JOIN $table";
    }
    public function leftjoin($table, $kname, $comparator, $kvalue) {
        return " LEFT JOIN ON $table $kname $comparator '$kvalue'";
    }
}
