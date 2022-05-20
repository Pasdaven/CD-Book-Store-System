const insertFollowList = () => {
    let product_id = $('#product_id').val();
    let data = {
        controller: 'followList',
        method: 'insertFollowList',
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

const deleteFollowList = (id) => {
    let product_id = id;
    let data = {
        controller: 'followList',
        method: 'deleteFollowList',
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

const getFollowList = () => {
    let data = {
        controller: 'followList',
        method: 'getFollowList'
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




const removeFollowListCard = (id) => {
    let className = ".card" + id;
    $(className).remove();
    deleteFollowList(id);
}



const removeCart = (product_id) => {
    let data = {
        controller: "cart",
        method: "deleteCartByMIdPId",
        parameter: {
            product_id: product_id
        },
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: "/cd-book-store-system/controller/core.php",
        method: "POST",
        data: json
    });
}

    
