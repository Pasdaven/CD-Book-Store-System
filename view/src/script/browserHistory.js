const getTime = () => {
    let time = new Date();
    date = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
    let hour = time.getHours().toString().padStart(2, '0');
    let minute = time.getMinutes().toString().padStart(2, '0');
    let second = time.getSeconds().toString().padStart(2, '0');
    return (date + " " + hour + ":" + minute + ":" + second);
};

function insertBrowserHis() {
    let member_id = $.session.get('member_id');
    let product_id = $('#product_id').val();
    let browse_time = getTime();
    let data = {
        controller: 'browserHistory',
        method: 'insertBrowserHis',
        parameter: {
            member_id: member_id,
            product_id: product_id,
            browse_time: browse_time
        }
    };
    let json = JSON.stringify(data);
    $.ajax({
        url: '/CD-Book-Store-System/controller/core.php',
        method: 'POST',
        data: json,
    });
}

function getBrowserHis() {
    let data = {
        controller: 'browserHistory',
        method: 'getBrowserHis',
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