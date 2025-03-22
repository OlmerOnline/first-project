
function rockPaperScissor(params) {
    const items = ['камень', 'ножницы', 'бумага'];

    const userAnswer = prompt('Напишите камень, ножницы или бумага');

    if (items.includes(userAnswer.toLowerCase())) {
        const bot = items[getRandomIndex()];
        alert(`Вы выбрали: ${userAnswer.toLowerCase()}, компьютер выбррал: ${bot}`);
        
        if (userAnswer.toLowerCase() === bot) {
            alert('Ничья');
        } else {
            if (userAnswer === 'камень' && bot === 'ножницы' ||
                userAnswer === 'бумага' && bot === 'камень' ||
                userAnswer === 'ножницы' && bot === 'бумага') {
                    alert('Победа');
            } else {
                alert('Поражение');
            }
        }
    } else {
        alert('Вы не верно написали');
    }
}


function getRandomIndex() {
    return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
}

