
const array = [
    {
        id: 1,
        name: "Arab"
    },
    {
        id: 2,
        name: "Ingliz"
    },
    {
        id: 3,
        name: "Russian"
    },
    {
        id: 4,
        name: "Xitoy"
    }
]
let gmail = document.querySelectorAll(".carder");
let buydiv = document.querySelectorAll(".buydiv");
let boxer = "";

gmail.forEach((elementO, i) => {
    let box = i + 1;
    array.forEach(element => {
        elementO.addEventListener("click", () => {

            if (element.id == box) {
                reset1()
                reset2()
                boxer = element.name;
                console.log(elementO);
                elementO.classList.toggle("terme")
                buydiv[i].classList.toggle("terme2")

            } else {
                ""
            }
        })
    });
});
function reset1() {
    gmail.forEach(element => {
        element.classList.remove("terme");
    });
}
function reset2() {
    buydiv.forEach(element => {
        element.classList.remove("terme2");
    });
}

//bot token
var telegram_bot_id = "6054114967:AAFfn-ajhy7IZOX_q0REmXVJiV3uCmNER9E";
//chat id
var chat_id = 1524783641;
var ismi, familya, email, message;
var ready = function () {
    ismi = document.getElementById("name").value;
    familya = document.getElementById("surname").value;
    message = "Ismi: " + ismi + "\nNomer: " + familya + "\nKitob: " + boxer;

};
var sendtelegram = function () {
    ready();

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    // document.getElementById("name").value = "";
    // document.getElementById("tel").value = "";
    // document.getElementById("user").value = "";
    // document.getElementById("msg").value = "";
    return false;
};
