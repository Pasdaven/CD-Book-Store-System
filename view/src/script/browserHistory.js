const getTime = () => {
    let time = new Date();
    date = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
    let hour = time.getHours().toString().padStart(2, '0');
    let minute = time.getMinutes().toString().padStart(2, '0');
    let second = time.getSeconds().toString().padStart(2, '0');
    return (date + " " + hour + ":" + minute + ":" + second);
};

const insertBrowserHis = () => {
    let member_id = $.session.get('member_id');
    let product_id = $('#product_id').val();
    let browse_time = getTime();
    let data = {
        controller: 'BrowserHistory',
        method: 'insertBrowserHis',
        parameter: {
            member_id: member_id,
            product_id: product_id,
            browse_time: browse_time
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json
    });
}

const getBrowserHis = () => {
    let member_id = 1;
    let data = {
        controller: 'BrowserHistory',
        method: 'getBrowserHis',
        parameter: {
            member_id: member_id
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





// const removeBrowserHisCard = (id) => {
//     let className = ".card" + id;
//     $(className).remove();
//     deleteFollowList(id);
// }




    



$(() => {
    let res = getBrowserHis();
    displayBrowserHisInfo(res);
    // $(".product").click(function() {
    //     let id = $(this).attr('id');
    //     removeBrowserHisCard(id);
    // });
    // $(".btn-view-info").click(function() {
    //     let id = parseInt($(this).attr('id'));
    //     let url = `http://localhost/CD-BOOK-STORE-SYSTEM/view/product/index.html?id=${id}`;
    //     window.location = url;
    // });


    // $(".atc").click(function() {
    //     let id = parseInt($(this).attr('id'));
    //     let idAddToCart = "#" + id + "add-to-cart";
    //     let idspan = "#" + id + "span";
    //     let idicon = "#" + id + "icon";
    //     if ($(this).val() == 1) {
    //         insertCart(id);
    //         $(idAddToCart).addClass('btn-add-to-cart ps-3').removeClass('btn-not-add-to-cart ps-5');
    //         $(idspan).text('Remove from cart');
    //         $(idicon).addClass('ms-4').removeClass('ms-5');
    //         $(this).val(0);
    //     }else {
    //         $(idAddToCart).addClass('btn-not-add-to-cart ps-5').removeClass('btn-add-to-cart ps-3');
    //         $(idspan).text('Add to cart');
    //         $(idicon).addClass('ms-5').removeClass('ms-4');
    //         $(this).val(1);
    //         removeCart(id);
    //     }
    // });
});

const displayBrowserHisInfo = (data) => {
    if (data == 0) {
        $('#followList').append(`<h1 class="d-flex justify-content-center align-items-center" style="height:500px;">No Browser History</h1>`);
    }
    for (let i = 0; i < data.length; i++) {
        $('#followList').append(BrowserHisComponent(data[i][0]['product_name'], data[i][0]['product_author'], data[i][0]['product_id'], data[i][0]['product_image']));
    }
}



const BrowserHisComponent = (product_name, product_author, product_id, product_image) => {
    return `
    <div class="shadow card p-4 my-4 card${product_id}">
        <div class="d-flex">
            <div class="px-3"><img src="${product_image}" alt="" width="165" height="237"></div>
            <div class="flex-fill d-flex flex-column">
                <div class="align-self-end"><i class="bi bi-heart-fill product" id="${product_id}" style="color: #F0B0B0;cursor:pointer;"></i></div>
                <div class="flex-fill d-flex  align-items-center justify-content-end">
                    <div class="col-4">
                        <h1 style="color: #3F4953;font-size:28px;">${product_name}</h1>
                        <p style="color: #9199A0;font-size:20px;">${product_author}</p>
                        <i class="me-1 bi bi-star-fill" style="color: #8C929B;"></i>
                        <i class="me-1 bi bi-star-fill" style="color: #8C929B;"></i>
                        <i class="me-1 bi bi-star-fill" style="color: #8C929B;"></i>
                        <i class="me-1 bi bi-star-fill" style="color: #8C929B;"></i>
                        <i class="me-1 bi bi-star" style="color: #8C929B;"></i>
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


