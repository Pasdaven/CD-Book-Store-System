const sendFreeShippingCoupon = () => {
    let data = {
        controller: "coupon",
        method: "sendFreeShippingCoupon",
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log(res),
    });
};

$("#btn-4").click(() => {
    sendFreeShippingCoupon();
});