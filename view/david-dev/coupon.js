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
        success: (res) => console.log(res),
    });
};

$("#btn-4").click(() => {
    sendFreeShippingCoupon();
});