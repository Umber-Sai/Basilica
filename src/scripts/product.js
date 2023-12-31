const productBtn = $('.choose__cards .btn');
productBtn.click(function () {
    const product = $(this).parent().parent().prev().prev().text();
    const size = $('input[name="size"]:checked').val();
    $('.input_product').removeClass('notValidate');
    $('#product').val(product + ' ' + size);
    $('.order')[0].scrollIntoView({ behavior: "smooth"});
});