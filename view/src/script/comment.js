const getTime = () => {
    let time = new Date();
    date = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
    let hour = time.getHours().toString().padStart(2, '0');
    let minute = time.getMinutes().toString().padStart(2, '0');
    let second = time.getSeconds().toString().padStart(2, '0');
    return (date + " " + hour + ":" + minute + ":" + second);
};

const insertComment = (product_id) => {
    let star = $(`#star-${product_id}`).val();
    let product_comment = $(`#comment-${product_id}`).val();
    let comment_create_time = getTime();

    if (star < 1 || star > 5) {
        $('#modalStarError').modal('show');
        return;
    }

    let data = {
        controller: 'commentList',
        method: 'createComment',
        parameter: {
            product_id: product_id,
            star: star,
            product_comment: product_comment,
            comment_create_time: comment_create_time
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            $('#modalSuccess').modal('show');
        }
    });
}

const deleteComment = () => {
    let comment_id = 4;
    let data = {
        controller: 'commentList',
        method: 'deleteComment',
        parameter: {
            comment_id: comment_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => console.log(res)
    });
}

const getComment = () => {
    let data = {
        controller: 'commentList',
        method: 'getCommentList'
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => {
            // console.log(res)
        }
    });
}

const updateComment = () => {
    let comment_id = 4;
    let product_comment = "abcdef";
    let data = {
        controller: 'commentList',
        method: 'updateComment',
        parameter: {
            comment_id: comment_id,
            product_comment: product_comment
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
        success: res => console.log(res)
    });
}
