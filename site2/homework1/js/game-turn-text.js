
function turnText(params) {
    let userAnswer = prompt('Введите любое слово – мы его перевернём.');
    let arrWord = userAnswer.split('');
    let word = arrWord.reverse().join('');
    alert(`Вы ввели: ${userAnswer}\nПеревёрнутое слово: ${word}`);
}