const myName = "Максим";
const programmingLanguage = "JavaScript";
const courseCreatorName = "создателя данного курса";
const reasonText = "хочу много денЯг";
const numberOfMonth = 0;

let myInfoText = `${"Всем привет! Меня зовут,"} ${myName}${"."} ${"Сейчас я изучаю язык программирования"} ${programmingLanguage} ${"на курсе по"} ${programmingLanguage} ${"у"} ${courseCreatorName}${"."}
${"Я хочу стать веб-разработчиком, потому что"} ${reasonText}${"."} ${"До этого я изучал"} ${programmingLanguage} ${numberOfMonth } ${"месяцев. Я уверен, что пройду данный курс до конца!"}`

console.log(myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase()));

console.log(myInfoText.length);

console.log(myInfoText[0], myInfoText[274]);