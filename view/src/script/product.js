$(() => {
    let product_id = getUrl();
    searchProductById(product_id);
    createBrowsingHistory();
    checkFollow();
    checkCart();
});

/* DOM Function */
const getUrl = () => {
    let param = new URLSearchParams(window.location.search);
    return param.get("id");
};

const displayData = (data) => {
    $("#product_name").html(data[0]["product_name"]);
    $("#comment_product_name").html(data[0]["product_name"]);
    $("#product_author").html(data[0]["product_author"]);
    $("#product_description").html(data[0]["product_description"]);
    $("#product_price").html(data[0]["product_price"]);
    $("#product_image").attr("src", data[0]["product_image"]);
    $("#comment_product_image").attr("src", data[0]["product_image"]);

    displayRate(data);
};

const displayFollowBtn = (data) => {
    data == "" ? showFollowBtn() : showUnFollowBtn();
};
const showFollowBtn = () => {
    $("#follow_btn_txt").html("Follow");
    $("#follow_btn").removeClass("unFollow-btn");
    $("#follow_btn").addClass("follow-btn");
};
const showUnFollowBtn = () => {
    $("#follow_btn_txt").html("Unfollow");
    $("#follow_btn").removeClass("follow-btn");
    $("#follow_btn").addClass("unFollow-btn");
};
$("#follow_btn").click(() => {
    if ($("#follow_btn").hasClass("follow-btn")) {
        addToFollow();
        showUnFollowBtn();
    } else {
        removeFollow();
        showFollowBtn();
    }
});

const displayCartBtn = (data) => {
    data == "" ? showCartBtn() : showUnCartBtn();
};
const showCartBtn = () => {
    $("#cart_btn_txt").html("Add To Cart");
    $("#cart_btn").removeClass("unCart-btn");
    $("#cart_btn").addClass("cart-btn");
};
const showUnCartBtn = () => {
    $("#cart_btn_txt").html("Remove");
    $("#cart_btn").removeClass("cart-btn");
    $("#cart_btn").addClass("unCart-btn");
};
$("#cart_btn").click(() => {
    if ($("#cart_btn").hasClass("cart-btn")) {
        addToCart();
        showUnCartBtn();
    } else {
        removeCart();
        showCartBtn();
    }
});

/* Ajax Function */
const searchProductById = (product_id) => {
    let data = {
        controller: "product",
        method: "searchProductById",
        parameter: {
            product_id: product_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => displayData(res),
    });
};

const searchProductByName = () => {
    let product_name = $("#text-1").val();
    let data = {
        controller: "product",
        method: "searchProductByName",
        parameter: {
            product_name: product_name,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log(res),
    });
};

const searchProductNum = () => {
    let product_id = $("#text-2").val();
    let data = {
        controller: "product",
        method: "searchProductNum",
        parameter: {
            product_id: product_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log(res),
    });
};

const updateProductNum = () => {
    let product_id = $("#text-3-1").val();
    let new_product_number = $("#text-3-2").val();
    let data = {
        controller: "product",
        method: "updateProductNum",
        parameter: {
            product_id: product_id,
            new_product_number: new_product_number,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log(res),
    });
};

const checkFollow = () => {
    let product_id = getUrl();
    let member_id = 1;
    let data = {
        controller: "followList",
        method: "isFollow",
        parameter: {
            product_id: product_id,
            member_id: member_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => displayFollowBtn(res),
    });
};

const addToFollow = () => {
    let product_id = getUrl();
    let member_id = 1;
    let data = {
        controller: "followList",
        method: "insertFollowList",
        parameter: {
            product_id: product_id,
            member_id: member_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log("follow"),
    });
};

const removeFollow = () => {
    let product_id = getUrl();
    let member_id = 1;
    let data = {
        controller: "followList",
        method: "deleteFollowList",
        parameter: {
            product_id: product_id,
            member_id: member_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log("un follow"),
    });
};

const checkCart = () => {
    let product_id = getUrl();
    let member_id = 1;
    let data = {
        controller: "cart",
        method: "isCart",
        parameter: {
            product_id: product_id,
            member_id: member_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => displayCartBtn(res),
    });
};

const addToCart = () => {
    let product_id = getUrl();
    let member_id = 1;
    let data = {
        controller: "cart",
        method: "insertCart",
        parameter: {
            product_id: product_id,
            member_id: member_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log("add to cart"),
    });
};

const removeCart = () => {
    let product_id = getUrl();
    let member_id = 1;
    let data = {
        controller: "cart",
        method: "deleteCartByMIdPId",
        parameter: {
            product_id: product_id,
            member_id: member_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log("remove cart"),
    });
};

const createBrowsingHistory = () => {
    let product_id = getUrl();
    let member_id = 1;
    let data = {
        controller: "browserHistory",
        method: "insertBrowserHis",
        parameter: {
            product_id: product_id,
            member_id: member_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log(res),
    });
};

const displayRate = (data) => {
    let rate = parseInt(data[0]["avg_star"][0]["AVG(star)"]);
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
