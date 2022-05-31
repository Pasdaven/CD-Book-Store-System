const sendFreeShippingCoupon = () => {
    let data = {
        controller: "coupon",
        method: "sendFreeShippingCoupon",
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/CD-Book-Store-System/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => {
            if (res == true) {
                $('#modalSuccess').modal('show');
            } else {
                $('#modalRepeat').modal('show');
            }
        },
    });
};

$("#sendCoupon").click(() => {
    sendFreeShippingCoupon();
});