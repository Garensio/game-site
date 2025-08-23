//Задание 1
let password = 'пароль';
let userPassword = prompt('Введите пароль');
if (password === userPassword) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неверно");
}

//Задание 2
let c = 10;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание 3
let d = 12, e = 34;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = 33;
if (monthNumber < 1 || monthNumber > 12) {
    console.log("Номер месяца не подходит");
} else {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            console.log("зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("осень");
            break;
    }
}

//Дополнительное задание 1
let value = prompt("Пожалуйста, введите любое число.");
if(Number(value) != NaN){
    if((Number(value) % 2) === 0){
        alert("Число четное");
    }else if((Number(value) % 2) === 1){
        alert("Число нечетное");
    }
}else{
    alert("Вы ввели не число!")
}

//Дополнительное задание 2
let clientOS = 1;
if(clientOS === 0){
    console.log("Установите версию приложения для iOS по ссылке");
}else if(clientOS === 1){
    console.log("Установите версию приложения для Android по ссылке");
}

//Дополнительное задание 3
clientOS = 0;
let clientDeviceYear = 2015;

if(clientOS ===0 && clientDeviceYear < 2015){
     console.log("Установите облеченную версию приложения для iOS по ссылке");
}else if(clientOS === 0 && clientDeviceYear >= 2015){
    console.log("Установите версию приложения для iOS по ссылке");
}else if(clientOS === 1 && clientDeviceYear < 2015){
    console.log("Установите облеченную версию приложения для Android по ссылке");
}else if(clientOS === 1 && clientDeviceYear >= 2015){
    console.log("Установите версию приложения для Android по ссылке");
}


