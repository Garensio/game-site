//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];


console.log(people.sort((one, two) => {
    return (one.age - two.age);
}));

//Задание 2
function isPositive(number) {
    return number > 0 ? true : false;
}
function isMale(object) {
    return object.gender === 'male' ? true : false;
}
function filter(arr, ruleFunction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }

    }

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleTwo = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleTwo, isMale));

//Задание 3
let dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };

const timer = (deadline, date) => {
    const interval = setInterval(() => {
        console.log(`Дата: ${date.toLocaleDateString('ru-RU', dateOptions)}`);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло!')
    }, deadline * 1000)
};

timer(30, new Date());

//Задание 4
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000)

}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

//Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
         if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))


