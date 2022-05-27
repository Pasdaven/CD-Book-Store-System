$(() => {
    /* Navbar */
    let memberRes = getMemberInfo();
    displayUserName(memberRes);
    /* Navbar End */
    getRandTenProduct();
    getBrowsingHistory();
});

/* Ajax */
const getRandTenProduct = () => {
    let data = {
        controller: "product",
        method: "getRandTenProduct",
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => {
            displayForYouList(res);
        },
    });
};

const getBrowsingHistory = () => {
    let data = {
        controller: "browserHistory",
        method: "getDistinctBrowserHis",
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => {
            displayHistory(res);
        },
    });
};

const addToCart = (product_id) => {
    let data = {
        controller: "cart",
        method: "insertCart",
        parameter: {
            product_id: product_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log("add to cart"),
    });
};

const removeFromCart = (product_id) => {
    let data = {
        controller: "cart",
        method: "deleteCartByMIdPId",
        parameter: {
            product_id: product_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log("remove cart"),
    });
};

const addToFollow = (product_id) => {
    let data = {
        controller: "followList",
        method: "insertFollowList",
        parameter: {
            product_id: product_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log("follow"),
    });
};

const removeFollow = (product_id) => {
    let data = {
        controller: "followList",
        method: "deleteFollowList",
        parameter: {
            product_id: product_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log("un follow"),
    });
};

/* Logic */
const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
};

const updateCartState = (product_id) => {
    let cartBtnClass = ".cart-btn-" + product_id;
    let cartTextClass = ".cart-text-" + product_id;
    if ($(cartBtnClass).hasClass("add-to-cart-btn")) {
        addToCart(product_id);
        $(cartBtnClass).removeClass("add-to-cart-btn");
        $(cartBtnClass).addClass("remove-from-cart-btn");
        $(cartTextClass).html("Remove From Cart");
    } else {
        removeFromCart(product_id);
        $(cartBtnClass).removeClass("remove-from-cart-btn");
        $(cartBtnClass).addClass("add-to-cart-btn");
        $(cartTextClass).html("Add To Cart");
    }
};

const updateFollowState = (product_id) => {
    let followBtnClass = ".follow-btn-" + product_id;
    heartBtnBounce(followBtnClass);
    if ($(followBtnClass).hasClass("bi-heart")) {
        addToFollow(product_id);
        $(followBtnClass).removeClass("bi-heart");
        $(followBtnClass).addClass("bi-heart-fill");
    } else {
        removeFollow(product_id);
        $(followBtnClass).removeClass("bi-heart-fill");
        $(followBtnClass).addClass("bi-heart");
    }
};

/* Component */
const browsingHistoryComponent = (data) => {
    let html = `
    <div class="col-12 browsing-history-component mb-3 p-3 d-flex" onclick="jumpProductPage(${data[0][0]["product_id"]})">
        <div class="browsing-history-image">
            <img src="${data[0][0]["product_image"]}" />
        </div>
        <div class="browsing-history-info d-flex align-items-center ms-3">
            <div class="row">
                <div class="col-12">
                    <h1>${data[0][0]["product_name"]}</h1>
                </div>
                <div class="col-12">
                    <h3>by ${data[0][0]["product_author"]}</h3>
                </div>
            </div>
        </div>
    </div>
    `;
    return html;
};
const forYouComponent = (data) => {
    let followHeartIconType = data["member_data"]["isFollow"][0] ? "bi-heart-fill" : "bi-heart";
    let cartBtnType = data["member_data"]["isCart"][0] ? "remove-from-cart-btn" : "add-to-cart-btn";
    let cartText = data["member_data"]["isCart"][0] ? "Remove From Cart" : "Add To Cart";
    let html = `
    <div class="col-6 foryou-component p-3">
        <div class="row wrap mx-1">
            <div class="col-12 foryou-heart d-flex justify-content-end pt-3 pe-3">
                <i class="bi heart ${followHeartIconType} follow-btn-${
        data["product_id"]
    }" onclick="updateFollowState(${data["product_id"]});"></i>
            </div>
            <div class="col-12 foryou-product-info">
                <div class="row">
                    <div class="col-4 d-flex justify-content-center foryou-product-image">
                        <img src="${data["product_image"]}" onclick="jumpProductPage(${data["product_id"]})"/>
                    </div>
                    <div class="col-8 foryou-product-info-text pe-3">
                        <div class="row">
                            <div class="col-12 title">
                                <h1>${data["product_name"]}</h1>
                            </div>
                            <div class="col-12 subtitle">
                                <h3>by ${data["product_author"]}</h3>
                            </div>
                            <div class="col-12 content">
                                <p>${truncate(data["product_description"], 180)}</p>
                            </div>
                            <div class="col-12 rate">
                                <i class="bi star1 star"></i>
                                <i class="bi star2 star"></i>
                                <i class="bi star3 star"></i>
                                <i class="bi star4 star"></i>
                                <i class="bi star5 star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-end pb-3 pe-3">
                <div class="cart-btn ${cartBtnType} cart-btn-${data["product_id"]}" onclick="updateCartState(${
        data["product_id"]
    });">
                    <i class="bi bi-cart-fill me-2"></i><span class="cart-text cart-text-${
                        data["product_id"]
                    }">${cartText}</span>
                </div>
            </div>
        </div>
    </div>
    `;
    return html;
};

/* Dom */
const jumpProductPage = (product_id) => {
    let url = "/CD-Book-Store-System/view/product/index.html?id=" + product_id;
    window.location = url;
};
const displayHistory = (data) => {
    data.forEach((element) => {
        $("#browsing-history-component-wrap").append(browsingHistoryComponent(element));
    });
};
const displayRate = (data) => {
    let rate = parseInt(data["avg_star"][0]["AVG(star)"]);
    switch (rate) {
        case 1:
            $(".star1").addClass("bi-star-fill");
            $(".star2, .star3, .star4, .star5").addClass("bi-star");
            break;
        case 2:
            $(".star1, .star2").addClass("bi-star-fill");
            $(".star3, .star4, .star5").addClass("bi-star");
            break;
        case 3:
            $(".star1, .star2, .star3").addClass("bi-star-fill");
            $(".star4, .star5").addClass("bi-star");
            break;
        case 4:
            $(".star1, .star2, .star3, .star4").addClass("bi-star-fill");
            $(".star5").addClass("bi-star");
            break;
        case 5:
            $(".star1, .star2, .star3, .star4, .star5").addClass("bi-star-fill");
            break;
    }
};
const displayForYouList = (data) => {
    data.forEach((element) => {
        $("#foryou-component-area").append(forYouComponent(element));
        displayRate(element);
    });
};

/* Animation Control */
const hideLoadingAnimation = () => {
    $("#loading-area").remove();
};
const slideAnimation = () => {
    $("#logo-box").addClass("fadeOut");
    $("#left-box").addClass("slideUp");
    $("#right-box").addClass("slideDown");
    setTimeout(hideLoadingAnimation, 800);
};
const animation = () => {
    setTimeout(slideAnimation, 1800);
};
animation();
