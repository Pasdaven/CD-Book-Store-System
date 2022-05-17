const insertCart = (product_id) => {
    let member_id = 1;
    let data = {
        controller: 'Cart',
        method: 'insertCart',
        parameter: {
            member_id: member_id,
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
    let member_id = 1;
    let data = {
        controller: 'Cart',
        method: 'getCart',
        parameter: {
            member_id: member_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        async: false,
        success: function(res) {
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

const checkout = () => {
    let member_id = 1;
    let coupon_id = [1,2];
    let deliver_method = 'home delivery';
    let phone_num = 0974451234;
    let convenience_store = 1;
    let order_address = 'taiwan';
    let payment = 'cash';
    let data = {
        controller: 'Cart',
        method: 'checkout',
        parameter: {
            member_id: member_id,
            coupon_id: coupon_id,
            deliver_method: deliver_method,
            phone_num: phone_num,
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
        success: res => console.log(res)
    });
}

const getCoupon = () => {
    let member_id = 1;
    let data = {
        controller: 'Coupon',
        method: 'getCoupon',
        parameter: {
            member_id: member_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        async: false,
        success: function(res) {
            result = res;
        }
    });
    return result;
}




const displayCartInfo = (data) => {
    for (i = 0; i < data.length; i++) {
        $('#cart').append(cartComponent(data[i]['product_name'], data[i]['cart_id'], data[i]['count_num'] * data[i]['product_price'], data[i]['count_num']));
    }
}

const cartComponent = (product_name, cart_id, total_price, count_num) => {
    return `
    <div class="row align-items-center border-line py-3 cart${cart_id}">
        <div class="col-6"><img src="./getImage.jfif" alt="" width="113.7" height="162.79"><h2 class="ms-5" style="display: inline;">${product_name}</h2></div>
        <ul class="quanity">
            <li><span class="sub" id="${cart_id}sub">-</span></li>
            <li><input type="text" class="input-num" id="${cart_id}input-num" value="${count_num}"></li>
            <li><span class="add" id="${cart_id}add">+</span></li>
        </ul>
        <div class="col-2 px-0" style="margin-left: 130px;"><h2 id="${cart_id}price">$${total_price}</h2></div>
        <button type="button" class="btn-close" id="${cart_id}" aria-label="Close"></button>
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
    if(parseInt($(num).val()) <= 0) {
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
        }else {
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