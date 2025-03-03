
function guessNumber() {
    const number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let userAnswer;
    console.log(number);
    
    while (true) {
        userAnswer = prompt("Введите число от 1 до 100?");

        if (isNumber(userAnswer)) {
            userAnswer = Number(userAnswer);

            if (isEquals(number, userAnswer)) {
                break;
            } else {
               printMoreOrLess(number, userAnswer); 
            }
        } else {
            alert("Это не число");
        }

        if (!confirm("Играем дальше?")) {
            break;
        }
    }
}

function isNumber(number) {
    if(!isNaN(number)) {
        return true;
    } else {
        return false;
    }
}

function isEquals(number, userAnswer) {
    if (number === userAnswer) {
        alert(`Поздравляем! Вы угадили число ${number}!`);

        return true;
    } else {
        return false;
    }
}

function printMoreOrLess(number, userAnswer) {
    if (userAnswer > number) {
        alert(`Не верно, загаданное число меньше ${userAnswer}`);
    } else {
        alert(`Не верно, загаданное число больше ${userAnswer}`);
    }
}
