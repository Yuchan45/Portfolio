// SKILLS TEXT PARALLAX
// $(document).on('scroll', function(){
//     let left_value = $('.skills-animation').css('left');
//     left_value = parseInt(left_value, 10); //It retains only leading numbers and discards all the rest.
//     if (window.scrollY >= 1000 &&  window.scrollY <= 1600){
//         $('.skills-animation').css("left", Math.max(-1500 + 1.1*window.scrollY) + "px");
//     }
// });

// Social media btns hover animation
$(document).ready(function(){
    $(".box").mouseenter(function(){
        var box = $(this);
        box.addClass('boxSkew');
        setTimeout(function(){
            box.addClass('boxExpand');
        }, 150);
    });

    $(".box").mouseleave(function(){
        var box = $(this);
        setTimeout(function(){
            box.removeClass('boxExpand');
            box.removeClass('boxSkew');
        }, 150);
    });
    
});

