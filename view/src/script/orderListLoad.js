function getOrderList() {
    let member_id = '1';

    let data = {
        controller: 'orderList',
        method: 'getOrderById',
        parameter: {
            member_id: member_id
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
                let html = `
                    <div class="mx-auto orderList_card my-5 p-4" id="order-${res[i]['order_id']}">
                        <div class="row">
                            <div class="col-6">
                                <div class="card card_up">
                                <div class="d-flex">
                                    <h5 class="card_title">Order : </h5> 
                                    <h5 class="px-2">${res[i]['order_id']}</h5> 
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title">State : </h6>
                                    <h6 class="px-2">${res[i]['order_state']}</h6>
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title">Name : </h6> 
                                    <h6 class="px-2">${res[i]['name']}</h6> 
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title">Phone : </h6>
                                    <h6 class="px-2">${res[i]['phone_num']}</h6>
                                </div>
                                <div id="deliver-${res[i]['order_id']}"></div>
                                <div class="d-flex">
                                    <h6 class="card_title">Payment : </h6>
                                    <h6 class="px-2">${res[i]['payment']}</h6>
                                </div>
                                </div>
                            </div>
                            <div class="col-6 card" id="product-${res[i]['order_id']}">
                            <h5 class="card_title">Purchase Product : </h5>
                            </div>
                        </div>
                        <hr class="mx-4" style="height: 2px;">
                        <div class="row">
                            <div class="col">
                                <div class="card card_down">
                                <div class="d-flex">
                                    <h6 class="card_title">Subtotal : </h6>
                                    <h6 class="px-2">${res[i]['subtotal']}</h6>
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title">Deliver : </h6>
                                    <h6 class="px-2">${res[i]['deliver']}</h6>
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title">Discount : </h6>
                                    <h6 class="px-2">${res[i]['discount']}</h6>
                                </div>
                                <div class="d-flex">
                                    <h6 class="card_title">Total : </h6>
                                    <h6 class="px-2">${res[i]['price']}</h6>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                `
                $('#orderList').append(html);

                if (res[i]['deliver_method'] == 'home delivery') {
                    let deliver = `
                    <div class="d-flex">
                        <h6 class="card_title">Deliver Method : </h6>
                        <h6 class="px-2">${res[i]['deliver_method']}</h6>
                    </div>
                    <div class="d-flex">
                        <h6 class="card_title">Address : </h6>
                        <h6 class="px-2">${res[i]['order_address']}</h6>
                    </div>
                    `
                    $(`#deliver-${res[i]['order_id']}`).append(deliver);
                } else {
                    let deliver = `
                    <div class="d-flex">
                        <h6 class="card_title">Deliver Method : </h6>
                        <h6 class="px-2">${res[i]['deliver_method']}</h6>
                    </div>
                    <div class="d-flex">
                        <h6 class="card_title">Address : </h6>
                        <h6 class="px-2">${res[i]['convenience_store']}</h6>
                    </div>
                    `
                    $(`#deliver-${res[i]['order_id']}`).append(deliver);
                }
            }
        }
    });
}

function getOrderProduct() {
    let order_id = '3';

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
            console.log(res);
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
                        console.log(res1);
                        let product = `
                        <div class="d-flex">
                            <h6 class="card_title">Product Name : </h6>
                            <h6 class="px-2">${res1[0]['product_name']}</h6>
                            <h6 class="card_title">Count : </h6>
                            <h6 class="px-2">${count_num}</h6>
                            <h6 class="card_title">Price : </h6>
                            <h6 class="px-2">${count_num * res1[0]['product_price']}</h6>
                        </div>
                            
                        `
                        $(`#product-${order_id}`).append(product);
                    }
                });
            }
        }
    });
}