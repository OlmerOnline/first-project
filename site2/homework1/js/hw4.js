console.log("Задние №1");
let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}
console.log("");


console.log("Задние №2");
for (let i = 1; i < 6; i++) {
    console.log(i);
}
console.log("");


console.log("Задние №3");
for (let i = 7; i < 23; i++) {
    console.log(i);
}
console.log("");


console.log("Задние №4");
let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400",
};
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}
console.log("");


console.log("Задние №5");
let n = 1000;
let num = 0;
while(n > 50) {
    n /= 2;
    num++;
}
console.log(`n=${n}, количество итераций - ${num}`);
console.log("");


console.log("Задние №6");
let friday = 3;
for (let i = 1; i < 32; i++) {
    if (i === friday) {
        console.log(`"Сегодня пятница, ${i}-е число. Необходимо подготовить отчёт.`);
        friday += 7;
    }
}
