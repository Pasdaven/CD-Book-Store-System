const insertCart = () => {
    let member_id = 1;
    let product_id = 4;
    let count_num = 1;
    let data = {
        controller: 'Cart',
        method: 'insertCart',
        parameter: {
            member_id: member_id,
            product_id: product_id,
            count_num: count_num
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

const deleteCart = () => {
    let cart_id = 1;
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
        data: json,
        success: res => console.log(res)
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
        success: res => console.log(res)
    });
}

const updateCart = () => {
    let cart_id = 1;
    let count_num = 60;
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
        data: json,
        success: res => console.log(res)
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

$(() => {
    getCart();
});
$('#insertCart').click(() => {insertCart()});
$('#deleteCart').click(() => {deleteCart()});
$('#updateCart').click(() => {updateCart()});
$('#checkout').click(() => {checkout()});