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
        <title>Edit Profile</title>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/CD-Book-Store-System/view/src/style/editMemberInfo.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css" />
        <link rel="shortcut icon" href="/CD-Book-Store-System/view/src/image/logo.png" type="image/x-icon" />
    </head>

    <body>
        <div class="modal fade" id="modalSuccess" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Register Success</strong></h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="window.location.assign('/CD-Book-Store-System/view/login');">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalFail" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Edit Fail</strong></h5>
                    </div>
                    <div class="modal-body">
                        Please check again.
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
                        <h5 class="modal-title" id="modalLabel"><strong>Information Cannot Be Null</strong></h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalNameError" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Name Too Long</strong></h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalPhoneError" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Phone Number Too Long</strong></h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalPasswordError" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Password Too Long</strong></h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green" data-bs-dismiss="modal" onclick="">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalSex" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal_border">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Sex Cannot Choose Both</strong></h5>
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
            </div>
            <div class="offcanvas-footer d-flex justify-content-center">
                <a type="button" class="offcanvas_btn" href="/CD-Book-Store-System/view/" onclick="logout()"><i class="bi bi-box-arrow-left mx-2"></i>Log out</a>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="register_card">
                        <div class="row">
                            <div class="col-6">
                                <div class="d-flex justify-content-center">
                                    <img src="/CD-Book-Store-System/view/src/image/registerBackground.png" class="registerBackground" width="360" height="450">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card_square">
                                    <div class="square_middle">
                                        <h3 class="d-flex justify-content-center">Edit Profile</h3>
                                        <div class="d-flex justify-content-center">
                                            <h5 class="py-3 register_name">Name</h5>
                                            <input class="form-control my-2 register_input" type="text" id="member_name" value="">
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <h5 class="py-3 register_name">Password</h5>
                                            <input class="form-control my-2 register_input" type="text" id="member_password">
                                        </div>
                                        <div class="d-flex justify-content-start" style="margin-left: 58px;">
                                            <h5 class="register_name">Sex</h5>
                                            <input class="form-check-input register_checkbox mx-4" type="checkbox" id="Male" value="Male"><strong>
                                                <h5>Male</h5>
                                            </strong></input><br>
                                            <input class="form-check-input register_checkbox mx-4" type="checkbox" id="Female" value="Female"><strong>
                                                <h5>Female</h5>
                                            </strong></input><br>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <h5 class="py-3 register_name">Phone</h5>
                                            <input class="form-control my-2 register_input" type="text" id="phone_num">
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <h5 class="py-3 register_name">Birthday</h5>
                                            <input class="form-control my-2 register_input" type="text" id="birthday" onfocus="this.type='date'">
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <button class="btn green px-5" type="submit" onclick="updateMemberInfo()">Edit</button>
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
        <script src="../src/script/searchProduct.js"></script>
        <script src="/CD-Book-Store-System/view/src/script/member.js"></script>
        <script>
            getMemberInfoById();
            getMemberAccountById();
            let memberRes = getMemberInfo();
            displayUserName(memberRes);
        </script>
    </body>

    </html>

<?php

} else {
    header("Location: /CD-Book-Store-System/view/login");
}
?>