let age = 26;

console.log(Number(age), Boolean(age), String(age));

let StrIng = "good";

console.log(Number(StrIng), Boolean(StrIng), String(StrIng));

let BoolEan = true;

console.log(Number(BoolEan), Boolean(BoolEan), String(BoolEan));

let nuLL = null;

console.log(Number(nuLL), Boolean(nuLL), String(nuLL));

let Undefined = undefined;

console.log(Number(Undefined), Boolean(Undefined), String(Undefined));

let Object = {
    number: 26,
    string: "good"
};

console.log(Number(Object), Boolean(Object), String(Object));

let BigInter = BigInt(100);

console.log(Number(BigInter), Boolean(BigInter), String(BigInter));

let SYmbol = Symbol("id");

console.log(/*Number(SYmbol),*/ Boolean(SYmbol), String(SYmbol));