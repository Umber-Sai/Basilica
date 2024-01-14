
$(document).ready(() => {
    const submit = $('.order__form .btn');
    const inputs = $('.order__form input');

    submit.click(() => {
        let isValide = true
        for (let i = 0; i < inputs.length; i++) {
            const element = inputs.eq(i);
            if (element.val().length === 0) {
                element.parent().addClass('notValidate');
                isValide = false
            }
        }
        if(isValide) {
            $('.ordered').fadeIn(()=> {
                $('.order__form')[0].reset();
            });
            setTimeout(() => {
                $('.ordered').fadeOut();
            }, 3000)
        }
    });

    inputs.keydown(function () {
        $(this).parent().removeClass('notValidate');
    })
})