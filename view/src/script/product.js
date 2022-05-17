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