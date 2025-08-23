//Первое задание
document.querySelector(".buttonOne").addEventListener('click',
    function () {
        const title = document.querySelector(".firstTitle");
        const button = document.querySelector('.buttonOne');

        if(button.textContent === 'Скрыть'){
            button.textContent = 'Показать';
            title.style.display = 'none';
        }else{
              button.textContent = 'Скрыть';
            title.style.display = 'block';
        }

    })

//Второе задание
document.querySelector('.buttonTwo').addEventListener('click',
    function() {
        const text = document.querySelector('.secondText');
        text.style.color = 'blue';
    }
)

//Третье задание
document.querySelector('.buttonThree').addEventListener('click',
    function() {
        const text = document.querySelector('.thirdTitle');
        text.textContent = 'Привет, мир!';
    }
)



//Четвёртое задание
document.querySelector('.buttonFour').addEventListener('click',
    function() {
        const textElements = document.querySelectorAll('.description');
        textElements.forEach(element => {
            element.textContent = 'Изменённый текст'
        });
    }
)

//Пятое задание
document.querySelector('.buttonFive').addEventListener('click',
    function() {
        const textElements = document.querySelectorAll('.description');
        textElements.forEach(element => {
            element.textContent = 'Новый текст'
        });
    }
)

//Шестое задание
document.querySelector('.buttonSix').addEventListener('click',
    function() {
        const newP = document.createElement('p');
        newP.textContent = 'Новый абзац';
        document.body.appendChild(newP);

    }
)


//Седьмое задание
document.querySelector('.buttonSeven').addEventListener('click',
    function() {
      const removeElement = document.querySelector('.description');
      removeElement.remove();

    }
)