<?php

session_start();

if (isset($_SESSION['member_id']) && isset($_SESSION['email'])) {
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>searchProduct</title>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/CD-Book-Store-System/view/src/style/followList.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css" />
    </head>

    <body>
        <div class="page">
            <div class="container-fluid bg-white p-3">
                <div class="row">
                    <div class="col-3">
                        <div class="nav-item d-flex mt-2">
                            <input class="form-control search_input" type="text" id="search" placeholder="search">
                            <button class="navbar_btn mx-1" type="button" onclick="" id="search_btn"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <div class="nav-item gradient-text">
                            <a href="http://localhost/CD-BOOK-STORE-SYSTEM/view/" class="navbar_topic">
                                <h1><strong>Pascal Store</strong></h1>
                            </a>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-end mt-2">
                        <div class="nav-item username-nav-item" style="height: 32px;">
                            <a class="navbar_btn mx-1" type="button" href="http://localhost/CD-BOOK-STORE-SYSTEM/view/cart/"><i class="bi bi-cart-fill"></i> </a>

                        </div>
                    </div>
                </div>
            </div>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header d-flex justify-content-center username-offcanvas-header">

                </div>
                <div class="offcanvas-body">
                    <div class="d-flex justify-content-center">
                        <a type="button" class="offcanvas_btn my-3" href="http://localhost/CD-BOOK-STORE-SYSTEM/view/editMemberInfo/"><i class="bi bi-pen mx-3"></i>Edit Profile</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a type="button" class="offcanvas_btn my-3" href="http://localhost/CD-BOOK-STORE-SYSTEM/view/orderList/"><i class="bi bi-card-list mx-3"></i></i>Order List</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a type="button" class="offcanvas_btn my-3" href="http://localhost/CD-BOOK-STORE-SYSTEM/view/cart/"><i class="bi bi-cart-fill mx-3"></i>Shopping Cart</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a type="button" class="offcanvas_btn my-3" href="http://localhost/CD-BOOK-STORE-SYSTEM/view/followList/"><i class="bi bi-list-stars mx-3"></i>Following</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a type="button" class="offcanvas_btn my-3" href="http://localhost/CD-BOOK-STORE-SYSTEM/view/browserHistory/"><i class="bi bi-clock-history mx-3"></i>History</a>
                    </div>
                </div>
                <div class="offcanvas-footer d-flex justify-content-center">
                    <a type="button" class="offcanvas_btn" href="" onclick="logout()"><i class="bi bi-box-arrow-left mx-2"></i>Log out</a>
                </div>
            </div>
            <div class="container py-5">
                <div class="row align-items-center justify-content-center">
                    <div>
                        <h1 class="mx-auto" style="width: 300px;font-size:36px;"><i class="mx-4 bi bi-heart" style="color: #F0B0B0;"></i>Following</h1>
                    </div>
                </div>
                <div class="row my-3 justify-content-center">
                    <div class="col-12 scroll" style="width: 1053px;height: 700px;" id="searchProduct">


                    </div>
                </div>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="../src/script/member.js"></script>
        <script src="../src/script/cart.js"></script>
        <script src="../src/script/searchProduct.js"></script>
        <script src="../src/script/searchProductLoad.js"></script>
    </body>

    </html>
<?php

} else {
    header("Location: http://localhost/CD-BOOK-STORE-SYSTEM/view/login");
}
?>