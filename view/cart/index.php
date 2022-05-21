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
        <title>cart</title>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/CD-Book-Store-System/view/src/style/cart.css">
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
            <div class="container">
                <div class="row my-1">
                    <div class="container col-7">
                        <div class="row align-items-center justify-content-center pb-3" style="width:100%;">
                            <div class="py-4">
                                <h1>Shopping Cart</h1>
                            </div>
                            <div class="col-5">
                                <h4>Product</h4>
                            </div>
                            <div class="col-3">
                                <h4 class="text-center">Quanity</h4>
                            </div>
                            <div class="col-3">
                                <h4>Total Price</h4>
                            </div>
                        </div>
                        <div class="scroll" style="height: 55vh;" id="cart">

                        </div>
                        <div class="my-5">
                            <button type="button" class="btn-con-Shop"><i class="bi bi-chevron-left"></i>Continue Shopping</button>
                        </div>
                    </div>
                    <div class="container col-5">
                        <div class="ms-5 py-4 d-flex justify-content-center align-items-center">
                            <div class="card summary pb-5">


                                <div class="row">
                                    <div class="py-4 px-5">
                                        <h1 class="px-3">Summary</h1>
                                    </div>
                                </div>
                                <div class="card add-coupon ps-5">
                                    <div class="py-5">
                                        <h4 class="mb-4">Add Coupon:
                                            <select class="form-select" id="form-select" style="width: 190px;display: inline;border: none;border-radius: 50px;font-size:24px;cursor:pointer;" aria-label="Default select example">
                                                <option class="couponOption" selected>clear all</option>


                                            </select>
                                        </h4>
                                        <h4 id="displayCoupon">Coupon:


                                        </h4>
                                    </div>
                                </div>
                                <div class="row px-5 mx-3">
                                    <div class="mt-4 pt-3 pb-3 px-0 row">
                                        <h3 class="col-6">Subtotal :</h3>
                                        <h3 id="subtotal" class="col-6">$0</h3>
                                    </div>
                                    <div class="row pb-3 px-0">
                                        <h3 class="col-6">Discount :</h3>
                                        <h3 id="discount" class="col-6">$0</h3>
                                    </div>
                                    <div class="row pb-3 px-0">
                                        <h3 class="col-6">Deliver :</h3>
                                        <h3 id="shipping" class="col-6">$60</h3>
                                    </div>
                                    <div class="pt-4 px-0 border-line">
                                        <h3>TOTAL : <a id="total">$0</a></h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="my-3">
                            <button type="button" class="btn-check-out">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="../src/script/member.js"></script>
        <script src="../src/script/cart.js"></script>
        <script src="../src/script/searchProduct.js"></script>
        <script src="../src/script/cartLoad.js"></script>
    </body>

    </html>

<?php

} else {
    header("Location: http://localhost/CD-BOOK-STORE-SYSTEM/view/login");
}
?>