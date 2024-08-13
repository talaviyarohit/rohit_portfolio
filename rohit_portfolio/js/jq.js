$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $(".header").addClass("header-fix");
    }
    else {
        $(".header").removeClass("header-fix");
    }
})

// cursor
$(window).mousemove(function (e) {
    $(".ring").css(
        "transform",
        `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
    );
});
