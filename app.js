// Класна робота - Завдання - переписати гру "Шибениця" пiд синтаксис ES6 там де це можливо. 

const game = (words) => {

    const word = words[Math.floor(Math.random() * words.length)];
    
    let answerArray = [];

    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    let remainingLetters = word.length;

    while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    
    const guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            }
        }
      
    }
}
    alert(answerArray.join(" "));
    alert(`Отлично! Было загадано слово ${word}`);
}

game(["программа", "макака", "прекрасный", "оладушек"]);






// Домашня робота


// Реалізувати функцію для створення об'єкта "Користувач".
// Написати функцію createNewUser (), яка буде створювати і повертати об'єкт newUser. 
// При виклику функція повинна запитати у абонента ім'я та прізвище. Використовуючи дані, введені користувачем, створитиоб'єкт newUser з властивостями firstName і lastName. 
// Додати в об'єкт newUser метод getLogin (), який буде повертати першу букву імені користувача, з'єднану з прізвищем користувача, все в нижньому регістрі (наприклад, Ivan Kravchenko → ikravchenko). 
// Створити користувача за допомогою функції create New User (). Викликати у користувача функцію getLogin (). Вивести в консоль результат виконання функції.


function CreateNewUser() {

    let firstName = prompt('Введіть ім`я');
    let lastName = prompt('Введіть прізвище');
    let birthday = prompt('Введіть дату народження', 'Введіть, будь ласка, дату в такому вигляді - dd.mm.yyyy');
    
    const outputDate = `${firstName} ${lastName} ${birthday}`;
    console.log(outputDate);

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
}

CreateNewUser.prototype.getLogin = function () {
    return this.firstName[0].toLowerCase() + this.lastName.slice(1);
};


// Доповнити функцію create New User () методами підрахунку віку користувача і його паролем.
// Візьміть виконане завдання вище (створена вами функція createNewUser ()) і доповніть її наступним функціоналом: при виклику функція повинна запитати у викликає дату народження (текст у форматі dd.mm.yyyy) і зберегти її в поле birthday. 
// Створити метод getAge () який буде повертати скільки користувачеві років. 
// Створити метод getPassword (), який буде повертати першу букву імені користувача у верхньому регістрі, з'єднану з прізвищем (в нижньому регістрі) і роком народження. (наприклад, Ivan Kravchenko 13.03.1992 → Ikravchenko1992). 
// Вивести в консоль результат роботи функції createNewUser (), а також функції getAge() і getPassword () створеного об'єкта.


CreateNewUser.prototype.getAge = function () {
    const day = this.birthday.slice(0, 2);
    const month = this.birthday.slice(3, 5);
    const year = this.birthday.slice(6, 10);
    const date = new Date(year, month, day);
    return new Date().getFullYear() - date.getFullYear();
}

CreateNewUser.prototype.getPassword = function () {
    return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + newUser.getAge();
}


let newUser = new CreateNewUser();

console.log(newUser.getLogin());

console.log(newUser.getAge());

console.log(newUser.getPassword());



// Реалізувати функцію фільтра масиву за вказаним типом даних.
// Написати функцію filter By (), яка буде приймати в себе 2 аргументи. 
// Перший аргумент-масив, який буде містити в собі будь - які дані, другий аргумент-тип даних. 
// Функція повинна повернути новий масив, який буде містити в собі всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом. 
//Тобто, якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].


function filterBy(array, type) {
    let newArr = [];

    array.forEach((elem) => { 
        if (typeof elem != type) {  
            newArr.push(elem);
        }
    });


    return console.log(newArr);
}

filterBy(['hello', 'world', 23, '23', null], 'string');