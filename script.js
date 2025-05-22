const messages = [
    "i promised i wouldnt do it again",
    "i really love u",
    "i unfollowed it",
    "i found a soluton for us to be together for longer",
    "try again",
    "i made a very detaield game plan!",
    "i promise u im gonna make u happy",
    "ur never gonna have to worry again",
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
