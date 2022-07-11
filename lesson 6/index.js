// example 1

// const existedUserLogin  = "the_best_user";
// const existedUserPassword = "12345678";

// let userLogin = prompt("Введите логин").trim();
// let userPassword = prompt("Введите пароль").trim();

// if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
//     alert("Добро пожаловать, the_best_user!");
// } else {
//     alert("Логин и (или) Пароль введены неверно!");
// }

// example 2

// Код из задания, для переделки.

// for (let i = 0; i < 3; i += 1) {
//     let newStudent = prompt("Введите имя нового студента!");
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`)
//     }
//  }


// let i = 0;
// while (i < 3) {
    // let newStudent = prompt("Введите имя нового студента!").trim();
//     i +=1;
//     alert(`Добро пожаловать, ${newStudent}!`);
// };

// do {
    // let newStudent = prompt("Введите имя нового студента!").trim();
//     i +=1;
//     alert(`Добро пожаловать, ${newStudent}!`)
// } while (i < 3);

// example 3

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
//     alert(sum);

// example 4

// let question1 = +prompt("Сколько будет 2 + 2?").trim();
// let answer1 = 4;
// let correctAnswers = 0;
// let incorrectAnswers = 0;

// if (question1 === answer1) {
//     alert("Ответ Верный");
//     correctAnswers++;
// } else {
//     alert("Ответ Неверный");
//     ++incorrectAnswers;
// }

// let question2 = +prompt("Сколько будет 2 * 2?").trim();
// let answer2 = 4;

// if (question2 === answer2) {
//     alert("Ответ Верный");
//     correctAnswers++;
// } else {
//     alert("Ответ Неверный");
//     ++incorrectAnswers;
// }

// let question3 = +prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?").trim();
// let answer3 = 1;

// if (question3 === answer3) {
//     alert("Ответ Верный");
//     correctAnswers++;
// } else {
//     alert("Ответ Неверный");
//     ++incorrectAnswers;
// }

// let question4 = +prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?").trim();
// let answer4 = 12;

// if (question4 === answer4) {
//     alert("Ответ Верный");
//     correctAnswers++;
// } else {
//     alert("Ответ Неверный");
//     ++incorrectAnswers;
// }

// let question5 = +prompt("Сколько будет 2 + 2 * 2?").trim();
// let answer5 = 6;

// if (question5 === answer5) {
//     alert("Ответ Верный");
//     correctAnswers++;
// } else {
//     alert("Ответ Неверный");
//     ++incorrectAnswers;
// }
// alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);

// example 5

// let clientName  = "Игорь";
// let clientSpentForAllTime = 110;
// let clientSpentToday = 25;

// if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
//     let discount = "10%";
//     clientSpentToday = clientSpentToday - (clientSpentToday * 0.1);
//     alert(`Вам предоставляется скидка в ${discount}`);
//     clientSpentForAllTime = 110 + clientSpentToday;
//     alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
// } else if (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500) {
//     let discount = "20%";
//     clientSpentToday = clientSpentToday - (clientSpentToday * 0.2);
//     alert(`Вам предоставляется скидка в ${discount}`);
//     clientSpentForAllTime = 110 + clientSpentToday;
//     alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
// } else if (clientSpentForAllTime > 500) {
//     let discount = "30%";
//     clientSpentToday = clientSpentToday - (clientSpentToday * 0.3);
//     alert(`Вам предоставляется скидка в ${discount}`);
//     clientSpentForAllTime = 110 + clientSpentToday;
//     alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
// }

// example 6

// let clientName = prompt("Введите имя клиента").trim();
// let clientSpentToday  = Number(prompt("Сколько клиент потратил сегодня?").trim());
// let clientSpentForAllTime  = Number(prompt("Сколько клиент потратил за все время?").trim());
// let discount = 0;

// if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
//     discount = 10
// } else if (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500) {
//     discount = 20
// } else if (clientSpentForAllTime > 500) {
//     discount = 30 
// }

// clientSpentToday = clientSpentToday - clientSpentToday * discount / 100;

// clientSpentForAllTime = clientSpentForAllTime + clientSpentToday;

// if ( isNaN(clientSpentToday) || isNaN(clientSpentForAllTime) ) {
//     alert("Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.")
//     location = location
// } else {
//     alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
// };

// Дополнительное задание

let userPassword = prompt("Введите пароль");
let ValidPassword = /^(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9]{3,20})$/;

if (userPassword = ValidPassword.test(userPassword)) {
    alert("Пароль валидный. Добро пожаловать в аккаунт!")
} else {
    alert("Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.")
};

