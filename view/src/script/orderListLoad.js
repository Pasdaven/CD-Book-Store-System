$(() => {
    getOrderList();
    getOrder();
    $('#finishOrder').click(() => { finishOrder() });
    $('#cancelOrder').click(() => { cancelOrder() });
    $('#returnOrder').click(() => { returnOrder() });
    getComment();
    $('#insertComment').click(() => {insertComment()});
    $('#deleteComment').click(() => {deleteComment()});
    $('#updateComment').click(() => {updateComment()});
    let memberRes = getMemberInfo();
    displayUserName(memberRes);
});


function getOrderList() {

    let data = {
        controller: 'orderList',
        method: 'getOrderById'
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            console.log(res);

            if (res.length == 0) {
                let html = `
                    <div class="d-flex justify-content-center">
                        <span style="font-size: 50px; margin-top: 25%;">No Order List</span>
                    </div>
                `
                $('#orderList').append(html);
            }

            for (var i = 0; i < res.length; i++) {
                let html = `
                    <div class="mx-auto orderList_card my-5 p-3" id="order-${res[i]['order_id']}">
                        <div class="row">
                            <div class="col-5">
                                <div class="card card_up">
                                <div class="d-flex">
                                    <h5 class="card_title">Order : </h5> 
                                    <h5 class="px-2">${res[i]['order_id']}</h5> 
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title"><i class="bi bi-clock mx-3"></i>State : </h6>
                                    <h6 class="px-2">${res[i]['order_state']}</h6>
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title"><i class="bi bi-person-circle mx-3"></i>Name : </h6> 
                                    <h6 class="px-2">${res[i]['name']}</h6> 
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title"><i class="bi bi-phone mx-3"></i>Phone : </h6>
                                    <h6 class="px-2">${res[i]['phone_num']}</h6>
                                </div>
                                <div id="deliver-${res[i]['order_id']}"></div>
                                <div class="d-flex">
                                    <h6 class="card_title"><i class="bi bi-wallet2 mx-3"></i>Payment : </h6>
                                    <h6 class="px-2">${res[i]['payment']}</h6>
                                </div>
                                </div>
                            </div>
                            <div class="col-7 card">
                            <h5 class="card_title">Purchase Product : </h5>
                            <div class="product_list py-3" id="product-${res[i]['order_id']}"></div>
                            </div>
                        </div>
                        <hr class="mx-4" style="height: 2px;">
                        <div class="row">
                            <div class="col-6">
                                <div class="card card_down">
                                <div class="d-flex">
                                    <h6 class="card_title"><i class="bi bi-list-ol mx-3"></i>Subtotal : </h6>
                                    <h6 class="px-2">${res[i]['subtotal']}</h6>
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title"><i class="bi bi-patch-plus mx-3"></i>Deliver : </h6>
                                    <h6 class="px-2">${res[i]['deliver']}</h6>
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title"><i class="bi bi-patch-minus mx-3"></i>Discount : </h6>
                                    <h6 class="px-2">${res[i]['discount']}</h6>
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title"><i class="bi bi-cash-coin mx-3"></i>Total : </h6>
                                    <h6 class="px-2">${res[i]['price']}</h6>
                                </div>
                                </div>
                            </div>
                            <div class="col-6" id="order_btn-${res[i]['order_id']}"></div>
                        </div>
                    </div>

                    
                `
                $('#orderList').append(html);

                if (res[i]['deliver_method'] == 'home delivery') {
                    let deliver = `
                    <div class="d-flex">
                        <h6 class="card_title"><i class="bi bi-truck mx-3"></i>Deliver Method : </h6>
                        <h6 class="px-2">${res[i]['deliver_method']}</h6>
                    </div>
                    <div class="d-flex">
                        <h6 class="card_title"><i class="bi bi-house mx-3"></i>Address : </h6>
                        <h6 class="px-2">${res[i]['order_address']}</h6>
                    </div>
                    `
                    $(`#deliver-${res[i]['order_id']}`).append(deliver);
                } else {
                    let deliver = `
                    <div class="d-flex">
                        <h6 class="card_title"><i class="bi bi-truck mx-3"></i>Deliver Method : </h6>
                        <h6 class="px-2">${res[i]['deliver_method']}</h6>
                    </div>
                    <div class="d-flex">
                        <h6 class="card_title"><i class="bi bi-shop-window mx-3"></i>Convenience Store Number : </h6>
                        <h6 class="px-2">${res[i]['convenience_store']}</h6>
                    </div>
                    `
                    $(`#deliver-${res[i]['order_id']}`).append(deliver);
                }

                if (res[i]['order_state'] == 'wait') {
                    let button = `
                        <button class="btn red" style="width: 100px;" onclick="cancelModal(${res[i]['order_id']})">cancel</button>
                    `
                    $(`#order_btn-${res[i]['order_id']}`).append(button);
                } else if (res[i]['order_state'] == 'arrive') {
                    let button = `
                        <button class="btn deep_green" style="width: 100px;" onclick="finishModal(${res[i]['order_id']})">finish</button>
                        <button class="btn yellow" style="width: 100px;" onclick="returnModal(${res[i]['order_id']})">return</button>
                    `
                    $(`#order_btn-${res[i]['order_id']}`).append(button);
                }

                getOrderProduct(res[i]['order_id'], res[i]['order_state']);
            }
        }
    });
}

function getOrderProduct(order_id, order_state) {
    let data = {
        controller: 'orderProduct',
        method: 'getOrderProductById',
        parameter: {
            order_id: order_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            // console.log(res);
            for (var i = 0; i < res.length; i++) {
                let product_id = res[i]['product_id'];
                let count_num = res[i]['count_num'];
                let data = {
                    controller: 'product',
                    method: 'searchProductById',
                    parameter: {
                        product_id: product_id
                    }
                };
                let json = JSON.stringify(data);
                $.ajax({
                    url: '/CD-Book-Store-System/controller/core.php',
                    method: 'POST',
                    data: json,
                    success: res1 => {
                        // console.log(res1);
                        let product = `
                        <div class="d-flex">
                            <h6 class="card_title">Name : </h6>
                            <h6 class="px-2" style="width: 120px;">${res1[0]['product_name']}</h6>
                            <h6 class="card_title">Count : </h6>
                            <h6 class="px-2 card_text">${count_num}</h6>
                            <h6 class="card_title">Price : </h6>
                            <h6 class="px-2" style="width: 80px;">${count_num * res1[0]['product_price']}</h6>
                            <div id="orderComment-${order_id}-${product_id}"><div>
                        </div>
                            
                        `
                        $(`#product-${order_id}`).append(product);

                        if (order_state == 'finish') {
                            let comment = `
                                <div style="margin-top: -32px;">
                                    <button class="btn btn-sm green" style="font-size: 12px;" onclick="showCommentModal(${product_id})">Comment</button>
                                </div>
                            `
                            $(`#orderComment-${order_id}-${product_id}`).append(comment);

                            let modal = `
                                <div class="modal fade" id="modal-${product_id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Product Comment</h5>
                                            </div>
                                            <div class="modal-body">
                                            <div class="d-flex justify-content-center">
                                            <input class="form-control my-4 comment_input" list="star_list" placeholder="Star For Product" id="star-${product_id}">
                                            <datalist id="star_list">
                                            <option value="1">
                                            <option value="2">
                                            <option value="3">
                                            <option value="4">
                                            <option value="5">
                                            </datalist>
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <input class="form-control my-4 comment_input" type="text" id="comment-${product_id}" placeholder="Comment">
                                            </div>
                                            </div>
                                            <div class="modal-footer d-flex justify-content-center">
                                                <button type="button" class="btn green" data-bs-dismiss="modal" onclick="insertComment(${product_id});">Comment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        `
                            $('#modal_list').append(modal);
                        }
                    }
                });
            }
        }
    });
}

function showCommentModal(order_id) {
    $(`#modal-${order_id}`).modal('show');
}
