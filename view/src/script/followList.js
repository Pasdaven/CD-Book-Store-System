$(() => {
    getFollowList();
    $(".product").click(function() {
        let id = $(this).attr('id');
        removeCard(id); 
    });
});
const removeCard = (id) => {
    let className = "." + id;
    $(className).remove();
}


const displayFollowListInfo = (data) => {
    for (i = 0; i < data.length; i++) {
        $('#followList').append(cardComponent(data[i][0]['product_name'], "pascal", data[i][0]['product_id']));
    }
}

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
        success: res => displayFollowListInfo(res)
    });
}











const cardComponent = (product_name, author_name, product_id) => {
    return `
    <div class="shadow card p-4 my-4" id="${product_id}">
        <div class="d-flex">
            <div class="px-3"><img src="./getImage.jfif" alt="" width="165" height="237"></div>
            <div class="flex-fill d-flex flex-column">
                <div class="align-self-end"><i class="bi bi-heart-fill product" style="color: #F0B0B0;cursor:pointer;"></i></div>
                <div class="flex-fill d-flex  align-items-center justify-content-end">
                    <div class="col-4">
                        <h1 style="color: #3F4953;font-size:28px;">${product_name}</h1>
                        <p style="color: #9199A0;font-size:20px;">${author_name}</p>
                        <i class="me-1 bi bi-star-fill" style="color: #8C929B;"></i>
                        <i class="me-1 bi bi-star-fill" style="color: #8C929B;"></i>
                        <i class="me-1 bi bi-star-fill" style="color: #8C929B;"></i>
                        <i class="me-1 bi bi-star-fill" style="color: #8C929B;"></i>
                        <i class="me-1 bi bi-star" style="color: #8C929B;"></i>
                    </div>
                    <div class="align-self-end pt-5">
                        <button type="button" class="ms-4 ps-5 btn btn-view-info" style="width:225px;height:60px;">View info<i class="ms-5 bi bi-info-circle-fill"></i></button>
                        <button type="button" class="ms-3 ps-5 btn btn-add-to-cart" style="width:225px;height:60px;">Add to cart<i class="ms-5 bi bi-cart-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}
     
    
   