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
        <title>Payment</title>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="/CD-Book-Store-System/view/src/style/payment.css">
    </head>

    <body>
        <div class="modal fade" id="modalSuccess" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Check Out Success</strong></h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalError" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Please Enter All Information</strong></h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalDeliverError" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Deliver Cannot Choose Both</strong></h5>
                    </div>
                    <div class="modal-body">
                        Please check.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalPayError" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Payment Cannot Choose Both</strong></h5>
                    </div>
                    <div class="modal-body">
                        Please check.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalStoreError" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Please Enter Convenience Store Number</strong></h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalAddressError" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Please Enter Deliver Address</strong></h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalCardError" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Please Enter Credit Card Number</strong></h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">Close</button>
                    </div>
                </div>
            </div>
        </div>

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
            <div class="row pb-3">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="d-flex justify-content-center">
                        <div class="check_out">
                            <div class="row">
                                <div class="col-7">
                                    <div class="check_inner">
                                        <h2>Check Out</h2>
                                        <div class="" id="customerInfo">
                                            <h5>Customer Info</h5>
                                            <input class="form-control my-2 info_input" type="text" id="name" placeholder="Name"><br>
                                            <input class="form-control my-2 info_input" type="text" id="phone" placeholder="Phone"><br>
                                        </div>
                                        <div class="" id="delivery">
                                            <h5>Delivery</h5>
                                            <div id="convienceStoreDelivery">
                                                <input class="form-check-input register_checkbox mx-4" type="checkbox" id="convienceStore" value="convenience store delivery"><strong>
                                                    <span>Convience Store Delivery</span>
                                                </strong></input><br>
                                                <input class="form-control my-2 info_input" type="text" id="StoreNumber" placeholder="Convience Store Number"><br>
                                                <a href="https://www.ibon.com.tw/retail_inquiry.aspx#gsc.tab=0" target="_blank" class="btn green" style="font-size: 18px; margin-left: 15px; width: 200px;" onclick="">Search
                                                    Store Number</a><br>
                                            </div>
                                            <input class="form-check-input register_checkbox mx-4" type="checkbox" id="home" value="home delivery"><strong>
                                                <span>Home Delivery</span>
                                            </strong></input><br>
                                            <input class="form-control my-2 info_input" type="text" id="order_address" placeholder="Address"><br>
                                        </div>
                                        <div class="" id="payment">
                                            <h5>Payment</h5>
                                            <input class="form-check-input register_checkbox mx-4" type="checkbox" id="creditCard" value="credit card"><strong>
                                                <span>Credit Card</span>
                                            </strong></input><br>
                                            <input class="form-control my-2 info_input" type="text" id="creditCardNumber" placeholder="Credit Card Number"><br>
                                            <input class="form-check-input register_checkbox mx-4" type="checkbox" id="cash" value="cash"><strong>
                                                <span>Cash</span>
                                            </strong></input><br>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="summary p-5">
                                        <h2>Summary</h2>
                                        <div class="price">
                                            <h4 id="subtotal">Subtotal : </h4>
                                            <h4 id="deliver">Deliver : </h4>
                                            <h4 id="discount">Discount : </h4>
                                            <hr style="height: 5px;">
                                            <h4 id="total">Total : </h4>
                                        </div>
                                        <div class="d-flex justify-content-center my-5">
                                            <button class="btn blue px-5 mx-2" type="submit" onclick="checkout();">Buy</button>
                                            <button class="btn blue px-5 mx-2" type="submit" onclick="window.history.back();">Back</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="/CD-Book-Store-System/view/src/script/member.js"></script>
        <script src="../src/script/searchProduct.js"></script>
        <script src="/CD-BOOK-STORE-SYSTEM/view/src/script/cart.js"></script>
        <script>
            getUrl();
            let memberRes = getMemberInfo();
            displayUserName(memberRes);
        </script>
    </body>

    </html>

<?php

} else {
    header("Location: http://localhost/CD-BOOK-STORE-SYSTEM/view/login");
}
?>