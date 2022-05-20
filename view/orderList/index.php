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
        <title>Order List</title>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/CD-Book-Store-System/view/src/style/orderList.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css" />
    </head>

    <body>
        <div id="modal_list">
            <div class="modal fade" id="modalStarError" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Star Only Can Choose 1 ~ 5</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modalSuccess" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Comment Success</h5>
                        </div>
                        <div class="modal-body">
                            Thanks your comment.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modalFinish" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Finish Order</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn deep_green" data-bs-dismiss="modal" id="orderFinish" onclick="">finish</button>
                            <button type="button" class="btn green" data-bs-dismiss="modal">close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modalCancel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Cancel Order</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn red" data-bs-dismiss="modal" id="orderCancel" onclick="">cancel</button>
                            <button type="button" class="btn green" data-bs-dismiss="modal">close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modalReturn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Return Order</h5>
                        </div>
                        <div class="modal-body">
                            Please send product back to Pascal Company<br>
                            Address : 1 Infinite Loop Cupertino, CA 95014<br>
                            <hr>
                            After we get the return product, we will refund to your account<br><br>
                            Thanks~<br><br>
                            <input class="form-control my-4 comment_input" type="text" id="returnAccount" placeholder="Refund Account">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn yellow" data-bs-dismiss="modal" id="orderReturn" onclick="">return</button>
                            <button type="button" class="btn green" data-bs-dismiss="modal">close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                            <a href="" class="navbar_topic">
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
                <div class="row align-items-center justify-content-center">
                    <div>
                        <h1 class="mx-auto title"><i class="bi bi-card-list px-3"></i>Order List
                        </h1>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-1"></div>
                    <div class="col-10 orderList" id="orderList"></div>
                    <div class="col-1"></div>
                </div>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="/CD-Book-Store-System/view/src/script/member.js"></script>
        <script src="/CD-Book-Store-System/view/src/script/comment.js"></script>
        <script src="/CD-Book-Store-System/view/src/script/order.js"></script>
        <script src="/CD-Book-Store-System/view/src/script/orderListLoad.js"></script>
    </body>

    </html>

<?php

} else {
    header("Location: http://localhost/CD-BOOK-STORE-SYSTEM/view/login");
}
?>