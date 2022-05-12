const insertCart = () => {
    let member_id = 1;
    let product_id = 3;
    let count_num = 20;
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

$(() => {
    getCart();
});
$('#insertCart').click(() => {insertCart()});
$('#deleteCart').click(() => {deleteCart()});
$('#updateCart').click(() => {updateCart()});
