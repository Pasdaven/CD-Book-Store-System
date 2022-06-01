let selfIdentity;
let otherIdentity;

const getUrl = () => {
    let param = new URLSearchParams(window.location.search);
    return param.get("id");
};

const loadOrder = () => {
    let cs_record_id = getUrl();
    let data = {
        controller: "customerService",
        method: "searchOrderInfoByCsRecId",
        parameter: {
            cs_record_id: cs_record_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => {
            res ? displayOrderInfo(res) : display404();
        },
    });
};

const createProductComponent = (data) => {
    let html = `
        <div class="col-12 product-component">
            <div class="product-img">
                <img src="${data["product_info"][0]["product_image"]}">
            </div>
            <div class="product-info">
                <h1>${data["product_info"][0]["product_name"]}</h1>
                <a>Count:</a> ${data["count_num"]}<br>
                <a>Price:</a> ${data["product_info"][0]["product_price"]}<br>
            </div>
        </div>
    `;
    $("#product_component_area").append(html);
};

const displayOrderInfo = (res) => {
    $('#member_id').html(res[0]["member_id"]);
    $('#member_name').html(res[0]["member_name"]);
    $("#order_id").html(res[0]["order_id"]);
    $("#order_state").html(res[0]["order_state"]);
    $(".product-order-state").addClass(res[0]["order_state"]);
    if (res[0]["order_state"] == "wait") {
        $("#state_icon").addClass("bi-hourglass-top");
    }
    if (res[0]["order_state"] == "finish") {
        $("#state_icon").addClass("bi-check-circle");
    }
    if (res[0]["order_state"] == "cancel") {
        $("#state_icon").addClass("bi-x-circle");
    }
    if (res[0]["order_state"] == "return") {
        $("#state_icon").addClass("bi-truck");
    }
    res["product"].forEach((element) => {
        createProductComponent(element);
    });
};

const createCsMessage = () => {
    if ($("#msg-content").val() != "") {
        let cs_record_id = getUrl();
        let msg_content = $("#msg-content").val();
        let data = {
            controller: "customerService",
            method: "createCsMessage",
            parameter: {
                cs_record_id: cs_record_id,
                msg_content: msg_content,
                msg_by: selfIdentity,
            },
        };
        let json = JSON.stringify(data);
        $.ajax({
            url: "/CD-Book-Store-System/controller/core.php",
            method: "POST",
            data: json,
            success: (res) => {
                console.log(res);
                createMsgComponent(res[0]);
                scrollToBottom();
            },
        });
    }
};

const cleanInputBox = () => {
    $("#msg-content").val("");
};

const createMsgComponent = (data) => {
    let msg_by = data["msg_by"] == selfIdentity ? "by-self" : "by-other";
    let html = `
        <div class="col-12 msg-component ${msg_by}">
            <div class="msg-component-body">
                ${data["msg_content"]}
            </div>
        </div>
    `;
    $("#msg-content-area").append(html);
};

const loadUnreadMsg = (msg_by) => {
    let cs_record_id = getUrl();
    let data = {
        controller: "customerService",
        method: "searchUnreadMsg",
        parameter: {
            cs_record_id: cs_record_id,
            msg_by: otherIdentity,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => {
            if (res != "") {
                res.forEach((element) => {
                    createMsgComponent(element);
                });
                scrollToBottom();
            }
        },
    });
};

const loadMsg = () => {
    let cs_record_id = getUrl();
    let data = {
        controller: "customerService",
        method: "searchMsgByCsRecId",
        parameter: {
            cs_record_id: cs_record_id,
            read_who: otherIdentity,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => {
            if (res != "") {
                res.forEach((element) => {
                    createMsgComponent(element);
                });
                scrollToBottom();
            }
        },
    });
};

const scrollToBottom = () => {
    let height = $("#msg-content-area")[0].scrollHeight;
    $("#msg-content-area").scrollTop(height);
};

const display404 = () => {
    window.location.replace("/CD-Book-Store-System/view/404");
};
