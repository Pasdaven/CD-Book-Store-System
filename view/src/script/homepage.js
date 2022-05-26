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

/* Logic */
const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
};

/* Component */
const browsingHistoryComponent = (data) => {
    let html = `
    <div class="col-12 browsing-history-component mb-3 p-3 d-flex">
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
    let html = `
    <div class="col-6 foryou-component p-3">
        <div class="row wrap mx-1">
            <div class="col-12 for-youstar d-flex justify-content-end pt-3 pe-3">
                <i class="bi bi-heart"></i>
            </div>
            <div class="col-12 foryou-product-info">
                <div class="row">
                    <div class="col-4 d-flex justify-content-center foryou-product-image">
                        <img src="${data["product_image"]}" />
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
            <div class="col-12 for-you-cart-btn d-flex justify-content-end pb-3 pe-3">
                <i class="bi bi-cart-fill me-2"></i>Add To Cart
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
}
const displayHistory = (data) => {
    data.forEach((element) => {
        $("#recent-area").append(browsingHistoryComponent(element));
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
