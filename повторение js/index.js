// let question1 = confirm("JavaScript появился в 1995 году?");
//  if (question1 === true) { 
//     alert("Верно");
//  } else {
//     alert("JavaScript появился в 1995 году.");
//  }

// let maxCarSpeed = 150;
// console.log("У машины изменилась скорость", maxCarSpeed = 160)

// const myName = "Максим";
// const programmingLanguage = "JavaScript";
// const courseCreatorName = "Владилен";
// const reasonText = "Деньги";
// const numberOfMonth = "0";

// let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
// Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`;

// console.log((myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())));
// console.log(myInfoText.length);
// console.log(myInfoText.length - 1);
// console.log(myInfoText[0], myInfoText[256]);

// let userName = prompt("Как вас зовут?").trim().toLowerCase();
// let userAge = +prompt("Сколько вам лет?").trim();
// console.log(typeof userAge, userAge);
// alert(`Вас зовут ${userName} и вам ${userAge} лет`);

let userString = prompt("Введите текст для обрезки").trim();
let startSliceIndex = +prompt("Введите индекс, с которого нужно начать обрезку строки").trim();
let endSliceIndex = +prompt("Введите индекс, которым нужно закончить обрезку строки").trim();

let string = userString.substring(startSliceIndex, endSliceIndex);
console.log(string);