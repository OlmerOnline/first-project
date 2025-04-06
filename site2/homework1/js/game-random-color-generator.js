const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'black'];

function randomColorGenerator() {
    const element = document.querySelector('.mini-games');
    while (true) {
        const color = getColor();

        if (color !== element.style.backgroundColor) {
            element.style.backgroundColor = color;
            break
        }
    }
}

function getColor() {
    const indexColor = Math.floor(Math.random() * (7 - 0 + 1)) + 0;

    return colors[indexColor];
}