$(() => {
    let res = getFollowList();
    displayFollowListInfo(res);
    $(".product").click(function() {
        let id = $(this).attr('id');
        removeFollowListCard(id);
    });
    $(".btn-view-info").click(function() {
        let id = parseInt($(this).attr('id'));
        let url = `http://localhost/CD-BOOK-STORE-SYSTEM/view/product/index.html?id=${id}`;
        window.location = url;
    });
    $(".btn-not-add-to-cart").click(function() {
        let id = parseInt($(this).attr('id'));
        insertCart(id);
        let idname = "#" + $(this).attr('id');
        $(idname).removeClass("btn-not-add-to-cart").addClass("btn-add-to-cart");
    });
    $(".btn-add-to-cart").click(function() {
        let id = parseInt($(this).attr('id'));
        deleteCart(id);
        let idname = "#" + $(this).attr('id');
        $(idname).removeClass("btn-add-to-cart").addClass("btn-not-add-to-cart");
    });
});