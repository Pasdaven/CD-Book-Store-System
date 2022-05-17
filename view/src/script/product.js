$(() => {
    let product_id = getUrl();
    searchProductById(product_id);
});

/* DOM Function */
const getUrl = () => {
    let param = new URLSearchParams(window.location.search);
    return param.get('id');
}

const displayData = (data) => {
    $('#product_name').html(data[0]['product_name']);
    $('#comment_product_name').html(data[0]['product_name']);
    $('#product_author').html(data[0]['product_author']);
    $('#product_description').html(data[0]['product_description']);
    $('#product_price').html(data[0]['product_price']);
    $("#product_image").attr("src", data[0]['product_image']);
    $("#comment_product_image").attr("src", data[0]['product_image']);
}

/* Ajax Function */
const searchProductById = product_id => {
    let data = {
        controller: "product",
        method: "searchProductById",
        parameter: {
            product_id: product_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => displayData(res),
    });
};

const searchProductByName = () => {
    let product_name = $("#text-1").val();
    let data = {
        controller: "product",
        method: "searchProductByName",
        parameter: {
            product_name: product_name,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log(res),
    });
};

const searchProductNum = () => {
    let product_id = $("#text-2").val();
    let data = {
        controller: "product",
        method: "searchProductNum",
        parameter: {
            product_id: product_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log(res),
    });
};

const updateProductNum = () => {
    let product_id = $("#text-3-1").val();
    let new_product_number = $("#text-3-2").val();
    let data = {
        controller: "product",
        method: "updateProductNum",
        parameter: {
            product_id: product_id,
            new_product_number: new_product_number
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json,
        success: (res) => console.log(res),
    });
};