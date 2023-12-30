
$(document).ready(() => {
    const submit = $('.order__form .btn');
    const inputs = $('.order__form input');

    submit.click(() => {
        for (let i = 0; i < inputs.length; i++) {
            const element = inputs.eq(i);
            if (element.val().length === 0) {
                element.parent().addClass('notValidate');
            }
        }
    });

    inputs.keydown(function () {
        $(this).parent().removeClass('notValidate');
    })
})