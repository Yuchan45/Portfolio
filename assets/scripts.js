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

