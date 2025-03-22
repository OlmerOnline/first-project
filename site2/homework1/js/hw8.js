let people;

console.log('Задание №1');
people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);
console.log('');


console.log('Задание №2');
function isPositive(number) {
    return number >= 0;
}
function isMale(people) {
    return people.gender === 'male';
}
function filter(arr, callback) {
    const newArr = [];
    
    arr.forEach(elem => {
        if (callback(elem)) {
            newArr.push(elem);
        }
    });

    return newArr;
}

console.log(filter([3, -4, 1, 9], isPositive));

people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));
console.log('');


console.log('Задание №3');
function printDate() {
    const date = new Date();

    const intervalID = setInterval(() => {
        console.log(date.toLocaleDateString());
    }, 3000);

    setTimeout(() => {
        clearInterval(intervalID);
        console.log('30 секунд прошло');
    }, 1000 * 30);
}

printDate();


console.log('Задание №4');
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})


console.log('Задание №5');
function delayForSecond(name, cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(name); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond('Глеб', sayHi);