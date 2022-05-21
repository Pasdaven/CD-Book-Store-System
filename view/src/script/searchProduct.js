
$('#search_btn').click(function() {
    let val = $('#search').val();
    let url = 'http://localhost/CD-BOOK-STORE-SYSTEM/view/searchProduct/?productName=' + val;
    window.location.replace(url);
});



