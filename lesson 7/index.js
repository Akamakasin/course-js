// let sum;
// const numberOfElements = 10;
// for (let i = 1; i < numberOfElements; i += 1) {
//     debugger;
//     sum += i;
// }
// const theHalOfSum = sum / 2;
// console.log("theHalOfSum", theHalOfSum);


// Задание 1

// let health = Number(prompt('Введите число параметра "здоровье" для персонажа'));
// console.log(health);
 
// if (health <= 0 || isNaN(health)) {
//    alert('Параметр "здоровье" должен быть больше нуля!');
//    console.log(health);
// } else {
//    alert(`Параметр "здоровье" равен ${health}`);
// };

// Задание 2

// const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));
// console.log(temperatureInCelsius);
// if (temperatureInCelsius === 0) {
//    console.log(temperatureInCelsius);
//    alert('0 градусов по Цельсию - это температура замерзания воды')
// } else if (temperatureInCelsius > 0) {
//    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
//    console.log(temperatureInCelsius);
// }
 
// const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
// alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);

// Задание 3

// const salaryOfJuniorDeveloper = 500;
// const numberOfJuniorDevelopers = 3;
// let taxPercentage = 13;
// let totalJuniorDevelopersSalary;
 
// for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
//     console.log(i)
// const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
// console.log(salaryWithTax);
// totalJuniorDevelopersSalary += salaryWithTax;
// }
// console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 2;
 
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    console.log(i)
const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
console.log(salaryWithTax);
totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);