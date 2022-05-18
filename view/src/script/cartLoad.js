$(() => {
    let resCart = getCart();
    displayCartInfo(resCart);
    getSubtotal(resCart, 0, -1);
    let resCoupon = getCoupon();
    displayCouponInfo(resCoupon);
    let couponOption = document.getElementById('form-select');
    couponOption.onchange=function() {
        curCoupon = $('#form-select option:selected').text();
        if (curCoupon == 'clear all') {
            $('#displayCoupon1').remove();
            $('#displayCoupon2').remove();
            $('#discount').text("$0");
            $('#shipping').text("$60");
        } else if (curCoupon == '50' || curCoupon == '100' || curCoupon == '150') {
            if ($('#displayCoupon1').text() && ($('#displayCoupon1').text() == 'free-shipping')) {
                if (!$('#displayCoupon2').text()) {
                    $('#displayCoupon').append(`<span id="displayCoupon2" class="display-coupon ms-2">${curCoupon}</span>`);
                } else {
                    $('#displayCoupon2').text(curCoupon);
                }
            } else if (!$('#displayCoupon1').text()) {
                $('#displayCoupon').append(`<span id="displayCoupon1" class="display-coupon ms-2">${curCoupon}</span>`);
            } else {
                $('#displayCoupon1').text(curCoupon);
            }
            $('#discount').text("-$" + curCoupon);
        } else if (curCoupon == 'free-shipping') {
            if (!$('#displayCoupon1').text()) {
                $('#displayCoupon').append(`<span id="displayCoupon1" class="display-coupon ms-2">${curCoupon}</span>`);
            } else if ($('#displayCoupon1').text() && ($('#displayCoupon1').text() == 'free-shipping')) {
            } else if (!$('#displayCoupon2').text()) {
                $('#displayCoupon').append(`<span id="displayCoupon2" class="display-coupon ms-2">${curCoupon}</span>`);
            }
            $('#shipping').text("$0");
        }
        if (parseInt($('#discount').text().substring(1)) == 0) {
            dis = parseInt($('#discount').text().substring(1));
        } else {
            dis = parseInt($('#discount').text().substring(2));
        }
        shi = parseInt($('#shipping').text().substring(1));
        subt = parseInt($('#subtotal').text().substring(1));
        $('#total').text("$" + (subt + shi - dis));
    };
    
    $(".btn-close").click(function() {
        let id = $(this).attr('id');
        removeCartCard(id);
    });
    $('.add').click(function() {
        let id = parseInt($(this).attr('id'));
        add(id);
    });
    $('.sub').click(function() {
        let id = parseInt($(this).attr('id'));
        sub(id);
    });
    checkout();
});

