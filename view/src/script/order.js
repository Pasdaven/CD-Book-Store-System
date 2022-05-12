const insertOrder = (res) => {
    let arr = [];
    for(var i = 0; i < res.length; i++) {
        arr.push([res[i]['product_id'], res[i]['count_num']]);
    }
    let member_id = 1;
    let coupon_id = 1;
    let deliver_method = 'home delivery';
    let phone_num = 0974451234;
    let convenience_store = 1;
    let order_address = 'taiwan';
    let payment = 'cash';
    let order_state = 'wait';
    let data = {
        controller: 'OrderList',
        method: 'insertOrder',
        parameter: {
            arr: arr,
            member_id: member_id,
            coupon_id: coupon_id,
            deliver_method: deliver_method,
            phone_num: phone_num,
            convenience_store: convenience_store,
            order_address: order_address,
            payment: payment,
            order_state: order_state
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

const deleteOrder = () => {
    let cart_id = 1;
    let data = {
        controller: 'Order',
        method: 'deleteOrder',
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

const getOrder = () => {
    let data = {
        controller: 'Order',
        method: 'getOrder'
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => console.log(res)
    });
}

const updateOrder = () => {
    let cart_id = 1;
    let count_num = 60;
    let data = {
        controller: 'Order',
        method: 'updateOrder',
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

$(() => {
    getOrder();
});
res = [
        {
        "cart_id": "1",
        "member_id": "1",
        "product_id": "1",
        "count_num": "20"
        },
        {
            "cart_id": "2",
            "member_id": "1",
            "product_id": "2",
            "count_num": "20"
        },
        {
            "cart_id": "3",
            "member_id": "1",
            "product_id": "3",
            "count_num": "40"
        }];
$('#insertOrder').click(() => {insertOrder(res)});
$('#deleteOrder').click(() => {deleteOrder()});
$('#updateOrder').click(() => {updateOrder()});
