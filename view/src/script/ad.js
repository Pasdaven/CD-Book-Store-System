function insertAd() {
    let ad_description = $('#ad_description').val();
    let ad_img_id = $('#ad_img_id').val();
    let data = {
        controller: 'ad',
        method: 'insertAd',
        parameter: {
            ad_description: ad_description,
            ad_img_id: ad_img_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            if (res) {
                // 新增成功

            } else {
                // 新增失敗
                
            }
        }
    });
}

function deleteAd() {
    let ad_description = $('#ad_description').val();
    let ad_img_id = $('#ad_img_id').val();
    let data = {
        controller: 'ad',
        method: 'deleteAd',
        parameter: {
            ad_description: ad_description,
            ad_img_id: ad_img_id
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