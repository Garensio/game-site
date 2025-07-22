//Задание 1
let returnMin = (a, b) => {
    return (a <= b) ? a : b;
}

//Задание 2
let evenNumber = function (a) {
    if (a % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

//Задание 3
function squaringConsole(a) {
    console.log(Number(a) * Number(a));
}

function squaringReturn(a) {
    return Number(a) * Number(a);
}

//Задание 4
let userAge = () => {
    let age = prompt('Сколько Вам лет?');
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

//Задание 5
let multiplyNumbers = (a, b) => {
    let num1 = Number(a), num2 = Number(b);
    if (isNaN(num1) || isNaN(num2) || !isFinite(num1) || !isFinite(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return (num1 * num2);
    }
}


//Задание 6
let cubedNumber = () => {
    let userNum = Number(prompt('Введите число n'));
    if (isNaN(userNum) || !isFinite(userNum)) {
        return 'Переданный параметр не является числом';
    } else {
        return `n в кубе равняется ${Math.pow(userNum, 3)}`;
    }
}

//Задание 7
function getArea() {
    return (Math.PI * Math.pow(this.radius, 2));
}

function getPerimeter() {
    return (2 * Math.PI * this.radius);
}

let circle1 = {
    radius: 12,
    getArea: getArea,
    getPerimeter: getPerimeter
}

let circle2 = {
    radius: 4,
    getArea: getArea,
    getPerimeter: getPerimeter
}