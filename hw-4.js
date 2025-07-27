//Задание 1
for(let i = 0; i < 2; i++ ){
    console.log("Привет!");
}

//Задание 2
let i = 0;
while(i < 5){
    i++;
    console.log(`${i}`);
}

//Задание 3
for(let i = 7; i<=22; i++){
    console.log(i);
}

//Задание 4
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}

for(let key in obj){
    console.log(`${key} - зарплата ${obj[key]} долларов.`);
}

//Задание 5
let n = 1000, num = 0;
while(n >= 50){
    n /= 2;
    num++;
}

console.log(`Число, которое получилось в результае: ${n}`);
console.log(`Количество итераций: ${num}`);



//Задание 6
let firstFriday = 4; //Первая пятница в июле - 4-е число
for( let i = firstFriday; i <= 31; i += 7){
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}


//Дополнительное задание 1
let k = 100, iterations = 0;
while(k >= 0){
    k -= 7;
    iterations++;
}

console.log(`Число, которое получилось в результае: ${k}`);
console.log(`Количество итераций: ${iterations}`);

//Дополнительное задание 2
let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

for(let i = 0; i < 12; i++){
    console.log(`${months[i]} - ${i + 1}-й месяц`);
}

//Дополнительное задание 3
let book = {
    "Название": 'Бесы',
    "Автор": 'Ф.М. Достоевский',
    "Год издания": 1872,
    "Жанр": "Роман"
}

for(let key in book){
    console.log(`${key} - ${book[key]};`);
}



//Дополнительное задание 4
let numbers = [], minNumb;

for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
  numbers.push(randomNumber);
}

minNumb = numbers[0];

for(let i = 1; i < 10; i++){
    if(numbers[i] < minNumb){
        minNumb = numbers[i];
    }
}

console.log("Массив: ");

for(let i = 0; i < 10; i++){
    console.log(numbers[i]);
}

console.log(`Наименьшее число из массива: ${minNumb}`);
