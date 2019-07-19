let chatWidget = document.getElementsByClassName("chat-widget");

let arrChatWidget = Array.from(chatWidget);

for (i = 0; i < arrChatWidget.length; i++) {
    let elementChat = arrChatWidget[i];
    elementChat.addEventListener("click", function (e) {
        elementChat.classList.add("chat-widget_active");
    })
}

let input = document.getElementById("chat-widget__input");

let date = new Date();
let time = date.toLocaleTimeString();

input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {

        const messages = document.querySelector(".chat-widget__messages");

        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">
                ${input.value}
            </div>
        </div>
    `;

        document.getElementById("chat-widget__input").value = "";

        let timer = setTimeout(func, 1000);

        function func() {
            let arrRobotMessages = ["Добрый день, мы ещё не проснулись. Позвоните через 10 лет", "Мы ничего не будем вам продавать", "Где ваша совесть"];
            let randomMessage = Math.floor(Math.random() * arrRobotMessages.length);

            messages.innerHTML += `
        <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">
                ${arrRobotMessages[randomMessage]}
            </div>
        </div>
    `;
        }
    }
})
