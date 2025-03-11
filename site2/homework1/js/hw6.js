console.log("Задание №1");
let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if (arr[i] === 10) {
        break;
    }
}
console.log("");


console.log("Задание №2");
arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log(i);
        break;
    }    
}
console.log("");


console.log("Задание №3");
arr = [1, 3, 5, 10, 20];
console.log(arr.join(" "));
console.log("");


console.log("Задание №4");
let matrix = [];
for (let i = 0; i < 3; i++) {
    matrix[i] = [];

    for (let j = 0; j < 3; j++) {
        matrix[i][j] = 1;
    }
}
console.log(matrix);
console.log("");


console.log("Задание №5");
arr = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    arr.push(2);
}
console.log(arr);
console.log("");


console.log("Задание №6");
arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort()
let arrNumber = arr.filter(item => typeof (item) === 'number');
console.log(arrNumber);
console.log("");


arr = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt("Угадайте число от 1 до 9"));
isCorrect = arr.includes(userAnswer);
if (isCorrect) {
    alert("Угадал");
} else {
    alert("Не угадал");
}


console.log("Задание №8");
let str = 'abcdef';
arr = str.split('');
arr.reverse();
str = arr.join('');
console.log(str);
console.log('');


console.log("Задание №9");
matrix = [[1, 2, 3], [4, 5, 6]];
arr = [...matrix[0], ...matrix[1]];
console.log(arr);
console.log('');


console.log("Задание №10");
arr = [2, 5, 7, 8, 4, 9, 1, 10, 3, 7, 8];
console.log(`исходный массив: ${arr}`);
for (let i = 0; i < arr.length - 1; i++) {
    console.log(`${arr[i]} + ${arr[i + 1]} = ${arr[i] + arr[i + 1]}`);
}
console.log('');


console.log("Задание №11");
function getSquare(arr) {
    return arr.map(item => item ** 2);
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Исходный массив: ' + arr);
console.log('Массив квадратов :' + getSquare(arr));
console.log('');


console.log("Задание №12");
function getLenght(arr) {
    return arr.map(item => item.length);
}

arr = ['Один', 'Два', 'Три', 'Четыре', 'Пять'];
console.log(`Исходный массив: ${arr}`);
console.log(`Массив длины строк: ${getLenght(arr)}`);
console.log('');


console.log("Задание №13");
function getArrNegativeNumbers(arr) {
    return arr.filter(item => item < 0);
}

arr = [4, 5, -1, 8, 0 , -2, -10, -7, 7];
console.log(`Исходный массив: ${arr}`);
console.log(`Массив только отрицательных чисел: ${getArrNegativeNumbers(arr)}`);
console.log('');


console.log("Задание №14");
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getArrEvenNumbers(arr) {
    return arr.filter(item => item % 2 === 0);
}

arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(getRandomNumber(0, 10));
}
console.log(`Исходный массив: ${arr}`);
console.log(`Массив чётных числе: ${getArrEvenNumbers(arr)}`);
console.log('');


console.log("Задание №15");
function getArithmeticMean(arr) {
    return arr.reduce((total, number) => total + number, 0) / arr.length;
}

arr = [];
for (let i = 0; i < 6; i++) {
    arr.push(getRandomNumber(1, 10));
}
console.log(`Исходный массив: ${arr}`);
console.log(`Среднеарифметическое: ${getArithmeticMean(arr)}`);