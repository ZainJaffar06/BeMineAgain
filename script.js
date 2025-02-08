const messages = [
    "chat are u sure?",
    "nah i think u made a mistake",
    "say yes aanvi",
    "ur clicking no fro the sake of it",
    "try again",
    "ur acc a monkey pick again",
    "please aanvi",
    "stop being autistic im running out of responses.",
    "fine ill stop asking",
    "jk, say yes please aanvi! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
