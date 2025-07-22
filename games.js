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