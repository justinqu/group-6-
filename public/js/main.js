const numberInput = document.getElementById('number'),
    textInput = document.getElementById('msg'),
    button = document.getElementById('button'),
    response = document.querySelector('.response');

    $( ".button" ).on( "click", send);

function send() {
    const number = numberInput.value.replace(/\D/g, '');
    const text = textInput.value;

    fetch('/text', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ number: number, text: text })
    })
        .then(function (res) {
            console.log(res);
        })

        .catch(function (err) {
            console.log(err);
        });
    }