$(() => {
    $('#deleteBtn').click(() => {
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
    });
});