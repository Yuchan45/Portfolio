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

// Social media interactions
document.getElementById("social-git").onclick = function () {
    window.open("https://www.github.com", "_blank");
};
document.getElementById("social-ig").onclick = function () {
    window.open("https://www.instagram.com", "_blank");
};
document.getElementById("social-li").onclick = function () {
    window.open("https://www.linkedin.com", "_blank");
};
document.getElementById("social-fb").onclick = function () {
    window.open("https://www.facebook.com", "_blank");
};


// Hamburger Menu interactions
let menuBtn = document.getElementById("ham-menu");
let hamInner = document.querySelector('.ham-inner');
let menuOpen = false;

function blurBackground(flag){
// Recibe como parametro un booleano. Si es true, blurea el fondo. Si es false, lo desblurea.
    let title = document.querySelector('.overlay-info');
    let main = document.querySelector('.main');
    if (flag == true) {
        title.style.filter = 'blur(2px)';
        main.style.filter = 'blur(2px)';
    } else {
        title.style.filter = 'blur(0px)';
        main.style.filter = 'blur(0px)';
    }
}


menuBtn.addEventListener('click', function() {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        blurBackground(true);
        menuOpen = true;
    }else {
        menuBtn.classList.remove('open');
        blurBackground(false);
        menuOpen = false;
    }
});