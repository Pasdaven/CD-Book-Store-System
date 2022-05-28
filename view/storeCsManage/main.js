$(() => {
    getCsRecordByCsId();
});

/* Ajax */
const getCsRecordByCsId = () => {
    let cs_id = "1";
    let data = {
        controller: "customerService",
        method: "getCsRecordByCsId",
        parameter: {
            cs_id: cs_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => {
            console.log(res);
            res ? displayCsList(res) : displayNone();
        },
    });
};

/* DOM */
const displayCsList = (data) => {
    data.forEach((element) => {
        $("#cs-list-area").append(csComponent(element));
    });
};

const displayNone = () => {
    let html = `
<h5 class="text-center no-record-text">No customer service records yet</h5>
    `;
    $("#cs-list-area").append(html);
};

/* Component */
const csComponent = (data) => {
    let html = `
<div class="col-4 cs-component mb-4">
    <div class="card">
        <div class="col-12 head d-flex justify-content-between px-3 mt-3 align-items-center">
            <span class="order-id">Order ID #${data["order_id"]}</span>
            <span class="unread-info p-1 px-3">${data["unread_count"]}</span>
        </div>
        <div class="col-12 member-info px-3 mt-3 d-flex align-items-center">
            <div class="member-text col-6">
                <span class="title">Member</span><br />
                <span>${data["order_info"][0]["name"]} #${data["order_info"][0]["member_id"]}</span><br />
            </div>
            <div class="state-text col-6">
                <span class="title">State</span><br />
                <span>${data["order_info"][0]["order_state"]}</span>
            </div>
        </div>
        <div class="col-12 px-3 mt-3">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Count</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
    `;
    data["order_info"]["product"].forEach((element) => {
        html += `
                    <tr>
                        <td>${element["product_info"][0]["product_name"]}</td>
                        <td>${element["count_num"]}</td>
                        <td>${element["product_info"][0]["product_price"]}</td>
                    </tr>
        `;
    });
    html += `
                </tbody>
            </table>
        </div>
    </div>
</div>
    `;
    return html;
};
