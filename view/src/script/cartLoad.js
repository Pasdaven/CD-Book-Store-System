$(() => {
    let resCart = getCart();
    displayCartInfo(resCart);
    getSubtotal(resCart, 0, -1);
    let resCoupon = getCoupon();
    displayCouponInfo(resCoupon);
    let couponOption = document.getElementById('form-select');
    couponOption.onchange=function() {
        let curCoupon = $('#form-select option:selected').text();
        let coupon_id = parseInt($('#form-select option:selected').attr('id'));
        if (curCoupon == 'clear all') {
            $('#displayCoupon1').remove();
            $('#displayCoupon2').remove();
            $('#discount').text("$0");
            $('#shipping').text("$60");
        } else if (curCoupon == '50' || curCoupon == '100' || curCoupon == '150') {
            if ($('#displayCoupon1').text() && ($('#displayCoupon1').text() == 'free-shipping')) {
                if (!$('#displayCoupon2').text()) {
                    $('#displayCoupon').append(`<span id="displayCoupon2" value="${coupon_id}" class="display-coupon ms-2">${curCoupon}</span>`);
                } else {
                    $('#displayCoupon2').text(curCoupon).attr('value', coupon_id);
                }
            } else if (!$('#displayCoupon1').text()) {
                $('#displayCoupon').append(`<span id="displayCoupon1" value="${coupon_id}" class="display-coupon ms-2">${curCoupon}</span>`);
            } else {
                $('#displayCoupon1').text(curCoupon).attr('value', coupon_id);
            }
            $('#discount').text("-$" + curCoupon);
        } else if (curCoupon == 'free-shipping') {
            if (!$('#displayCoupon1').text()) {
                $('#displayCoupon').append(`<span id="displayCoupon1" value="${coupon_id}" class="display-coupon ms-2">${curCoupon}</span>`);
            } else if ($('#displayCoupon1').text() && ($('#displayCoupon1').text() == 'free-shipping')) {
            } else if (!$('#displayCoupon2').text()) {
                $('#displayCoupon').append(`<span id="displayCoupon2" value="${coupon_id}" class="display-coupon ms-2">${curCoupon}</span>`);
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
    $(".btn-check-out").click(function() {
        let coupon_id = [];
        if ($('#displayCoupon1').text()) {
            coupon_id = $('#displayCoupon2').text() ? [$('#displayCoupon1').attr('value'), $('#displayCoupon2').attr('value')] : [$('#displayCoupon1').attr('value')];
        }
        let subtotal = parseInt($('#subtotal').text().substring(1));
        let discount = 0;
        if (parseInt($('#discount').text().substring(1)) == 0) {
            discount = parseInt($('#discount').text().substring(1));
        } else {
            discount = parseInt($('#discount').text().substring(2));
        }
        let deliver = parseInt($('#shipping').text().substring(1));
        let total = parseInt($('#total').text().substring(1));
        let url = `/CD-Book-Store-System/view/payment/?${window.btoa('coupon_id').substring(0, window.btoa('coupon_id').length - 1)}=${window.btoa(coupon_id)}&${window.btoa('subtotal').substring(0, window.btoa('subtotal').length - 1)}=${window.btoa(subtotal)}&${window.btoa('deliver').substring(0, window.btoa('deliver').length - 1)}${window.btoa(deliver)}&${window.btoa('discount').substring(0, window.btoa('discount').length - 1)}=${window.btoa(discount)}&${window.btoa('total').substring(0, window.btoa('total').length - 1)}=${window.btoa(total)}`;
        window.location = url;
    });
    let memberRes = getMemberInfo();
    displayUserName(memberRes);
});

