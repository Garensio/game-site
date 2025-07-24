//Задание 1
let array1 = [1, 5, 4, 10, 0, 3];

let i = 0;
while(true){
    console.log(array1[i]);
    if(array1[i] === 10){
        break;
    }
    i++;
}

//Задание 2
let indexOf4 = array1.indexOf(4);
console.log(indexOf4);

//Задание 3
const array2 = [1, 3, 5, 10, 20];
console.log(array2.join(" "));

//Задание 4
let doubleArray = [];
for(let i = 0; i < 3; i++){
     doubleArray[i] = [];
    for(let j = 0; j < 3; j++){
        doubleArray[i][j] = 1;
    }
}

console.log(...doubleArray);

//Задание 5
let array3 = [1, 1, 1];
array3.push(2, 2, 2);

console.log(array3);

//Задание 6
let array4 = [9, 8, 7, 'a', 6, 5];
array4 = array4.sort();
array4 = array4.filter(el => el !=='a');
console.log(array4);

//Задание 7
let array5 = [9, 8, 7, 6, 5];
let check = 0;

let userNum = prompt(`Угадайте число!`);

array5.forEach(el => {
    if(el === Number(userNum)){
        alert('Угадал');
        check++
    } 
});

if(check === 0){
    alert('Не угадал');
}

//Задание 8
let word = 'abcdef';
let array6 = word.split('');
array6 = array6.reverse();
let wordReverse = array6.join('');

console.log(wordReverse);

//Задание 9
let array7 = [[1, 2, 3], [4, 5, 6]];
array7 = [...array7[0], ...array7[1]];
console.log(array7);

//Задание 10
let array8 = [2, 1, 5, 2, 1, 5, 6];

for(let i = 0; i <= (array8.length - 2); i++){
    console.log(array8[i] + array8[i + 1]);
}

//Задание 11
let squaringArray = (...array) => {
   let newArray = array.map(el => (el * el));
   return newArray;
}

console.log(squaringArray(1, 2, 3, 4));


//Задание 12
let lengthString = (...array) => {
    let newArray = array.map(el => el.length);
    return newArray;
}

console.log(lengthString('Array', 'Hallo', 'Привет'));

//Задание 13
let negativeNumbers = (...array) => {
    let newArray = array.filter(el => el < 0);
    return(newArray);
}

console.log(negativeNumbers(2, 5, 6, -11, 12, -15));

//Задание 14
let numbers = [];

for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 10); // Случайное число от 1 до 10
  numbers.push(randomNumber);
}

let newArray = numbers.filter(el => el % 2 == 0);

console.log(`Исходный массив: ${numbers}`);
console.log(`Массив с четными значениями: ${newArray}`);

//Задание 15
let array9 = [];

for (let i = 0; i < 6; i++) {
  let randomNumber = Math.floor(Math.random() * 10); // Случайное число от 1 до 10
  array9.push(randomNumber);
}

let totalSum = array9.reduce((total, number) => total + number, 0);

let average = totalSum / array9.length;

console.log(`Среднее арифметическое массива: ${average}`);
