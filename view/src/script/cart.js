$(() => {
    getComment();
});
$('#insertBtn').click(insertCart());
$('#deleteBtn').click(deleteCart());
$('#updateBtn').click(updateCart());

const insertCart = () => {
    let cart_id = 4;
    let member_id = 1;
    let product_id = 1;
    let count_id = 10;
    let data = {
        controller: 'Cart',
        method: 'insertCart',
        parameter: {
            cart_id: cart_id,
            member_id: member_id,
            product_id: product_id,
            count_id: count_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => console.log(res)
    });
    window.location.reload();
}

const deleteCart = () => {
    let comment_id = 4;
    let data = {
        controller: 'Cart',
        method: 'deleteCart',
        parameter: {
            comment_id: comment_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => console.log(res)
    });
    window.location.reload();
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
    let comment_id = 4;
    let product_comment = "abcdef";
    let data = {
        controller: 'Cart',
        method: 'updateCart',
        parameter: {
            comment_id: comment_id,
            product_comment: product_comment
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => console.log(res)
    });
    window.location.reload();
}