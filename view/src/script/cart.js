const insertCart = (product_id) => {
    let data = {
        controller: 'Cart',
        method: 'insertCart',
        parameter: {
            product_id: product_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json
    });
}

const deleteCart = (cart_id) => {
    let data = {
        controller: 'Cart',
        method: 'deleteCart',
        parameter: {
            cart_id: cart_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json
    });
}

const getCart = () => {
    let data = {
        controller: 'Cart',
        method: 'getCart'
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        async: false,
        success: function (res) {
            result = res;
        }
    });
    return result;
}

const updateCart = (cart_id, count_num) => {
    let data = {
        controller: 'Cart',
        method: 'updateCart',
        parameter: {
            cart_id: cart_id,
            count_num: count_num
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json
    });
}

function getUrl() {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let subtotal = url.searchParams.get("subtotal");
    let deliver = url.searchParams.get("deliver");
    let discount = url.searchParams.get("discount");
    let total = url.searchParams.get("total");
    $('#subtotal').append(subtotal);
    $('#deliver').append(deliver);
    $('#discount').append(discount);
    $('#total').append(total);
}

const checkout = () => {
    let url_string = window.location.href;
    // let url_string = 'http://localhost/CD-BOOK-STORE-SYSTEM/view/payment/?coupon_id=[4,5]&subtotal=1200&deliver=60&discount=100&total=1160';
    let url = new URL(url_string);
    let coupon_id = url.searchParams.get("coupon_id");
    let subtotal = url.searchParams.get("subtotal");
    let deliver = url.searchParams.get("deliver");
    let discount = url.searchParams.get("discount");
    let total = url.searchParams.get("total");
    let name = $('#name').val();
    let phone_num = $('#phone').val();

    let info = []
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (let i = 0; i < checkboxes.length; i++) {
        info.push(checkboxes[i].value);
    }

    if (name == '' || phone_num == '') {
        $('#modalError').modal('show');
        return;
    }

    let deliver_method = '';
    let convenience_store = '';
    let order_address = '';
    if (info.includes('home delivery') == false && info.includes('convenience store delivery') == false) {
        $('#modalError').modal('show');
        return;
    } else {
        if (info.includes('home delivery') == true && info.includes('convenience store delivery') == true) {
            $('#modalDeliverError').modal('show');
            return;
        } else {
            if (info.includes('home delivery')) {
                deliver_method = 'home delivery';
                order_address = $('#order_address').val();
                if (order_address == '') {
                    $('#modalAddressError').modal('show');
                    return;
                }
            } else {
                deliver_method = 'convenience store delivery';
                convenience_store = $('#StoreNumber').val();
                if (convenience_store == '') {
                    $('#modalStoreError').modal('show');
                    return;
                }
            }
        }
    }

    let payment;
    let creditNumber;
    if (info.includes('credit card') == false && info.includes('cash') == false) {
        $('#modalError').modal('show');
        return;
    } else {
        if (info.includes('credit card') == true && info.includes('cash') == true) {
            $('#modalPayError').modal('show');
            return;
        } else {
            if (info.includes('credit card')) {
                payment = 'credit card';
                creditNumber = $('#creditCardNumber').val();
                if (creditNumber == '') {
                    $('#modalCardError').modal('show');
                    return;
                }
            } else {
                payment = 'cash';
            }
        }
    }

    let data = {
        controller: 'cart',
        method: 'checkout',
        parameter: {
            name: name,
            coupon_id: coupon_id,
            subtotal: subtotal,
            deliver: deliver,
            discount: discount,
            price: total,
            phone_num: phone_num,
            deliver_method: deliver_method,
            convenience_store: convenience_store,
            order_address: order_address,
            payment: payment
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            console.log(res);
            $('#modalSuccess').modal('show');
        }
    });
}

const getCoupon = () => {
    let data = {
        controller: 'Coupon',
        method: 'getCoupon'
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        async: false,
        success: function (res) {
            result = res;
        }
    });
    return result;
}




const displayCartInfo = (data) => {
    for (i = 0; i < data.length; i++) {
        if (data[i]['count_num'] == '0') {
            deleteCart(data[i]['cart_id']);
        }else {
            $('#cart').append(cartComponent(data[i]['product_name'], data[i]['cart_id'], data[i]['count_num'] * data[i]['product_price'], data[i]['count_num'], data[i]['product_image']));
        }
    }
}

const cartComponent = (product_name, cart_id, total_price, count_num, product_image) => {
    return `
    <div class="row align-items-center justify-content-center border-line py-3 mx-0 cart${cart_id}" style="width:100%;">
        <div class="col-2 px-0 mx-0"><img src="${product_image}" alt=""  height="162.79"></div>
        <div class="col-3"><h4 style="display: inline;">${product_name}</h4></div>
        <div class="quanity d-flex justify-content-center align-items-center col-3">
            <div class="quanity-box justify-content-center align-items-center">
                <span class="sub text-center" id="${cart_id}sub">-</span>
                <input type="text" class="input-num text-center" id="${cart_id}input-num" value="${count_num}">
                <span class="add text-center" id="${cart_id}add">+</span>
            </div>
        </div>
        <div class="col-2 d-flex justify-content-center"><h4 id="${cart_id}price">$${total_price}</h4></div>
        <div class="col-1"><button type="button" class="btn-close" id="${cart_id}" aria-label="Close"></button></div>
    </div>
    `;
}

const removeCartCard = (id) => {
    let className = ".cart" + id;
    $(className).remove();
    deleteCart(id);
}

const displayCouponInfo = (data) => {
    for (i = 0; i < data.length; i++) {
        $('#form-select').append(`<option class="couponOption" id="${data[i]['coupon_id']}coupon" value="${i + 1}">${data[i]['feature']}</option>`);
    }
}



const add = (id) => {
    let num = "#" + id + "input-num";
    $(num).val(parseInt($(num).val()) + 1);
    updateCart(id, $(num).val());
    let id_price = "#" + id + "price";
    let res = getCart();
    for (i = 0; i < res.length; i++) {
        if (res[i]['cart_id'] == id) {
            $(id_price).text("$" + $(num).val() * res[i]['product_price']);
            getSubtotal(res, $(num).val() * res[i]['product_price'], i);
            break;
        }
    }
}
const sub = (id) => {
    let num = "#" + id + "input-num";
    if (parseInt($(num).val()) <= 0) {
        $(num).val(0);
    } else {
        $(num).val(parseInt($(num).val()) - 1);
    }
    updateCart(id, $(num).val());
    let id_price = "#" + id + "price";
    let res = getCart();
    for (i = 0; i < res.length; i++) {
        if (res[i]['cart_id'] == id) {
            $(id_price).text("$" + $(num).val() * res[i]['product_price']);
            getSubtotal(res, $(num).val() * res[i]['product_price'], i);
            break;
        }
    }
}

const getSubtotal = (data, nowProductPrice, i) => {
    let subtotal = 0;
    for (j = 0; j < data.length; j++) {
        if (j != i) {
            subtotal += data[j]['count_num'] * data[j]['product_price'];
        } else {
            subtotal += nowProductPrice;
        }
    }
    $('#subtotal').text("$" + subtotal);
    if (parseInt($('#discount').text().substring(1)) == 0) {
        dis = parseInt($('#discount').text().substring(1));
    } else {
        dis = parseInt($('#discount').text().substring(2));
    }
    shi = parseInt($('#shipping').text().substring(1));
    $('#total').text("$" + (subtotal + shi - dis));
}
