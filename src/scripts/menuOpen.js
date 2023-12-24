
const page = $('.page');
const tongue = $('.tongue');
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
    tongue.css({right : currentRight});
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
    tongue.animate({right : currentRight, width : 50});
    posInit = 0;
    offset = 0;
});

$('body').on('touchmove', (event) => {
    if (windowSize < 506) {
        let position = event.touches[0].clientX
        offset = posInit - position
        let newRight = currentRight + offset;
        tongue.css({width : (offset * Math.abs(offset) / 100)});
        if (100 < newRight && newRight < menuWidth) {
            page.css({right : (currentRight + (offset * Math.abs(offset) / 1000) - 3.6)}); 
            tongue.css({right : (currentRight + (offset * Math.abs(offset) / 1000) - 3.6)}); 
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
