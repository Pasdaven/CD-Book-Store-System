
$('#search_btn').click(function() {
    let val = $('#search').val();
    let url = 'http://localhost/CD-BOOK-STORE-SYSTEM/view/searchProduct/?productName=' + val;
    window.location.replace(url);
});
document.getElementById('search').oninput=function() {
    $('#search-list-group').remove();
    $('#search-div').append(`<div class="list-group" id="search-list-group" style="position: fixed;width:240px;"></div>`)
    product_name = $('#search').val();
    if (product_name != "") {
        res = timelySearchProduct(product_name);
        displayTimelysearchProduct(res);
    }
};
$("#search").keypress((e) => {
    code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
        let val = $('#search').val();
        let url = 'http://localhost/CD-BOOK-STORE-SYSTEM/view/searchProduct/?productName=' + val;
        window.location.replace(url);
    }
});

const timelySearchProduct = (product_name) => {
    let data = {
        controller: 'product',
        method: 'timelysearchProductByName',
        parameter: {
            product_name: product_name
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
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

const displayTimelysearchProduct = (data) => {
    for (let i = 0; i < data.length; i++) {
        $('#search-list-group').append(`<a href="http://localhost/CD-BOOK-STORE-SYSTEM/view/searchProduct/?productName=${data[i]['product_name']}" class="list-group-item list-group-item-action">${data[i]['product_name']}</a>`);
    }
}

