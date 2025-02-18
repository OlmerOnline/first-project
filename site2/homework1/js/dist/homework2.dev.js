"use strict";

var a = 10;
alert("\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F a \u0440\u0430\u0432\u043D\u044F\u0435\u0442\u0441\u044F ".concat(a));
a = 20;
alert("\u0410 \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F a \u0440\u0430\u0432\u043D\u044F\u0435\u0442\u0441\u044F ".concat(a));
var yearFirstIPhone = 2007;
alert("\u041F\u0435\u0440\u0432\u044B\u0439 iPhone \u0432\u044B\u043F\u0443\u0441\u0442\u0438\u043B\u0438 ".concat(yearFirstIPhone, " \u0433\u043E\u0434\u0443"));
var nameCreatorJS = "Брендан Эйх";
alert("JavaScript \u0441\u043E\u0437\u0434\u0430\u043B ".concat(nameCreatorJS));
var number1 = 10;
var number2 = 2;
alert("\u0421\u0443\u043C\u043C\u0430 2 \u0447\u0438\u0441\u0435\u043B: ".concat(number1 + number2));
alert("\u0420\u0430\u0437\u043D\u0438\u0446\u0430 2 \u0447\u0438\u0441\u0435\u043B: ".concat(number1 - number2));
alert("\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 2 \u0447\u0438\u0441\u0435\u043B: ".concat(number1 * number2));
alert("\u0427\u0430\u0441\u0442\u043D\u043E\u0435 \u0434\u0432\u0443\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(number1 / number2));
var result = Math.pow(2, 5);
alert("2 \u0432 5-\u043E\u0439 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u0440\u0430\u0432\u043D\u043E ".concat(result));
a = 9;
var b = 2;
alert("\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043E\u0442 \u0434\u0435\u043B\u0435\u043D\u0438\u044F 9 \u043D\u0430 2 \u0440\u0430\u0432\u0435\u043D ".concat(a % b));
var num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
var age = Number(prompt("Сколько вам лет?"));
alert("\u0412\u0430\u043C ".concat(age, " \u043B\u0435\u0442"));
var user = {
  name: "Alexey",
  age: 30,
  isAdmin: true
};
userName = prompt("Как вас зовут?");
alert("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(userName, "!"));