$(() => {
    let product_id = getProductUrl();
    let res = searchProduct(product_id);
    console.log(res);
    displaysearchProductInfo(res);
    $("#fileButton").click(function() {
        $("#product_image").click();
    });
    $('input[type="file"]').change(function(e) {
        var fileName = e.target.files[0].name;
        $('#filename').text(fileName);
    });
});

const getProductUrl = () => {
    let param = new URLSearchParams(window.location.search);
    return param.get("id");
};

const searchProduct = (product_id) => {
    let data = {
        controller: 'product',
        method: 'searchProductById',
        parameter: {
            product_id: product_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        async: false,
        success: function (res) {
            result = res;
        },
        error: function (res) {
            result = 0;
        }
    });
    return result;
}

const displaysearchProductInfo = (data) => {
    $('#product_id').val(data[0]['product_id']);
    $('#product_name').val(data[0]['product_name']);
    $('#product_author').val(data[0]['product_author']);
    $('#product_description').val(data[0]['product_description']);
    $('#filename').text(data[0]['product_image'].substr(37));
    $('#product_price').val(data[0]['product_price']);
    $('#product_number').val(data[0]['product_number']);
    $('#color_theme_selected').text(data[0]['color_theme']);
}
