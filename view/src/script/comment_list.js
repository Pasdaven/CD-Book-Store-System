$(() => {
    $('#submitBtn').click(() => {
        let member_id = 4;
        let product_id = 5;
        let product_comment = "abc";
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
    });
});