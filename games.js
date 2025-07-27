

document.getElementById('game-1').addEventListener('click',
    function () {
        let randomNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
        let userNumber;
        while (true) {
            userNumber = prompt("Угадайте загадонное число!");

            // Если пользователь нажал "Отмена", выходим из цикла
            if (userNumber === null) {
                alert('Игра окончена.');
                break;
            }

            userNumber = Number(userNumber);

            if (userNumber === randomNumber) {
                alert('Вы угадали! Игра окончена.');
                break;
            } else if (userNumber > randomNumber) {
                alert('Задуманное число меньше введённого!');
                continue;
            } else {
                alert('Задуманное число больше введённого!');
                continue;
            }
        }
    }
)


document.getElementById('game-2').addEventListener('click',
    function () {


        const operators = ['+', '-', '*', '/'];
        let num1 = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
        let num2 = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
        let numberOfOperator = Math.floor(Math.random() * 4); // Случайное число от 0 до 3 
        let resultOfOperation;

        switch (numberOfOperator) {
            case 0:
                resultOfOperation = num1 + num2;
                console.log(resultOfOperation);
                break;
            case 1:
                resultOfOperation = num1 - num2;
                console.log(resultOfOperation);
                break;
            case 2:
                resultOfOperation = num1 * num2;
                console.log(resultOfOperation);
                break;
            case 3:
                resultOfOperation = Math.floor(num1 / num2);
                console.log(resultOfOperation);
                break;
        }

        while (true) {
            userResult = prompt(`Решите задачу ${num1 + " " + operators[numberOfOperator] + " " + num2 + (operators[numberOfOperator] === '/' ? ' (дробную часть не учитывать)' : '')} и введите ответ: `);

            // Если пользователь нажал "Отмена", выходим из цикла
            if (userResult === null) {
                alert('Игра окончена.');
                break;
            }

            userResult = Number(userResult);

            if (userResult == resultOfOperation) {
                alert("Верный ответ! Игра окончена!")
                break;
            } else {
                alert("Ответ неверный! Попробуйте ещё раз!")
            }

        }



    }
)


document.getElementById('game-3').addEventListener('click',
    function () {
        let userSting, resultString;
        while (true) {
            userSting = prompt("Введите текст, который будет перевёрнут.");

            // Если пользователь нажал "Отмена", выходим из цикла
            if (userSting === null) {
                alert('Игра окончена.');
                break;
            }

            resultString = userSting.split("").reverse().join("");
            alert(`Перевернутый текст: ${resultString}`);

        }
    }
)


const quiz = [
    {
        question: "Какого цвета небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

document.getElementById('game-5').addEventListener('click',
    function () {
        let userAnswer, count=0 ;
        for (let i = 0; i < quiz.length; i++) {
             userAnswer = prompt(` ${quiz[i].question}\n Варианты ответов: ${quiz[i].options.join("; ")}`);

            // Если пользователь нажал "Отмена", выходим из цикла
            if (userAnswer === null) {
                alert('Игра окончена.');
                break;
            }

            userAnswer = Number(userAnswer);

            if(userAnswer === quiz[i].correctAnswer){
                count++;
            }

        }

        alert(`Количество правильных ответов: ${count}`);
    }
)





