let arr, str, number;

console.log('Задание №1');
str = 'js';
console.log(str.toUpperCase());
console.log('');


console.log('Задание №2');
function findStringInArray(arr, str) {
    return arr.filter(elem => elem.toLowerCase().startsWith(str));
}

arr = ['Привет, как дела?',
        'Здравствуйте, как дела?',
        'Добрый день, как дела?',
        'ПРИВЕТ, как ты?',
        'привет, как сам?',
    ];
str = 'привет';

console.log(findStringInArray(arr, str));
console.log('');


console.log('Задание №3');
number = 32.58884;
console.log(`Меньшее целое: ${Math.floor(number)}`);
console.log(`Большее целое: ${Math.ceil(number)}`);
console.log(`Ближайшее целое: ${Math.round(number)}`);
console.log('');


console.log('Задание №4');
arr = [52, 53, 49, 77, 21, 32];
console.log(`Максимальное число: ${Math.max(...arr)}`);
console.log(`Минимальное число: ${Math.min(...arr)}`);
console.log('');


console.log('Задание №5');
function printRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Случайное число: ${randomNumber}`);
}

printRandomNumber(1, 10);
console.log('');


console.log('Задание №6');
function createRandomArrayNumber(number) {
    let newArr = [];

    for (let i = 0; i < Math.floor(number / 2); i++) {
        newArr.push(Math.floor(Math.random() * (number - 0 + 1)) + 0);
    }

    return newArr;
}

arr = createRandomArrayNumber(7);
console.log(`Новый массив: ${arr}`);
console.log('');


console.log('Задание №7');
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Случайное число: ${getRandomNumber(10, 20)}`);
console.log('');


console.log('Задание №8');
console.log(`Сегодня: ${new Date().toLocaleDateString()}`);
console.log('');


console.log('Задание №9');
let currentDate = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
}
let futureDate = new Date(currentDate.year, currentDate.month, currentDate.day + 73);
console.log(`Через 73 дня будет: ${futureDate.toLocaleDateString()}`);
console.log('');


console.log('Задание №10');
function getDate(date) {
    let arrMonth = ['Январь', 'Февраль', 'Март',
        'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь',
        'Октябрь','Ноябрь', 'Декабрь',
    ];
    let arrDaysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда',
        'Четверг', 'Пятница', 'Суббота',
    ];

    return 'Дата: ' + date.getDate() + ' ' + arrMonth[date.getMonth()] +
        ' ' + date.getFullYear() + ' — это ' + arrDaysWeek[date.getDay()] + '.\n' +
        'Время: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

let date = new Date();
let strDate = getDate(date);
console.log(strDate);
