<?php

require('../model/model.php');
require_once('./product.php');


$target_dir = "../view/src/image/book/";
$target_file = $target_dir . basename($_FILES["product_image"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if (isset($_POST["submit"])) {
    $check = getimagesize($_FILES["product_image"]["tmp_name"]);
    if ($check !== false) {
        $uploadOk = 1;
    } else {
        $uploadOk = 0;
    }
}



// Allow certain file formats
if ($imageFileType == "") {
} else if (
    $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif"
) {
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <h1>Sorry, only JPG, JPEG, PNG & GIF files are allowed.</h1>
    </body>

    </html>
<?php
    $uploadOk = 0;
}



if (move_uploaded_file($_FILES["product_image"]["tmp_name"], $target_file) || $uploadOk != 0) {
    $_POST['product_image'] = "/CD-Book-Store-System/view/src/image/book/" . basename($_FILES["product_image"]["name"]);
    $product = new Product();
    $product->updateProduct($_POST);
}
header("Refresh:3;url=/CD-Book-Store-System/view/storeManageProduct");
