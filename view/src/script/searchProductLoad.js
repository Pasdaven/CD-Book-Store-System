$(() => {
    let productName = getProductUrl();
    let res = searchProduct(productName);
    displaysearchProductInfo(res);

    $(".btn-view-info").click(function() {
        let id = parseInt($(this).attr('id'));
        let url = `/CD-Book-Store-System/view/product/?id=${id}`;
        window.location = url;
    });


    $(".atc").click(function() {
        let id = parseInt($(this).attr('id'));
        let idAddToCart = "#" + id + "add-to-cart";
        let idspan = "#" + id + "span";
        let idicon = "#" + id + "icon";
        if ($(this).val() == 1) {
            insertCart(id);
            $(idAddToCart).addClass('btn-add-to-cart ps-3').removeClass('btn-not-add-to-cart ps-5');
            $(idspan).text('Remove from cart');
            $(idicon).addClass('ms-4').removeClass('ms-5');
            $(this).val(0);
        }else {
            $(idAddToCart).addClass('btn-not-add-to-cart ps-5').removeClass('btn-add-to-cart ps-3');
            $(idspan).text('Add to cart');
            $(idicon).addClass('ms-5').removeClass('ms-4');
            $(this).val(1);
            removeCart(id);
        }
    });
    let memberRes = getMemberInfo();
    displayUserName(memberRes);
});

const getProductUrl = () => {
    let param = new URLSearchParams(window.location.search);
    return param.get("productName");
};

const searchProduct = (product_name) => {
    let data = {
        controller: 'product',
        method: 'searchProductByName',
        parameter: {
            product_name: product_name
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        async: false,
        success: function (res) {
            result = res;
        },
        error: function (res) {
            result = 0;
        }
    });
    return result;
}



const removeCart = (product_id) => {
    let data = {
        controller: "cart",
        method: "deleteCartByMIdPId",
        parameter: {
            product_id: product_id
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json
    });
}



const displayRate = (rate, product_id) => {
    let star1 = '.star1' + product_id;
    let star2 = '.star2' + product_id;
    let star3 = '.star3' + product_id;
    let star4 = '.star4' + product_id;
    let star5 = '.star5' + product_id;
    switch (rate) {
        case 1:
            $(star1).addClass('bi-star-fill');
            $(star2).addClass('bi-star');
            $(star3).addClass('bi-star');
            $(star4).addClass('bi-star');
            $(star5).addClass('bi-star');
            break;
        case 2:
            $(star1).addClass('bi-star-fill');
            $(star2).addClass('bi-star-fill');
            $(star3).addClass('bi-star');
            $(star4).addClass('bi-star');
            $(star5).addClass('bi-star');
            break;
        case 3:
            $(star1).addClass('bi-star-fill');
            $(star2).addClass('bi-star-fill');
            $(star3).addClass('bi-star-fill');
            $(star4).addClass('bi-star');
            $(star5).addClass('bi-star');
            break;
        case 4:
            $(star1).addClass('bi-star-fill');
            $(star2).addClass('bi-star-fill');
            $(star3).addClass('bi-star-fill');
            $(star4).addClass('bi-star-fill');
            $(star5).addClass('bi-star');
            break;
        case 5:
            $(star1).addClass('bi-star-fill');
            $(star2).addClass('bi-star-fill');
            $(star3).addClass('bi-star-fill');
            $(star4).addClass('bi-star-fill');
            $(star5).addClass('bi-star-fill');
            break;
        default:
            break;
    }
}

const displaysearchProductInfo = (data) => {
    let resCart = getCart();
    let flag = 1;
    if (data == 0) {
        $('#searchProduct').append(`<h1 class="d-flex justify-content-center align-items-center" style="height:500px;">No such product found</h1>`);
    }
    for (let i = 0; i < data.length; i++) {
        flag = 1;
        for (let j = 0; j < resCart.length; j++) {
            if (resCart[j]['product_id'] == data[i][0]['product_id']) {
                $('#searchProduct').append(searchProductComponentInCart(data[i][0]['product_name'], data[i][0]['product_author'], data[i][0]['product_id'], data[i][0]['product_image']));
                displayRate(parseInt(data[i][1][0]['AVG(star)']), data[i][0]['product_id']);
                flag = 0;
                break;
            }
        }
        if (flag) {
            $('#searchProduct').append(searchProductComponentNotInCart(data[i][0]['product_name'], data[i][0]['product_author'], data[i][0]['product_id'], data[i][0]['product_image']));
            displayRate(parseInt(data[i][1][0]['AVG(star)']), data[i][0]['product_id']);
        }
    }
}




const searchProductComponentNotInCart = (product_name, product_author, product_id, product_image) => {
    return `
    <div class="shadow card p-4 my-4 card${product_id}">
        <div class="d-flex">
            <div class="px-3"><img src="${product_image}" alt="" width="165" height="237"></div>
            <div class="flex-fill d-flex flex-column">
                <div class="flex-fill d-flex  align-items-center justify-content-end">
                    <div class="col-4">
                        <h1 style="color: #3F4953;font-size:28px;">${product_name}</h1>
                        <p style="color: #9199A0;font-size:20px;">${product_author}</p>
                        <i class="me-1 bi star star1${product_id}" style="color: #8C929B;"></i>
                        <i class="me-1 bi star star2${product_id}" style="color: #8C929B;"></i>
                        <i class="me-1 bi star star3${product_id}" style="color: #8C929B;"></i>
                        <i class="me-1 bi star star4${product_id}" style="color: #8C929B;"></i>
                        <i class="me-1 bi star star5${product_id}" style="color: #8C929B;"></i>
                    </div>
                    <div class="align-self-end pt-5 ${product_id}btn">
                        <button type="button" class="ms-4 ps-5 btn btn-view-info" id="${product_id}view-info" style="width:225px;height:60px;">View info<i class="ms-5 bi bi-info-circle-fill"></i></button>
                        <button type="button" class="ms-3 ps-5 btn btn-not-add-to-cart atc" value="1" id="${product_id}add-to-cart" style="width:225px;height:60px;"><span id="${product_id}span">Add to cart</span><i id="${product_id}icon" class="ms-5 bi bi-cart-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

const searchProductComponentInCart = (product_name, product_author, product_id, product_image) => {
    return `
    <div class="shadow card p-4 my-4 card${product_id}">
        <div class="d-flex">
            <div class="px-3"><img src="${product_image}" alt="" width="165" height="237"></div>
            <div class="flex-fill d-flex flex-column">
                <div class="flex-fill d-flex  align-items-center justify-content-end">
                    <div class="col-4">
                        <h1 style="color: #3F4953;font-size:28px;">${product_name}</h1>
                        <p style="color: #9199A0;font-size:20px;">${product_author}</p>
                        <i class="me-1 bi star star1${product_id}" style="color: #8C929B;"></i>
                        <i class="me-1 bi star star2${product_id}" style="color: #8C929B;"></i>
                        <i class="me-1 bi star star3${product_id}" style="color: #8C929B;"></i>
                        <i class="me-1 bi star star4${product_id}" style="color: #8C929B;"></i>
                        <i class="me-1 bi star star5${product_id}" style="color: #8C929B;"></i>
                    </div>
                    <div class="align-self-end pt-5 ${product_id}btn">
                        <button type="button" class="ms-4 ps-5 btn btn-view-info" id="${product_id}view-info" style="width:225px;height:60px;">View info<i class="ms-5 bi bi-info-circle-fill"></i></button>
                        <button type="button" class="ms-3 ps-3 btn btn-add-to-cart atc" value="0" id="${product_id}add-to-cart" style="width:225px;height:60px;"><span id="${product_id}span">Remove from cart</span><i id="${product_id}icon" class="ms-4 bi bi-cart-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}
