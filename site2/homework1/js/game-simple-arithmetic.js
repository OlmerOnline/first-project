
function simpleArithmetic() {
    let numberGame = getRandomNumber(1, 4);
    let arrNumber = [];
    let result;
    let userAnswer;

    for (let i = 0; i < 2; i++) {
        arrNumber.push(getRandomNumber(1, 10));
    }

    switch (numberGame) {
        case 1:
            result = arrNumber[0] + arrNumber[1];
            userAnswer = prompt(`Сколько будет ${arrNumber[0]} + ${arrNumber[1]}?`);
            break;
        case 2:
            result = arrNumber[0] - arrNumber[1];
            userAnswer = prompt(`Сколько будет ${arrNumber[0]} - ${arrNumber[1]}?`);
            break;
        case 3:
            result = arrNumber[0] * arrNumber[1];
            userAnswer = prompt(`Сколько будет ${arrNumber[0]} * ${arrNumber[1]}?`);
            break;
        case 4:
            result = arrNumber[0] / arrNumber[1];
            result = parseFloat(result.toFixed(2));
            console.log(result);
            userAnswer = prompt(`Сколько будет ${arrNumber[0]} / ${arrNumber[1]}?\nЕсли получилось дробное число — укажите не более 2 символов после запятой с округлением по матесатическим правилам`);
            break;
    }

    if (!isNumber(userAnswer)) {
        alert('Вы ввели не число');
    } else {
        if (Number(userAnswer) === result) {
            alert('Верно');
        } else {
            alert('Неверно');
        }
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isNumber(number) {
    return !isNaN(number) ? true : false;
}