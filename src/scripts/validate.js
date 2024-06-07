
$(document).ready(() => {
    const submit = $('.order__form .btn');
    const inputsValid = {
        name: /\w/g,
        tel: /\d{4}$/g,
        product: /\w/g
    }

    const inputs = [
        {
            title: name,
            element : document.getElementById('name'),
            valid: /\w/g
        },
        {
            title : tel,
            element : document.getElementById('tel'),
            valid : /\d{4}$/g
        },
        {
            title : product,
            element : document.getElementById('product'),
            valid : /\w/g
        }
    ]

    submit.click(() => {
        let isValide = true;

        inputs.forEach( input => {
            if(input.element.value.match(input.valid) === null) {
                input.element.parentNode.classList.add('notValidate');
                isValide = false;
            }
        });
        if(isValide) {
            $('.ordered').fadeIn(()=> {
                $('.order__form')[0].reset();
            });
            const message = {
                name : document.getElementById('name').value,
                tel: document.getElementById('tel').value,
                product: document.getElementById('product').value
            }

            const tocken = '1429501026:AAGtLG0qimy7JCJ27OGZsFvo4Kv7JtzB9x0';
            const chat_id = '548518047';
            const url = `https://api.telegram.org/bot${tocken}/sendMessage?chat_id=${chat_id}&text=name: ${message.name}%0Atelephone: ${message.tel} %0Aproduct: ${message.product}`;
            fetch(url)
            setTimeout(() => {
                $('.ordered').fadeOut();
            }, 3000)
        }
    });

    inputs.forEach(input => {
        input.element.addEventListener('keydown', (event) => {
            event.target.parentNode.classList.remove('notValidate');
        });
    })
})


const string = '12345 678';
