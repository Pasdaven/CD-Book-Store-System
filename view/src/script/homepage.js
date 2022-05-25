$(() => {
    /* Navbar */
    let memberRes = getMemberInfo();
    displayUserName(memberRes);
    /* Navbar End */
});

const hideLoadingAnimation = () => {
    $("#loading-area").remove();
};
const slideAnimation = () => {
    $("#logo-box").addClass("fadeOut");
    $("#left-box").addClass("slideUp");
    $("#right-box").addClass("slideDown");
    setTimeout(hideLoadingAnimation, 800);
};
const animation = () => {
    setTimeout(slideAnimation, 1800);
};
animation();
