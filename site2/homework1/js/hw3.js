let password = "12345";
let userPassword = prompt ("Введите пароль");
if (password === userPassword) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

let c = 5;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let d = 150;
let e = 50;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let a = "2";
let b = "3";
console.log(Number(a) + Number(b));

let monthNumber = Number(prompt("Введите номера месяца"));
switch (monthNumber) {
    case 1:
        console.log("Зима");
        break;
    case 2:
        console.log("Зима");
        break;
    case 3:
        console.log("Весна");
        break;
    case 4:
        console.log("Весна");
        break;
    case 5:
        console.log("Весна");
        break;
    case 6:
        console.log("Лето");
        break;
    case 7:
        console.log("Лето");
        break;
    case 8:
        console.log("Лето");
        break;
    case 9:
        console.log("Осень");
        break;
    case 10:
        console.log("Осень");
        break;
    case 11:
        console.log("Осень");
        break;
    case 12:
        console.log("Зима");
        break;
    default:
        console.log("Такого месяца нет");
}