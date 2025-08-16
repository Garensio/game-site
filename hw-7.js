const { serialize } = require("class-transformer");

//Задание 1
let string1 = 'js';
let string1Up = string1.toLocaleUpperCase();
console.log(string1Up);

//Задание 2
let array2 = ["Морской волк", "морской ёж", "апельсин", "лев", "морской лев"];
let string2 = "морской";


let filterArray = (array, stringFilter) => {
    return array.filter(el => el.toLowerCase().startsWith(string2.toLowerCase()));

}

console.log(filterArray(array2, string2));


//Задание 3
let numb = 32.58884;

let numbFloor = Math.floor(numb);
let numbCeil = Math.ceil(numb);
let numbRound = Math.round(numb);

console.log(`Число 32.58884 округленное до меньшего целовго ${numbFloor}`);
console.log(`Число 32.58884 округленное до большего целовго ${numbCeil}`);
console.log(`Число 32.58884 округленное до ближайшего целовго ${numbRound}`);

//Задание 4
let array4 = [52, 53, 49, 77, 21, 32];

console.log(`Исходные числа: ${array4.join(" ")}`);
console.log(`Минимальное число: ${Math.min(...array4)}`);
console.log(`Максимальное число: ${Math.max(...array4)}`);

//Задание 5
let randomNumbers = () => {
    console.log(`Случайное число: ${Math.floor(Math.random() * 10) + 1}`);
}

//Задание 6
let randomNumbers2 = (a) => {

    let resultArray = [];

    for(let i = 0; i < Math.floor(a / 2); i++){
        resultArray.push(Math.floor(Math.random() * (a + 1))) //Диапазон от 0 до принятого числа (включительно), если не включительно то убираем + 1
    }

    return resultArray;
}

console.log(randomNumbers2(0));


//Задание 7
let randomRange = (num1, num2) => {
   return Math.floor(Math.random() * (num2 - num1 + 1)) + num1; //Диапазон включает оба числа
}

console.log(randomRange(3, 8));


//Задание 8
let todayDate = new Date();
console.log(todayDate);

//Задание 9
let currentDate = new Date();

let days73 = 70 * 24 * 60 * 60 * 1000;

let searchDate = +currentDate + days73;

let daysThrough73 = new Date(searchDate);

console.log(`Текущая дата: ${currentDate}`);
console.log(`Дата через 73 дня: ${daysThrough73}`);


//Задание 10
 let dateNewFormat = (date) => {
    let dateOptions = {day: 'numeric', month: 'long', year: 'numeric'};
    return `Дата: ${date.toLocaleDateString('ru-RU', dateOptions)} - это ${date.toLocaleDateString('ru-RU', {weekday: 'long'})}. Время: ${date.toLocaleTimeString('ru-RU')}`;
 }
 
 console.log(dateNewFormat(new Date()));