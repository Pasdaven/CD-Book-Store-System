const getOrder = () => {
    let data = {
        controller: 'OrderList',
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

const finishOrder = () => {
    let order_id = 5;
    let data = {
        controller: 'OrderList',
        method: 'finishOrder',
        parameter: {
            order_id: order_id
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

const cancelOrder = () => {
    let order_id = 5;
    let data = {
        controller: 'OrderList',
        method: 'cancelOrder',
        parameter: {
            order_id: order_id
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

const returnOrder = () => {
    let order_id = 5;
    let data = {
        controller: 'OrderList',
        method: 'returnOrder',
        parameter: {
            order_id: order_id
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


$('#finishOrder').click(() => {finishOrder()});
$('#cancelOrder').click(() => {cancelOrder()});
$('#returnOrder').click(() => {returnOrder()});