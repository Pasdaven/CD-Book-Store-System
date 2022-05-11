$(() => {
    getComment();
});
$('#insertBtn').click(insertComment());
$('#deleteBtn').click(deleteComment());
$('#updateBtn').click(updateComment());

const insertComment = () => {
    let comment_id = 4;
    let product_id = 5;
    let product_comment = "abcdv";
    let data = {
        controller: 'CommentList',
        method: 'createComment',
        parameter: {
            member_id: member_id,
            product_id: product_id,
            product_comment: product_comment
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => console.log(res)
    });
    window.location.reload();
}

const deleteComment = () => {
    let comment_id = 4;
    let data = {
        controller: 'CommentList',
        method: 'deleteComment',
        parameter: {
            comment_id: comment_id
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => console.log(res)
    });
    window.location.reload();
}

const getComment = () => {
    let data = {
        controller: 'CommentList',
        method: 'getCommentList'
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => console.log(res)
    });
}

const updateComment = () => {
    let comment_id = 4;
    let product_comment = "abcdef";
    let data = {
        controller: 'CommentList',
        method: 'updateComment',
        parameter: {
            comment_id: comment_id,
            product_comment: product_comment
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-BOOK-STORE-SYSTEM/controller/core.php',
        method: 'POST',
        data: json,
        success: res => console.log(res)
    });
    window.location.reload();
}