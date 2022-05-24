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
                    <div class="col-3" id="search-div">
                        <div class="nav-item d-flex mt-2">
                            <input class="form-control search_input" type="text" id="search" placeholder="search">
                            <button class="navbar_btn mx-1" type="button" onclick="" id="search_btn"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                    <div class="col-6 d-flex justify-content-center">
                        <div class="nav-item gradient-text">
                            <a href="/CD-Book-Store-System/view/" class="navbar_topic">
                                <h1><strong>Pascal Store</strong></h1>
                            </a>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-end mt-2">
                        <div class="nav-item username-nav-item" style="height: 32px;">
                            <a class="navbar_btn mx-1" type="button" href="/CD-Book-Store-System/view/cart/"><i class="bi bi-cart-fill"></i> </a>

                        </div>
                    </div>
                </div>
            </div>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header d-flex justify-content-center username-offcanvas-header">

                </div>
                <div class="offcanvas-body">
                    <div class="d-flex justify-content-center">
                        <a type="button" class="offcanvas_btn my-3" href="/CD-Book-Store-System/view/editMemberInfo/"><i class="bi bi-pen mx-3"></i>Edit Profile</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a type="button" class="offcanvas_btn my-3" href="/CD-Book-Store-System/view/orderList/"><i class="bi bi-card-list mx-3"></i></i>Order List</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a type="button" class="offcanvas_btn my-3" href="/CD-Book-Store-System/view/cart/"><i class="bi bi-cart-fill mx-3"></i>Shopping Cart</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a type="button" class="offcanvas_btn my-3" href="/CD-Book-Store-System/view/followList/"><i class="bi bi-list-stars mx-3"></i>Following</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a type="button" class="offcanvas_btn my-3" href="/CD-Book-Store-System/view/browserHistory/"><i class="bi bi-clock-history mx-3"></i>History</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a type="button" class="offcanvas_btn my-3" href="/CD-Book-Store-System/view/cs/"><i class="bi bi-chat-dots mx-3"></i>Customer Service</a>
                    </div>
                </div>
                <div class="offcanvas-footer d-flex justify-content-center">
                    <a type="button" class="offcanvas_btn" href="" onclick="logout()"><i class="bi bi-box-arrow-left mx-2"></i>Log out</a>
                </div>
            </div>
            <div class="container" style="width:100vw;height:100vh;">
                <div class="row" style="margin-top:12vh;height:80vh;">
                    <div class="col-7" style="height: 100%;">
                        <div class="row align-items-center justify-content-center" style="width:100%;height: 20%;">
                            <div class="py-4" style="height: 50%;">
                                <h1>Shopping Cart</h1>
                            </div>
                            <div class="col-5 d-flex align-items-center" style="height: 50%;">
                                <h4>Product</h4>
                            </div>
                            <div class="col-3 d-flex align-items-center" style="height: 50%;">
                                <h4 class="text-center">Quanity</h4>
                            </div>
                            <div class="col-3 d-flex align-items-center" style="height: 50%;">
                                <h4>Total Price</h4>
                            </div>
                        </div>
                        <div class="scroll" style="height: 65%;" id="cart">

                        </div>
                        <div class="pt-3" style="height: 15%;">
                            <button type="button" class="btn-con-Shop"><i class="bi bi-chevron-left"></i>Continue Shopping</button>
                        </div>
                    </div>
                    <div class="col-5" style="height: 100%;">
                        <div class="d-flex justify-content-center" style="margin-left:8%;width:100%;height: 85%;">
                            <div class="card summary" style="margin-top:6%;width:100%;height: 96%;">
                                <div class="row" style="width:100%;height: 16%;">
                                    <div class="py-4 px-5">
                                        <h1 class="px-3">Summary</h1>
                                    </div>
                                </div>
                                <div class="card add-coupon ps-5 d-flex" style="width:100%;height: 30%;">
                                    <div class="d-flex col-12 align-items-end" style="padding-bottom:2%;height: 50%;">
                                        <div class="d-flex align-items-center">
                                            <h4 class="m-0 p-0">Add Coupon:</h4>
                                            <select class="form-select ms-3" id="form-select" style="width: 190px;border: none;border-radius: 50px;font-size:24px;cursor:pointer;" aria-label="Default select example">
                                                <option class="couponOption" selected>clear all</option>


                                            </select>
                                        </div>

                                    </div>

                                    <div class="d-flex col-12 align-items-start" style="padding-top:3%;height: 50%;">
                                        <h4 class="m-0 p-0" id="displayCoupon">Coupon:


                                        </h4>
                                    </div>

                                </div>
                                <div class="row" style="margin-left:10%;height: 40%;">
                                    <div class="px-0 row d-flex align-items-end" style="height: 30%;">
                                        <h3 class="col-6">Subtotal :</h3>
                                        <h3 id="subtotal" class="col-6">$0</h3>
                                    </div>
                                    <div class="px-0 row d-flex align-items-center" style="height: 20%;">
                                        <h3 class="col-6">Discount :</h3>
                                        <h3 id="discount" class="col-6">$0</h3>
                                    </div>
                                    <div class="px-0 row d-flex align-items-center" style="height: 20%;">
                                        <h3 class="col-6">Deliver :</h3>
                                        <h3 id="shipping" class="col-6">$60</h3>
                                    </div>
                                    <div class="px-0 border-line" style="margin-top:3%;padding-top:8%;height: 30%;">
                                        <h3>TOTAL : <a id="total">$0</a></h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="pt-3" style="height: 15%;">
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
    header("Location: /CD-Book-Store-System/view/login");
}
?>