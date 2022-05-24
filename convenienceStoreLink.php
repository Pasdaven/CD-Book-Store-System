<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="https://emap.presco.com.tw/c2cemap.ashx?eshopid=870&&servicetype=1&url=http://localhost/CD-Book-Store-System/convenienceStoreLink.php">link</a>
    <?php
    $store_data = $_POST;
    if (count($store_data) != 0) {
        print_r($store_data);
    } 
    ?>
</body>
</html>