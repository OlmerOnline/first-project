console.log("Задание №1");
function printMinNumber (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(`Минимальное число ${printMinNumber(9, 5)}`);


console.log("Задание №2");
function isEven(number) {
    if (number % 2 === 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
}

console.log(isEven(7));


console.log("Задание №3");
function printSquareNumber(number) {
    console.log(`Квадрат числа ${number}: ${number * number}`);
}

let getSquareNumber = (number) => number * number;

printSquareNumber(5);
console.log(`5 в квадрате равно: ${getSquareNumber(5)}`);


console.log("Задание №4");
function printGreetings(age) {
    if (age < 0) {
        console.log("Вы ввели неправильное значение");
    } else if (age >= 0 && age < 13) {
        console.log("Привет, друг!");
    } else {
        console.log("Добро пожаловать!");
    }
}

let age = Number(prompt("Сколько вам лет?"));
printGreetings(age);


console.log("Задание №5");
function isNumber(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    } else {
        return "Одно или оба значения не являются числом";
    }
}

console.log(isNumber(5, 7));


console.log("Задание №6");
function pow(number) {
    if (isNaN(number)) {
        return "Переданный параметр не является числом";
    } else {
        return Number(number) ** 3;
    }
}

let number = prompt("Введите число");
console.log(pow(number));


console.log("Задание №7");
function getArea() {
    return this.radius * this.radius * Math.PI;
}

function getPerimeter() {
    return this.radius * 2 * Math.PI;
}

let circle1 = {
    radius: 5,
    area: getArea,
    perimeter: getPerimeter,
}
let circle2 = {
    radius: 3,
    area: getArea,
    perimeter: getPerimeter,
}

console.log("Первая окружность");
console.log(`Площадь: ${circle1.area()}`);
console.log(`Периметр: ${circle1.perimeter()}`);

console.log("Вторая окружность");
console.log(`Площадь: ${circle2.area()}`);
console.log(`Периметр: ${circle2.perimeter()}`)
