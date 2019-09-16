

$(window).load(function() {
    // Animate loader off screen
    $(".removed").fadeOut("slow");
    $(".added").delay(600).fadeIn("slow");
    $(".confirm-on").delay(500).fadeIn("slow");
    $(".se-pre-con").delay(3000).fadeOut("slow");


    $(".main").delay(3500).fadeIn(2000);
    $(".banner-header,.navigation-bar,.college-logo,.college-title").fadeOut();
    $(".banner-header,.navigation-bar").delay(3000).delay(300).slideDown(500).fadeIn(400);
    $(".college-logo,.college-title").delay(3000).delay(500).slideDown(700).fadeIn(600);
});
