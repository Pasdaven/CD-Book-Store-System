<?php 
header("Cache-Control: no-cache");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pascal Store | Home</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css" />
    <link rel="stylesheet" href="src/style/homepage.css" />
    <link rel="shortcut icon" href="/CD-Book-Store-System/view/src/image/logo.png" type="image/x-icon" />
</head>

<body>

    <div class="loading-area" id="loading-area">
        <div class="logo-box" id="logo-box">
            <div class="shine">
                <div class="logo-text">
                    <h1><strong>Pascal Store</strong></h1>
                </div>
            </div>
        </div>
        <div class="left-box" id="left-box">

        </div>
        <div class="right-box" id="right-box">

        </div>
    </div>

    <?php

    session_start();

    if (isset($_SESSION['member_id']) && isset($_SESSION['email'])) {

    ?>

        <!-- Navbar -->
        <div class="container-fluid bg-white p-3 navbar-area">
            <div class="row">
                <div class="col-3" id="search-div">
                    <div class="nav-item d-flex mt-2">
                        <input class="form-control search_input" type="text" id="search" placeholder="search" style="width: 240px" />
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
                        <a class="navbar_btn mx-1" type="button" href="/CD-Book-Store-System/view/cart/"><i class="bi bi-cart-fill"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header d-flex justify-content-center username-offcanvas-header"></div>
            <div class="offcanvas-body">
                <div class="d-flex justify-content-center">
                    <a type="button" class="offcanvas_btn my-3" href="/CD-Book-Store-System/view/editMemberInfo/"><i class="bi bi-pen mx-3"></i>Edit Profile</a>
                </div>
                <div class="d-flex justify-content-center">
                    <a type="button" class="offcanvas_btn my-3" href="/CD-Book-Store-System/view/orderList/"><i class="bi bi-card-list mx-3"></i>Order List</a>
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
        <!-- Navbar end -->

    <?php

    } else {

    ?>

        <!-- No Login Navbar -->
        <div class="container-fluid bg-white p-3 navbar-area">
            <div class="row">
                <div class="col-3" id="search-div">
                    <div class="nav-item d-flex mt-2">
                        <input class="form-control search_input" type="text" id="search" placeholder="search" style="width: 240px" />
                        <button class="navbar_btn mx-1" type="button" onclick="" id="search_btn">
                            <i class="bi bi-search"></i>
                        </button>
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
                    <div class="nav-item" style="height: 32px;">
                        <a class="navbar_btn mx-1" type="button" href=""><i class="bi bi-cart-fill"></i> </a>
                        <a class="navbar_btn" type="button" href="/CD-Book-Store-System/view/login"><i class="bi bi-person-fill mx-2"></i>Login</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- No Login Navbar End -->

    <?php

    }

    ?>

    <div class="container-full">
        <!-- Ad Area -->
        <div class="ad-area" id="ad-area">
            <div class="col-3 ad-wrap p-3"></div>
            <div class="col-6 ad-wrap p-3">
                <div class="ad-component">
                    <div class="row px-3">
                        <div class="col-4 ad-img-wrap d-flex align-items-center justify-content-center">
                            <img src="./src/image/book-1.png" />
                        </div>
                        <div class="col-8 ad-info-wrap d-flex align-items-center">
                            <div class="row">
                                <div class="col-12">
                                    <h1>Elon Musk</h1>
                                </div>
                                <div class="col-12">
                                    <h3>by Ashlee Vance</h3>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed faucibus
                                        id etiam mattis libero sed. At amet, sodales sem nibh urna in senectus.
                                        Purus dignissim amet habitasse scelerisque ac cursus sed. Ut lectus quis sit
                                        facilisi aenean placerat tincidunt sagittis.
                                    </p>
                                </div>
                                <div class="col-12">
                                    <button class="ad-view-btn px-5 py-2">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 ad-wrap p-3">
                <div class="ad-component">
                    <div class="row px-3">
                        <div class="col-4 ad-img-wrap d-flex align-items-center justify-content-center">
                            <img src="./src/image/book-1.png" />
                        </div>
                        <div class="col-8 ad-info-wrap d-flex align-items-center">
                            <div class="row">
                                <div class="col-12">
                                    <h1>Elon Musk</h1>
                                </div>
                                <div class="col-12">
                                    <h3>by Ashlee Vance</h3>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed faucibus
                                        id etiam mattis libero sed. At amet, sodales sem nibh urna in senectus.
                                        Purus dignissim amet habitasse scelerisque ac cursus sed. Ut lectus quis sit
                                        facilisi aenean placerat tincidunt sagittis.
                                    </p>
                                </div>
                                <div class="col-12">
                                    <button class="ad-view-btn px-5 py-2">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 ad-wrap p-3">
                <div class="ad-component">
                    <div class="row px-3">
                        <div class="col-4 ad-img-wrap d-flex align-items-center justify-content-center">
                            <img src="./src/image/book-1.png" />
                        </div>
                        <div class="col-8 ad-info-wrap d-flex align-items-center">
                            <div class="row">
                                <div class="col-12">
                                    <h1>Elon Musk</h1>
                                </div>
                                <div class="col-12">
                                    <h3>by Ashlee Vance</h3>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed faucibus
                                        id etiam mattis libero sed. At amet, sodales sem nibh urna in senectus.
                                        Purus dignissim amet habitasse scelerisque ac cursus sed. Ut lectus quis sit
                                        facilisi aenean placerat tincidunt sagittis.
                                    </p>
                                </div>
                                <div class="col-12">
                                    <button class="ad-view-btn px-5 py-2">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 ad-wrap p-3">
                <div class="ad-component">
                    <div class="row px-3">
                        <div class="col-4 ad-img-wrap d-flex align-items-center justify-content-center">
                            <img src="./src/image/book-1.png" />
                        </div>
                        <div class="col-8 ad-info-wrap d-flex align-items-center">
                            <div class="row">
                                <div class="col-12">
                                    <h1>Elon Musk</h1>
                                </div>
                                <div class="col-12">
                                    <h3>by Ashlee Vance</h3>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed faucibus
                                        id etiam mattis libero sed. At amet, sodales sem nibh urna in senectus.
                                        Purus dignissim amet habitasse scelerisque ac cursus sed. Ut lectus quis sit
                                        facilisi aenean placerat tincidunt sagittis.
                                    </p>
                                </div>
                                <div class="col-12">
                                    <button class="ad-view-btn px-5 py-2">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 ad-wrap p-3">
                <div class="ad-component">
                    <div class="row px-3">
                        <div class="col-4 ad-img-wrap d-flex align-items-center justify-content-center">
                            <img src="./src/image/book-1.png" />
                        </div>
                        <div class="col-8 ad-info-wrap d-flex align-items-center">
                            <div class="row">
                                <div class="col-12">
                                    <h1>Elon Musk</h1>
                                </div>
                                <div class="col-12">
                                    <h3>by Ashlee Vance</h3>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed faucibus
                                        id etiam mattis libero sed. At amet, sodales sem nibh urna in senectus.
                                        Purus dignissim amet habitasse scelerisque ac cursus sed. Ut lectus quis sit
                                        facilisi aenean placerat tincidunt sagittis.
                                    </p>
                                </div>
                                <div class="col-12">
                                    <button class="ad-view-btn px-5 py-2">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 ad-wrap p-3">
                <div class="ad-component">
                    <div class="row px-3">
                        <div class="col-4 ad-img-wrap d-flex align-items-center justify-content-center">
                            <img src="./src/image/book-1.png" />
                        </div>
                        <div class="col-8 ad-info-wrap d-flex align-items-center">
                            <div class="row">
                                <div class="col-12">
                                    <h1>Elon Musk</h1>
                                </div>
                                <div class="col-12">
                                    <h3>by Ashlee Vance</h3>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed faucibus
                                        id etiam mattis libero sed. At amet, sodales sem nibh urna in senectus.
                                        Purus dignissim amet habitasse scelerisque ac cursus sed. Ut lectus quis sit
                                        facilisi aenean placerat tincidunt sagittis.
                                    </p>
                                </div>
                                <div class="col-12">
                                    <button class="ad-view-btn px-5 py-2">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 ad-wrap p-3"></div>
        </div>
        <!-- Ad End -->
        <!-- Content Area -->
        <div class="content-area">
            <div class="row m-0 p-0">
                <div class="col-3 recent-area ps-3 p-0">
                    <div class="head p-4 mb-3">
                        <h1><i class="bi bi-clock-history me-2"></i>Recent Browsing</h1>
                    </div>
                    <div class="col-12 browsing-history-component mb-3 p-3 d-flex">
                        <div class="browsing-history-image">
                            <img src="./src/image/book-1.png" />
                        </div>
                        <div class="browsing-history-info d-flex align-items-center ms-3">
                            <div class="row">
                                <div class="col-12">
                                    <h1>Elon Musk</h1>
                                </div>
                                <div class="col-12">
                                    <h3>by Ashlee Vance</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-9 foryou-area pe-5">
                    <div class="head py-4 mb-3">
                        <h1><i class="bi bi-star me-2"></i>For <strong class="strong-black">You</strong></h1>
                    </div>
                    <div class="row foryou-component-area m-0">
                        <div class="col-6 foryou-component p-3">
                            <div class="row wrap mx-1">
                                <div class="col-12 for-youstar d-flex justify-content-end pt-3 pe-3">
                                    <i class="bi bi-heart"></i>
                                </div>
                                <div class="col-12 foryou-product-info">
                                    <div class="row">
                                        <div class="col-4 d-flex justify-content-center foryou-product-image">
                                            <img src="./src/image/book-1.png" />
                                        </div>
                                        <div class="col-8 foryou-product-info-text pe-3">
                                            <div class="row">
                                                <div class="col-12 title">
                                                    <h1>Elon Musk</h1>
                                                </div>
                                                <div class="col-12 subtitle">
                                                    <h3>by Ashlee Vance</h3>
                                                </div>
                                                <div class="col-12 content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Cras sed faucibus id etiam mattis libero sed. At amet,
                                                        sodales sem nibh urna in senectus.
                                                    </p>
                                                </div>
                                                <div class="col-12 rate">
                                                    <i class="bi star1 star bi-star-fill"></i>
                                                    <i class="bi star2 star bi-star-fill"></i>
                                                    <i class="bi star3 star bi-star-fill"></i>
                                                    <i class="bi star4 star bi-star-fill"></i>
                                                    <i class="bi star5 star bi-star-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 for-you-cart-btn d-flex justify-content-end pb-3 pe-3">
                                    <i class="bi bi-cart-fill me-2"></i>Add To Cart
                                </div>
                            </div>
                        </div>
                        <div class="col-6 foryou-component p-3">
                            <div class="row wrap mx-1">
                                <div class="col-12 for-youstar d-flex justify-content-end pt-3 pe-3">
                                    <i class="bi bi-heart"></i>
                                </div>
                                <div class="col-12 foryou-product-info">
                                    <div class="row">
                                        <div class="col-4 d-flex justify-content-center foryou-product-image">
                                            <img src="./src/image/book-1.png" />
                                        </div>
                                        <div class="col-8 foryou-product-info-text pe-3">
                                            <div class="row">
                                                <div class="col-12 title">
                                                    <h1>Elon Musk</h1>
                                                </div>
                                                <div class="col-12 subtitle">
                                                    <h3>by Ashlee Vance</h3>
                                                </div>
                                                <div class="col-12 content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Cras sed faucibus id etiam mattis libero sed. At amet,
                                                        sodales sem nibh urna in senectus.
                                                    </p>
                                                </div>
                                                <div class="col-12 rate">
                                                    <i class="bi star1 star bi-star-fill"></i>
                                                    <i class="bi star2 star bi-star-fill"></i>
                                                    <i class="bi star3 star bi-star-fill"></i>
                                                    <i class="bi star4 star bi-star-fill"></i>
                                                    <i class="bi star5 star bi-star-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 for-you-cart-btn d-flex justify-content-end pb-3 pe-3">
                                    <i class="bi bi-cart-fill me-2"></i>Add To Cart
                                </div>
                            </div>
                        </div>
                        <div class="col-6 foryou-component p-3">
                            <div class="row wrap mx-1">
                                <div class="col-12 for-youstar d-flex justify-content-end pt-3 pe-3">
                                    <i class="bi bi-heart"></i>
                                </div>
                                <div class="col-12 foryou-product-info">
                                    <div class="row">
                                        <div class="col-4 d-flex justify-content-center foryou-product-image">
                                            <img src="./src/image/book-1.png" />
                                        </div>
                                        <div class="col-8 foryou-product-info-text pe-3">
                                            <div class="row">
                                                <div class="col-12 title">
                                                    <h1>Elon Musk</h1>
                                                </div>
                                                <div class="col-12 subtitle">
                                                    <h3>by Ashlee Vance</h3>
                                                </div>
                                                <div class="col-12 content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Cras sed faucibus id etiam mattis libero sed. At amet,
                                                        sodales sem nibh urna in senectus.
                                                    </p>
                                                </div>
                                                <div class="col-12 rate">
                                                    <i class="bi star1 star bi-star-fill"></i>
                                                    <i class="bi star2 star bi-star-fill"></i>
                                                    <i class="bi star3 star bi-star-fill"></i>
                                                    <i class="bi star4 star bi-star-fill"></i>
                                                    <i class="bi star5 star bi-star-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 for-you-cart-btn d-flex justify-content-end pb-3 pe-3">
                                    <i class="bi bi-cart-fill me-2"></i>Add To Cart
                                </div>
                            </div>
                        </div>
                        <div class="col-6 foryou-component p-3">
                            <div class="row wrap mx-1">
                                <div class="col-12 for-youstar d-flex justify-content-end pt-3 pe-3">
                                    <i class="bi bi-heart"></i>
                                </div>
                                <div class="col-12 foryou-product-info">
                                    <div class="row">
                                        <div class="col-4 d-flex justify-content-center foryou-product-image">
                                            <img src="./src/image/book-1.png" />
                                        </div>
                                        <div class="col-8 foryou-product-info-text pe-3">
                                            <div class="row">
                                                <div class="col-12 title">
                                                    <h1>Elon Musk</h1>
                                                </div>
                                                <div class="col-12 subtitle">
                                                    <h3>by Ashlee Vance</h3>
                                                </div>
                                                <div class="col-12 content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Cras sed faucibus id etiam mattis libero sed. At amet,
                                                        sodales sem nibh urna in senectus.
                                                    </p>
                                                </div>
                                                <div class="col-12 rate">
                                                    <i class="bi star1 star bi-star-fill"></i>
                                                    <i class="bi star2 star bi-star-fill"></i>
                                                    <i class="bi star3 star bi-star-fill"></i>
                                                    <i class="bi star4 star bi-star-fill"></i>
                                                    <i class="bi star5 star bi-star-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 for-you-cart-btn d-flex justify-content-end pb-3 pe-3">
                                    <i class="bi bi-cart-fill me-2"></i>Add To Cart
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Content Area End -->
    </div>

    <!-- Google api jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    <!-- Navbar -->
    <script src="/CD-Book-Store-System/view/src/script/searchProduct.js"></script>
    <script src="/CD-Book-Store-System/view/src/script/member.js"></script>
    <!-- Custom -->
    <script src="/CD-Book-Store-System/view/src/script/homepage.js?20220526"></script>
</body>

</html>