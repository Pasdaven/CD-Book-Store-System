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
    // let url_string = window.location.href;
    let url_string = 'http://localhost/CD-BOOK-STORE-SYSTEM/view/payment/?coupon_id=[4,5]&subtotal=1200&deliver=60&discount=100&total=1160';
    let url = new URL(url_string);
    let coupon_id = url.searchParams.get("coupon_id");
    let subtotal = url.searchParams.get("subtotal");
    let deliver = url.searchParams.get("deliver");
    let discount = url.searchParams.get("discount");
    let total = url.searchParams.get("total");

    let member_id = '1';
    // let member_id = $.session.get('member_id');
    let name = $('#name').val();
    let phone_num = $('#phone').val();

    let info = []
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (let i = 0; i < checkboxes.length; i++) {
        info.push(checkboxes[i].value);
    }
    console.log(info);

    if (name == '' || phone_num == '' || (info.includes('home delivery') && info.includes('convenience store delivery')) ||  (info.includes('credit card') && info.includes('cash'))) {
        $('#modalError').modal('show');
        return;
    }

    let deliver_method = '';
    let convenience_store = '';
    let order_address = '';
    if (info.includes('home delivery') && info.includes('convenience store delivery')) {
        $('#modalDeliverError').modal('show');
    } else {
        if (info.includes('home delivery')) {
            deliver_method = 'home delivery';
            order_address = $('#order_address').val();
        } else {
            deliver_method = 'convenience store delivery';
            convenience_store = $('#StoreNumber').val();
        }
    }

    let payment;
    if (info.includes('credit card') && info.includes('cash')) {
        $('#modalPayError').modal('show');
    } else {
        if (info.includes('credit card')) {
            payment = 'credit card';
        } else {
            payment = 'cash';
        }
    }

    let data = {
        controller: 'cart',
        method: 'checkout',
        parameter: {
            name: name,
            member_id: member_id,
            coupon_id: coupon_id,
            price: total,
            phone_num: phone_num,
            deliver_method: deliver_method,
            convenience_store: convenience_store,
            order_address: order_address,
            payment: payment
        }
    };
    console.log(data);
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            console.log(res);
        }
    });
}

$(() => {
    getCart();
});
$('#insertCart').click(() => { insertCart() });
$('#deleteCart').click(() => { deleteCart() });
$('#updateCart').click(() => { updateCart() });
$('#checkout').click(() => { checkout() });