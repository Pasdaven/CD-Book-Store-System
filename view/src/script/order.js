const getOrder = () => {
    let data = {
        controller: 'orderList',
        method: 'getOrder'
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {}
    });
}

const finishOrder = (order_id) => {
    let data = {
        controller: 'orderList',
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
        success: res => { }
    });
}

const cancelOrder = (order_id) => {
    let data = {
        controller: 'orderList',
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
        success: res => { }
    });
}

const returnOrder = (refundAccount, order_id) => {
    let data = {
        controller: 'orderList',
        method: 'returnOrder',
        parameter: {
            order_id: order_id,
            refundAccount: refundAccount
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => { }
    });
}

function updateOrderState(order_id, order_state) {
    let data = {
        controller: 'orderList',
        method: 'updateOrderState',
        parameter: {
            order_id: order_id,
            order_state: order_state
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => { }
    });
}

function finishModal(order_id) {
    $('#modalFinish').modal('show');
    $("#orderFinish").click(function () {
        finishOrder(order_id);
        location.reload();
    });
}

function cancelModal(order_id) {
    $('#modalCancel').modal('show');
    $("#orderCancel").click(function () {
        cancelOrder(order_id);
        location.reload();
    });
}

function returnModal(order_id) {
    $('#modalReturn').modal('show');
    $("#orderReturn").click(function () {
        returnOrder($('#returnAccount').val(), order_id);
        location.reload();
    });
}

function changeOrderStateModal(order_id) {
    $('#modalChangeOrderState').modal('show');
    $("#changeOrderStateBtn").click(function () {
        let order_state = $('#ChangeOrderState').val();

        if (order_state != 'wait' && order_state != 'arrive' && order_state != 'finish' && order_state != 'cancel' && order_state != 'return') {
            $('#modalStateError').modal('show');
        } else {
            updateOrderState(order_id, order_state);
            $('#modalSuccess').modal('show');
        }
    });
}
