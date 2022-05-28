$(() => {
    /* Navbar */
    let memberRes = getMemberInfo();
    displayUserName(memberRes);
    /* Navbar End */
    loadOrder();
    loadMsg("cs");
    $("#send-btn").click(() => {
        createCsMessage("member");
        cleanInputBox();
    });
    $("#msg-content").keypress((e) => {
        code = e.keyCode ? e.keyCode : e.which;
        if (code == 13) {
            createCsMessage("member");
            cleanInputBox();
        }
    });
    setInterval(() => {
        loadUnreadMsg("cs");
    }, 500);
});