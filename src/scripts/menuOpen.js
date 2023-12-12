
const page = $('.page');
let posInit = 0;
let offset = 0;
let currentRight = 0;
let menuWidth = 250;
let windowSize = $(window).width();

$(window).resize(() => {
   windowSize = $(window).width()
   if (windowSize > 506) {
    currentRight = 0;
    page.css({right : currentRight});
   }
})

page.on('touchstart', (event) => {
    posInit = event.touches[0].clientX
});

page.on('touchend', () => {
    if (offset > 100) {
        currentRight = menuWidth;
    }
    if (offset < -60) {
        currentRight = 0;
    }
    page.animate({right : currentRight});
    posInit = 0;
    offset = 0;
});

$('body').on('touchmove', (event) => {
    if (windowSize < 506) {
        let position = event.touches[0].clientX
        offset = posInit - position
        let newRight = currentRight + offset;
        if (60 < newRight && newRight < menuWidth) {
            page.css({right : (currentRight + (offset * Math.abs(offset) / 1000) - 3.6)}); 
        } 
    }
});

$('.close').click(() => {
    currentRight = 0;
    page.animate({right : currentRight});
})
$('.bottom_menu .menu__items').click(() => {
    currentRight = 0;
    page.animate({right : currentRight});
})
