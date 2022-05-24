$(() => {
    loadOrder();
    $('#card-area').on("click", ".card", function() {
        jumpChatRoom($(this).attr("id"));
    })
});

const loadOrder = () => {
    let data = {
        controller: "customerService",
        method: "searchOrderInfoByMemberId",
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => {
            console.log(res);
            if (res != "") {
                res.forEach((element) => {
                    createOrderComponent(element);
                });
            } else {
                displayNoOrder();
            }
        },
    });
};

const createOrderComponent = (data) => {
    let state_icon
    if (data[0]['order_state'] == 'wait') {
        state_icon = 'bi-hourglass-top';
    }
    if (data[0]['order_state'] == 'finish') {
        state_icon = 'bi-check-circle';
    }
    if (data[0]['order_state'] == 'cancel') {
        state_icon = 'bi-x-circle';
    }
    if (data[0]['order_state'] == 'return') {
        state_icon = 'bi-truck';
    }
    let html = `
    <div class="card px-5 py-4 mb-5" id="${data[0]['order_id']}">
        <div class="row">
            <div class="col-6">
                <h1 class="product-order-id">Order #${data[0]['order_id']}</h1>
            </div>
            <div class="col-6 d-flex justify-content-end">
                <div
                    class="product-order-state d-flex py-2 px-3 align-items-center justify-content-center ${data[0]['order_state']}"
                >
                    <i class="bi ${state_icon}"></i>
                    <a>${data[0]['order_state']}</a>
                </div>
            </div>
        </div>
        <div class="row mt-3">
        `
    
    data['product'].forEach((element) => {
        html += `
        <div class="col-4 d-flex justify-content-center">
            <div class="product-component">
                <div class="product-img">
                    <img src="${element['product_info'][0]['product_image']}" />
                </div>
                <div class="product-info">
                    <h1>${element['product_info'][0]['product_name']}</h1>
                    <a>Count:</a> ${element['count_num']}<br />
                    <a>Price:</a> ${element['product_info'][0]['product_price']}<br />
                </div>
            </div>
        </div>
        `
    });
    
    html += `
        </div>
    </div>
    `;

    $('#card-area').append(html);

}

const jumpChatRoom = (order_id) => {
    let data = {
        controller: "customerService",
        method: "jumpChatRoom",
        parameter: {
            order_id: order_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => {
            let url = "./csChat/?id=" + res[0]["cs_record_id"];
            window.location = url;
        },
    });
}

const displayNoOrder = () => {
    console.log('hu');
    let html = "<p class='text-center'>You don't have any order yet.</p>";
    $('#card-area').html(html);
}