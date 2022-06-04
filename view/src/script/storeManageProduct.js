

document.getElementById('search').oninput=function() {
    $('#search-list-group').remove();
    $('#search-div2').append(`<div class="list-group p-1" id="search-list-group" style="width:100%;font-size:36px;"></div>`)
    product_name = $('#search').val();
    if (product_name != "") {
        let res = timelySearchProduct(product_name);
        displayTimelysearchProduct(res);
        let tempclass = "height:" + (70 * res.length + 70) + "px;z-index:20;position:relative;";
        $('#search-div').attr("style", tempclass);
    }else {
        $('#search-div').attr("style", "height:70px;z-index:20;position:relative;");
    }
};
$("#search").keypress((e) => {
    code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
        let val = $('#search').val();
        let url = '/CD-Book-Store-System/view/storeManageProduct/?productName=' + val;
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

const displayTimelysearchProduct = (data) => {
    for (let i = 0; i < data.length; i++) {
        $('#search-list-group').append(`<a href="/CD-Book-Store-System/view/storeManageProduct/?productName=${data[i]['product_name']}" class="list-group-item list-group-item-action" style="background:rgba(61, 158, 232, 0);border:none;">${data[i]['product_name']}</a>`);
    }
}

$(() => {
    let productName = getProductUrl();
    let res = searchProduct(productName);
    displaysearchProductInfo(res);

    $(".delete").click(function() {
        let id = $(this).attr('id');
        $(".deleteButton").click(function() {
            removeProductCard(id);
        });
        
    });
    $(".update").click(function() {
        let id = $(this).attr('id');
        let url = '/CD-Book-Store-System/view/storeUpdateProduct/?id=' + id;
        window.location.replace(url);
    });
});

const getProductUrl = () => {
    let param = new URLSearchParams(window.location.search);
    return param.get("productName");
};

const searchProduct = (product_name) => {
    let data = {
        controller: 'product',
        method: 'searchProductByName',
        parameter: {
            product_name: product_name
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






const displayRate = (rate, product_id) => {
    let star1 = '.star1' + product_id;
    let star2 = '.star2' + product_id;
    let star3 = '.star3' + product_id;
    let star4 = '.star4' + product_id;
    let star5 = '.star5' + product_id;
    switch (rate) {
        case 1:
            $(star1).addClass('bi-star-fill');
            $(star2).addClass('bi-star');
            $(star3).addClass('bi-star');
            $(star4).addClass('bi-star');
            $(star5).addClass('bi-star');
            break;
        case 2:
            $(star1).addClass('bi-star-fill');
            $(star2).addClass('bi-star-fill');
            $(star3).addClass('bi-star');
            $(star4).addClass('bi-star');
            $(star5).addClass('bi-star');
            break;
        case 3:
            $(star1).addClass('bi-star-fill');
            $(star2).addClass('bi-star-fill');
            $(star3).addClass('bi-star-fill');
            $(star4).addClass('bi-star');
            $(star5).addClass('bi-star');
            break;
        case 4:
            $(star1).addClass('bi-star-fill');
            $(star2).addClass('bi-star-fill');
            $(star3).addClass('bi-star-fill');
            $(star4).addClass('bi-star-fill');
            $(star5).addClass('bi-star');
            break;
        case 5:
            $(star1).addClass('bi-star-fill');
            $(star2).addClass('bi-star-fill');
            $(star3).addClass('bi-star-fill');
            $(star4).addClass('bi-star-fill');
            $(star5).addClass('bi-star-fill');
            break;
        default:
            break;
    }
}

const displaysearchProductInfo = (data) => {
    if (data == 0) {
        $('#searchProduct').append(`<h1 class="d-flex justify-content-center align-items-center" style="height:500px;">No such product found</h1>`);
    }
    for (let i = 0; i < data.length; i++) {
        $('#searchProduct').append(searchProductComponent(data[i][0]['product_name'], data[i][0]['product_author'], data[i][0]['product_id'], data[i][0]['product_image']));
        displayRate(parseInt(data[i][1][0]['AVG(star)']), data[i][0]['product_id']);
    }
}


const deleteProduct = (id) => {
    let product_id = id;
    let data = {
        controller: 'product',
        method: 'deleteProduct',
        parameter: {
            product_id: product_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
    });
}

const removeProductCard = (id) => {
    let className = ".card" + id;
    $(className).remove();
    deleteProduct(id);
}


const searchProductComponent = (product_name, product_author, product_id, product_image) => {
    return `
    <div class="shadow card p-4 my-4 card${product_id}" style="width: 100%;">
        <div class="d-flex align-items-center justify-content-center">
            <div class="col-3"><img src="${product_image}" alt="" width="165" height="237"></div>
            <div class="col-6">
                <h1 style="color: #3F4953;font-size:28px;">${product_name}</h1>
                <p style="color: #9199A0;font-size:20px;">${product_author}</p>
                <i class="me-1 bi star star1${product_id}" style="color: #8C929B;"></i>
                <i class="me-1 bi star star2${product_id}" style="color: #8C929B;"></i>
                <i class="me-1 bi star star3${product_id}" style="color: #8C929B;"></i>
                <i class="me-1 bi star star4${product_id}" style="color: #8C929B;"></i>
                <i class="me-1 bi star star5${product_id}" style="color: #8C929B;"></i>
            </div>
            <div class="col-1"></div>
            <div class="col-2 btn">
                <button type="button" class="my-2 align-items-center justify-content-center d-flex btn update" id="${product_id}" style="width:100%;height:120px;background:rgba(44, 172, 56, 0.2);">update</button>
                <button type="button" class="my-2 align-items-center justify-content-center d-flex btn delete" id="${product_id}" style="width:100%;height:120px;background:rgba(232, 61, 61, 0.2);" data-bs-toggle="modal" data-bs-target="#deleteModal">delete</button>
            </div>
        </div>
    </div>
    `;
}
