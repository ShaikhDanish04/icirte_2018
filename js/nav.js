$(document).ready(function(){
    $("#trigger-form,.form-block,.register-btn").mouseover(function(){
        $(".form-block").css("display", "block");
        $(".carousel,.intro,.slider-container,.section-container,.footer-container").css("filter","blur(8px)");
        
    });

    // $("#trigger-form,.form-block,.register-btn").click(function(){
    //     $(".form-block").css("display", "none");
    //     $(".carousel,.intro,.slider-container,.section-container,.footer-container").css("filter","blur(0px)");
    // });

    $(".form-close").click(function(){
        $(".form-block").css("display", "none");
        $(".carousel,.intro,.slider-container,.section-container,.footer-container").css("filter","blur(0px)");
    });
});

$(document).ready(function(){
    $("#menu-toggler,.nav-overlay").click(function(){
        $(".navigation-bar").toggleClass("responsive");
        $(".nav-overlay").toggleClass("show-nav");
    });
    $("#org-committee,.org-committee-dpdn-head").click(function(){
        $(".committee-list-holder,#org-committee-list").fadeIn();
        $(".navigation-bar").removeClass("responsive");
        $(".nav-overlay").fadeOut();
    });
    $(".committee-list-holder").click(function(){
        $(".committee-list-holder,#org-committee-list").fadeOut();
    });
    $("#adv-committee,.adv-committee-dpdn-head").click(function(){
        $(".committee-list-holder,#adv-committee-list").fadeIn();
        $(".navigation-bar").removeClass("responsive");
        $(".nav-overlay").fadeOut();
    });


    
});


                    