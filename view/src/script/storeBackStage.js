function getAllOrderList() {
    let data = {
        controller: 'orderList',
        method: 'getOrder',
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
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
                                    <h6 class="card_title"><i class="bi bi-person-lines-fill mx-3"></i>Member ID : </h6>
                                    <h6 class="px-2">${res[i]['member_id']}</h6>
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
                            <div class="col-7 card" id="product-${res[i]['order_id']}">
                            <h5 class="card_title">Purchase Product : </h5>
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
                            <div class="col-6">
                                <button class="btn green" style="width: 300px;" onclick="changeOrderStateModal(${res[i]['order_id']}, ${res[i]['member_id']})">Change Order State</button>
                            </div>
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

                getAllOrderProduct(res[i]['order_id'], res[i]['order_state']);
            }
        }
    });
}

function getAllOrderProduct(order_id, order_state) {
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
                        </div>
                            
                        `
                        $(`#product-${order_id}`).append(product);

                        
                    }
                });
            }
        }
    });
}