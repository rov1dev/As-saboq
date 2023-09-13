
const array = [
    {
        id: 0,
        active: true,
        name: "Arab-tili\t"
    },
    {
        id: 1,
        active: true,
        name: "Ingliz-tili\t"
    },
    {
        id: 2,
        active: true,
        name: "Rus-tili\t"
    },
    {
        id: 3,
        active: true,
        name: "Xitoy-tili\t"
    }
]
let gmail = document.querySelectorAll(".carder");
let buydiv = document.querySelectorAll(".buydiv");
let bi = document.querySelectorAll(".ch-icon");
let modal = document.querySelector(".modalcha");
let close1 = document.querySelector(".close1")
let close2 = document.querySelector(".close2")
let win = document.querySelector(".maint")

close1.addEventListener("click", () => {
    modal.style.display = "none";
    win.classList.remove("mains");
})
close2.addEventListener("click", () => {
    modal.style.display = "none";
    win.classList.remove("mains");
})
win.addEventListener("click", () => {
    modal.style.display = "none";
    win.classList.remove("mains");
})
let boxer = [];
gmail.forEach((elementO, i) => {
    let box = i;
    elementO.addEventListener("click", () => {
        elementO.classList.toggle("terme");
        buydiv[i].classList.toggle("terme2");
        bi[i].classList.toggle("bi-check-lg");
        array.forEach(element => {
            if (box == element.id) {
                if (element.active) {
                    boxer.push(element.name)
                    element.active = false;
                    console.log(boxer)
                }
                else {
                    boxer.pop(element.name)
                    element.active = true;
                    console.log(boxer);
                }
            }
        })

    })

});
function reset1() {
    gmail.forEach(element => {
        element.classList.remove("terme");
    });
    buydiv.forEach(element => {
        element.classList.remove("terme2");
    });
    bi.forEach(element => {
        element.classList.remove("bi-check-lg");
    });
}
//bot token
var telegram_bot_id = "6054114967:AAFfn-ajhy7IZOX_q0REmXVJiV3uCmNER9E";
//chat id
var chat_id = 1524783641;
var ismi, familya, message;
var ready = function () {
    ismi = document.getElementById("name").value;
    familya = document.getElementById("surname").value;
    message = "Ismi: " + ismi + "\nNomer: " + familya + "\nKitob: " + boxer;
    win.classList.add("mains");
    modal.style.display = "block";
};
var sendGroup = function () {
    //bot token
    var telegram_botid = "6054114967:AAFfn-ajhy7IZOX_q0REmXVJiV3uCmNER9E";
    //chat id
    var chatid = "assaboqlid";
    fetch(`https://api.telegram.org/bot${telegram_botid}/sendMessage?chat_id=@${chatid}&text=Ismi:${ismi}%0ANomer${familya}%0AKitob:${boxer}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
    boxer = [];
}
var sendtelegram = function () {
    ready();
    resetALL()
    sendGroup();
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
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    return false;
};


let gmail1 = document.querySelectorAll(".carder1");
let buydiv1 = document.querySelectorAll(".buydiv1");
let bi1 = document.querySelectorAll(".ch-icon1");

let boxer1 = [];

gmail1.forEach((elementO, i) => {
    let box1 = i;
    elementO.addEventListener("click", () => {
        elementO.classList.toggle("terme");
        buydiv1[i].classList.toggle("terme2");
        bi1[i].classList.toggle("bi-check-lg");
        array.forEach(element => {
            if (box1 == element.id) {
                if (element.active) {
                    boxer1.push(element.name)
                    element.active = false;
                }
                else {
                    boxer1.pop(element.name)
                    element.active = true;
                }
            }
        })
    });
});
function reset11() {
    gmail1.forEach(element => {
        element.classList.remove("terme");
    });
    buydiv1.forEach(element => {
        element.classList.remove("terme2");
    });
    bi1.forEach(element => {
        element.classList.remove("bi-check-lg");
    });
}
//bot token
var telegram_bot_id = "6054114967:AAFfn-ajhy7IZOX_q0REmXVJiV3uCmNER9E";
//chat id
var chat_id = 1524783641;
var ismi1, familya1, message1;
var ready1 = function () {
    ismi1 = document.getElementById("name1").value;
    familya1 = document.getElementById("surname1").value;
    message1 = "Ismi: " + ismi1 + "\nNomer: " + familya1 + "\nKitob: " + boxer1;
    win.classList.add("mains");
    modal.style.display = "block";

};
var sendGroup1 = function () {
    //bot token
    var telegram_botid = "6054114967:AAFfn-ajhy7IZOX_q0REmXVJiV3uCmNER9E";
    //chat id
    var chatid = "assaboqlid";
    fetch(`https://api.telegram.org/bot${telegram_botid}/sendMessage?chat_id=@${chatid}&text=Ismi:${ismi1}%0ANomer${familya1}%0AKitob:${boxer1}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
    let boxer1 = [];

}
var sendtelegram1 = function () {
    ready1();
    resetALL()
    sendGroup1()
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
            "text": message1
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name1").value = "";
    document.getElementById("surname1").value = "";
    return false;
};


let gmail2 = document.querySelectorAll(".carder2");
let buydiv2 = document.querySelectorAll(".buydiv2");
let bi2 = document.querySelectorAll(".ch-ico2");
let boxer2 = [];


gmail2.forEach((elementO, i) => {
    let box2 = i;
    elementO.addEventListener("click", () => {
        elementO.classList.toggle("terme");
        buydiv2[i].classList.toggle("terme2");
        bi2[i].classList.toggle("bi-check-lg");
        array.forEach(element => {
            if (box2 == element.id) {
                if (element.active) {
                    boxer2.push(element.name)
                    element.active = false;
                    console.log(boxer2)
                }
                else {
                    boxer2.pop(element.name)
                    element.active = true;
                    console.log(boxer2);
                }
            }
        })
    });
});
function reset12() {
    gmail2.forEach(element => {
        element.classList.remove("terme");
    });
    buydiv2.forEach(element => {
        element.classList.remove("terme2");
    });
    bi2.forEach(element => {
        element.classList.remove("bi-check-lg")
    })
}
//bot token
var telegram_bot_id = "6054114967:AAFfn-ajhy7IZOX_q0REmXVJiV3uCmNER9E";
//chat id
var chat_id = 1524783641;
var ismi2, familya2, message2;
var ready2 = function () {
    ismi2 = document.getElementById("name2").value;
    familya2 = document.getElementById("surname2").value;
    message2 = "Ismi: " + ismi2 + "\nNomer: " + familya2 + "\nKitob: " + boxer2;
    modal.style.display = "block";
    win.classList.add("mains");

};
var sendGroup2 = function () {
    //bot token
    var telegram_botid = "6054114967:AAFfn-ajhy7IZOX_q0REmXVJiV3uCmNER9E";
    //chat id
    var chatid = "assaboqlid";
    fetch(`https://api.telegram.org/bot${telegram_botid}/sendMessage?chat_id=@${chatid}&text=Ismi:${ismi2}%0ANomer${familya2}%0AKitob:${boxer2}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
    let boxer2 = [];
}
var sendtelegram2 = function () {
    ready2();
    resetALL()
    sendGroup2()
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
            "text": message2
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name2").value = "";
    document.getElementById("surname2").value = "";
    return false;
};
function resetALL() {
    reset1()
    reset11()
    reset12()
}
document.addEventListener('DOMContentLoaded', function () {
    const deadline = new Date("2023", "08", "15");
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
        $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
});
