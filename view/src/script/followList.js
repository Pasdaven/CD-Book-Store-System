function insertFollowList() {
    let member_id = $.session.get('member_id');
    let product_id = $('#product_id').val();
    let data = {
        controller: 'followList',
        method: 'insertFollowList',
        parameter: {
            member_id: member_id,
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

function deleteFollowList() {
    let member_id = $.session.get('member_id');
    let product_id = $('#product_id').val();
    let data = {
        controller: 'followList',
        method: 'deleteFollowList',
        parameter: {
            member_id: member_id,
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

function getFollowList() {
    let data = {
        controller: 'followList',
        method: 'getFollowList',
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