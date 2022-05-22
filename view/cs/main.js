const loadOrder = () => {
    let data = {
        controller: "customerService",
        method: "searchOrderInfoByMemberId",
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
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

