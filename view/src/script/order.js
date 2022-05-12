const insertOrder = () => {
    let member_id = 1;
    let coupon_id = 1;
    let deliver_method = 1;
    let price = 1;
    let phone_num = 1;
    let convenience_store = 1;
    let order_address = 1;
    let payment = 1;
    let order_state = 20;
    let data = {
        controller: 'Order',
        method: 'insertOrder',
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
$('#insertOrder').click(() => {insertOrder()});
$('#deleteOrder').click(() => {deleteOrder()});
$('#updateOrder').click(() => {updateOrder()});
