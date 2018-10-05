var numberInput = document.getElementById("number"),
    textInput = document.getElementById("msg"),
    contactInput = document.getElementById("contact"),
    button = document.getElementsByClassName("button");

    $( "button" ).on( "click", send );

function send() {
    var number = numberInput.value.replace(/\D/g, "");
    var text = textInput.value;

    fetch("/text", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({number: number, text: text})
    })
}

