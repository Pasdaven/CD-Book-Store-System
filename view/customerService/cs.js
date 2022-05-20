const createCsMessage = () => {
    if ($("#msg-content").val() != "") {
        let cs_record_id = 1;
        let msg_content = $("#msg-content").val();
        let msg_by = "cs";
        let data = {
            controller: "customerService",
            method: "createCsMessage",
            parameter: {
                cs_record_id: cs_record_id,
                msg_content: msg_content,
                msg_by: msg_by,
            },
        };
        let json = JSON.stringify(data);
        $.ajax({
            url: "/cd-book-store-system/controller/core.php",
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
    let msg_by = data["msg_by"] == "cs" ? "by-self" : "by-other";
    let html = `
        <div class="col-12 msg-component ${msg_by}">
            <div class="msg-component-body">
                ${data["msg_content"]}
            </div>
        </div>
    `;
    $("#msg-content-area").append(html);
};

const loadUnreadMsg = () => {
    let cs_record_id = 1;
    let msg_by = "member";
    let data = {
        controller: "customerService",
        method: "searchUnreadMsg",
        parameter: {
            cs_record_id: cs_record_id,
            msg_by: msg_by,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
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

