$(() => {
    selfIdentity = "cs";
    otherIdentity = "member";
    loadOrder();
    loadMsg();
    $("#send-btn").click(() => {
        createCsMessage();
        cleanInputBox();
    });
    $("#msg-content").keypress((e) => {
        code = e.keyCode ? e.keyCode : e.which;
        if (code == 13) {
            createCsMessage();
            cleanInputBox();
        }
    });
    setInterval(() => {
        loadUnreadMsg();
    }, 500);
});
