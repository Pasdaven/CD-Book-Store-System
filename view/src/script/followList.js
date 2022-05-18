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

function deleteFollowList(id) {
    // let member_id = $.session.get('member_id');
    let member_id = 1;
    let product_id = id;
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
    let member_id = 1;
    let data = {
        controller: 'followList',
        method: 'getFollowList',
        parameter: {
            member_id: member_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        async: false,
        success: function(res) {
            result = res;
        }
    });
    return result;
}




const removeFollowListCard = (id) => {
    let className = ".card" + id;
    $(className).remove();
    deleteFollowList(id);
}



const removeCart = (product_id) => {
    let member_id = 1;
    let data = {
        controller: "cart",
        method: "deleteCartByMIdPId",
        parameter: {
            product_id: product_id,
            member_id: member_id,
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json
    });
}

    
