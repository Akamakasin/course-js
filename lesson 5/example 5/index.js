const userString = prompt("Введите текст для обрезки").trim();
const startSliceIndex = Number(prompt("Введите индекс, с которого нужно начать обрезку строки"));
const endSliceIndex = Number(prompt("ВВведите индекс, которым нужно закончить обрезку строки"));

alert(`Результат: ${userString.substring(startSliceIndex, endSliceIndex)}`);


// example 6

const userText = prompt("Введите текст").trim();
const wordFromText = prompt("Введите слово из текста").trim();
const indexOfWord = (userText.indexOf(wordFromText));

alert(`Результат: ${userText.substring(0, indexOfWord)}`);


// Дополнительное задание

// const javaScriptDescription = ("JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.").length / 2; // Считаю середину строки

const javaScriptDescription = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."

const javaScriptHalf = javaScriptDescription.substring(0, 139);

const javaScriptReplacement = javaScriptHalf.replaceAll("а", "А");

const javaScriptSpace = (javaScriptReplacement.replaceAll(" ", "")).repeat(3);

const javaScriptMiddle = javaScriptSpace.length / 2;

const javaScriptOne = javaScriptSpace.substring(191, 192);

console.log(javaScriptOne);