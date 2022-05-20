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

