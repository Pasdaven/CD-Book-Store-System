<?php

session_start();

if (isset($_SESSION['member_id']) && isset($_SESSION['email'])) {
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- Bootstrap Icon -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css" />
        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
        />
        <!-- Custom CSS -->
        <link rel="stylesheet" href="/CD-Book-Store-System/view/src/style/cs.css?2022060202" />
        <link rel="shortcut icon" href="/CD-Book-Store-System/view/src/image/logo.png" type="image/x-icon" />
        <title>Pascal Store | Customer Service</title>
    </head>
    <body>
        <!-- Navbar -->
        <div class="container-fluid bg-white p-3 navbar-area">
            <div class="row">
                <div class="col-3" id="search-div">
                    <div class="nav-item d-flex mt-2">
                        <input class="form-control search_input" type="text" id="search" placeholder="search" />
                        <button class="navbar_btn mx-1" type="button" onclick="" id="search_btn">
                            <i class="bi bi-search"></i>
                        </button>
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
                    <div class="nav-item username-nav-item" style="height: 32px">
                        <a class="navbar_btn mx-1" type="button" href="/CD-Book-Store-System/view/cart/"
                            ><i class="bi bi-cart-fill"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header d-flex justify-content-center username-offcanvas-header"></div>
            <div class="offcanvas-body">
                <div class="d-flex justify-content-center">
                    <a
                        type="button"
                        class="offcanvas_btn my-3"
                        href="/CD-Book-Store-System/view/editMemberInfo/"
                        ><i class="bi bi-pen mx-3"></i>Edit Profile</a
                    >
                </div>
                <div class="d-flex justify-content-center">
                    <a
                        type="button"
                        class="offcanvas_btn my-3"
                        href="/CD-Book-Store-System/view/orderList/"
                        ><i class="bi bi-card-list mx-3"></i>Order List</a
                    >
                </div>
                <div class="d-flex justify-content-center">
                    <a type="button" class="offcanvas_btn my-3" href="/CD-Book-Store-System/view/cart/"
                        ><i class="bi bi-cart-fill mx-3"></i>Shopping Cart</a
                    >
                </div>
                <div class="d-flex justify-content-center">
                    <a
                        type="button"
                        class="offcanvas_btn my-3"
                        href="/CD-Book-Store-System/view/followList/"
                        ><i class="bi bi-list-stars mx-3"></i>Following</a
                    >
                </div>
                <div class="d-flex justify-content-center">
                    <a
                        type="button"
                        class="offcanvas_btn my-3"
                        href="/CD-Book-Store-System/view/browserHistory/"
                        ><i class="bi bi-clock-history mx-3"></i>History</a
                    >
                </div>
                <div class="d-flex justify-content-center">
                    <a type="button" class="offcanvas_btn my-3" href="/CD-Book-Store-System/view/cs/"
                        ><i class="bi bi-chat-dots mx-3"></i>Customer Service</a
                    >
                </div>
            </div>
            <div class="offcanvas-footer d-flex justify-content-center">
                <a type="button" class="offcanvas_btn" href="/CD-Book-Store-System/view/" onclick="logout()"
                    ><i class="bi bi-box-arrow-left mx-2"></i>Log out</a
                >
            </div>
        </div>
        <!-- Navbar end -->

        <div class="container-full">
            <div class="row main-wrap justify-content-center p-0 m-0">
                <div class="col-9 main-area">
                    <div class="row title-area">
                        <div class="col-12 d-flex justify-content-center title">
                            <h1>👋 Customer Service</h1>
                        </div>
                    </div>
                    <div class="row subtitle-area">
                        <div class="col-12 d-flex justify-content-center pt-3">
                            <h5>Which order are you having trouble with?</h5>
                        </div>
                    </div>
                    <div class="row justify-content-center order-list-area">
                        <div class="col-9" id="card-area"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Google api jQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <!-- JavaScript Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"
        ></script>
        <!-- Navbar js -->
        <script src="/CD-Book-Store-System/view/src/script/member.js"></script>
        <script src="../src/script/searchProduct.js"></script>
        <!-- Custom js -->
        <script src="/CD-Book-Store-System/view/src/script/cs.js?2022060202"></script>
    </body>
</html>

<?php

} else {
    header("Location: /CD-Book-Store-System/view/login");
}
?>