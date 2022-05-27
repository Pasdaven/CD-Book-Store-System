function insertAd() {
    let product_id = $('#product_id').val();
    let product_discount = $('#product_discount').val();

    if (product_id == '' || product_discount == '') {
        $('#modalError').modal('show');
        return;
    }

    if (product_discount > 1 || product_discount < 0) {
        $('#modalDiscountError').modal('show');
        return;
    }

    let data = {
        controller: 'ad',
        method: 'insertAd',
        parameter: {
            product_id: product_id,
            product_discount: product_discount
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            console.log(res);
            if (res == 'exist') {
                $('#modalExist').modal('show');
            } else if (res) {
                // 新增成功
                $('#modalSuccess').modal('show');
            } else {
                // 新增失敗
                $('#modalFail').modal('show');
            }
        }
    });
}

function checkDeleteAd(product_id, product_discount) {
    console.log("slkdjfkldsf");
    $('#modalDeleteCheck').modal('show');
    $("#AdDelete").click(function () {
        deleteAd(product_id, product_discount);
    });
}

function deleteAd(product_id, product_discount) {
    let data = {
        controller: 'ad',
        method: 'deleteAd',
        parameter: {
            product_id: product_id,
            product_discount: product_discount
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            if (res) {
                // 刪除成功
                $('#modalDeleteSuccess').modal('show');
            }
        }
    });
}

function getAd() {
    let data = {
        controller: 'ad',
        method: 'getAd',
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            console.log(res);
        }
    });
}

function loadAdList() {
    let data = {
        controller: 'ad',
        method: 'getAd',
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            console.log(res);

            if (res.length == 0) {
                noAd = `
                <h1 class="d-flex justify-content-center align-items-center" style="height:500px;">No Product AD</h1>
                `
                $('#AdList').append(noAd);
            } else {
                for (var i = 0; i < res.length; i++) {
                    let discount = res[i]['product_discount'];
                    let data = {
                        controller: 'product',
                        method: 'searchProductById',
                        parameter: {
                            product_id: res[i]['product_id']
                        }
                    };
                    let json = JSON.stringify(data);
                    $.ajax({
                        url: '/CD-Book-Store-System/controller/core.php',
                        method: 'POST',
                        data: json,
                        success: res => {
                            console.log(res);
                            list = `
                            <div class="shadow card p-4 my-4">
                                <div class="d-flex">
                                    <div class="px-3"><img src="${res[0]['product_image']}" alt="" width="165" height="237"></div>
                                    <div class="flex-fill d-flex flex-column">
                                        <div class="flex-fill d-flex justify-content-center">
                                            <h1 style="color: #3F4953;font-size:24px;">${res[0]['product_name']}</h1>
                                        </div>
                                        <div class="flex-fill d-flex justify-content-center">
                                        <h1 style="color: #3F4953; font-size:24px;">Discount : ${discount}</h1>
                                            <h1 style="color: #3F4953; font-size:24px; margin-left: 20px;">After Discount Price : ${res[0]['product_price']}</h1>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <button type="button" class="btn red" onclick="checkDeleteAd(${res[0]['product_id']}, ${discount});">Delete AD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `
                            $('#AdList').append(list);
                        }
                    });
                }
            }


        }
    });
}