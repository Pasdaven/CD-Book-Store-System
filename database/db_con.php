<?php
$host = 'localhost';
$dbuser = 'root';
$dbpassword = '';
$dbname = 'CD_Book_Store_System';
$link = mysqli_connect($host,$dbuser,$dbpassword,$dbname);
if($link){
    // echo "資料庫連接成功</br>";
}
else {
    echo "資料庫連接失敗</br>" . mysqli_connect_error();
}
