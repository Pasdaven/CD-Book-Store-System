$(() => {
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
});