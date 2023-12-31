$('.toMain').click(function (event) {
    event.preventDefault()
    $('.main')[0].scrollIntoView({ behavior: "smooth"});
});

$('.toWhyUs').click(function (event) {
    event.preventDefault()
    $('.why_us')[0].scrollIntoView({ behavior: "smooth"});
});

$('.toProduct').click(function (event) {
    event.preventDefault()
    $('.choose')[0].scrollIntoView({ behavior: "smooth"});
});

