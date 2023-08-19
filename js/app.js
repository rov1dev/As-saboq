
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
    elementO.addEventListener("click", () => {
        reset1()
        reset2()
        array.forEach(element => {
            if (element.id == box) {
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
var ismi, familya, message;
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
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    return false;
};

let gmail1 = document.querySelectorAll(".carder1");
let buydiv1 = document.querySelectorAll(".buydiv1");
let boxer1 = "";

gmail1.forEach((elementO, i) => {
    let box1 = i + 1;
    elementO.addEventListener("click", () => {
        reset11()
        reset21()
        array.forEach(element => {
            if (element.id == box1) {
                boxer1 = element.name;
                elementO.classList.toggle("terme")
                buydiv1[i].classList.toggle("terme2")
            } else {
                ""
            }
        })
    });
});
function reset11() {
    gmail1.forEach(element => {
        element.classList.remove("terme");
    });
}
function reset21() {
    buydiv1.forEach(element => {
        element.classList.remove("terme2");
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
};
var sendtelegram1 = function () {
    ready1();
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
let boxer2 = "";

gmail2.forEach((elementO, i) => {
    let box2 = i + 1;
    elementO.addEventListener("click", () => {
        reset12()
        reset22()
        array.forEach(element => {
            if (element.id == box2) {
                boxer2 = element.name;
                elementO.classList.toggle("terme")
                buydiv2[i].classList.toggle("terme2")
            } else {
                ""
            }
        })
    });
});
function reset12() {
    gmail2.forEach(element => {
        element.classList.remove("terme");
    });
}
function reset22() {
    buydiv2.forEach(element => {
        element.classList.remove("terme2");
    });
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
};
var sendtelegram2 = function () {
    ready2();
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

document.addEventListener('DOMContentLoaded', function() {
    const deadline = new Date(2023, 08, 15);
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
