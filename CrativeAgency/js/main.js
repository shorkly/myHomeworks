//hamburger
$(document).ready(function() {

    $(".hamburger_menu").click(function() {
        $(".hamburger_menu").toggleClass("active");
        $("#mobile_menu, #menu_shadow").toggleClass("opened");
    });

    $("#menu_shadow").click(function() {
        $(".hamburger_menu").removeClass("active");
        $("#mobile_menu, #menu_shadow").removeClass("opened");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });
});