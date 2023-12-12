
const page = $('.page');
let posInit = 0;
let offset = 0;
let currentRight = 0;
let menuWidth = $(window).width() * 0.6

page.on('touchstart', (event) => {
    posInit = event.touches[0].clientX

    $('.posInitX span').text(posInit)
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
    $('.posInitX span').text(posInit);
    $('.offsetX span').text(offset);
});

$('body').on('touchmove', (event) => {
    let position = event.touches[0].clientX
    offset = posInit - position
    let newRight = currentRight + offset;
    if (60 < newRight && newRight < menuWidth) {
        page.css({right : (currentRight + (offset - 60) / 5)});
    } 
    
    $('.pos span').text(position);
    $('.offsetX span').text(offset);
});

