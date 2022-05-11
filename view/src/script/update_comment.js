$(() => {
    $('#updateBtn').click(() => {
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
    });
});