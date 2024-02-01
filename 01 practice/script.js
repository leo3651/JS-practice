/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("jonas");

let firstName = "bob";
console.log(firstName);

let person="jonas";
let PI = 3.14159;

let myFirstJob = "programmer";
let myCurrentJob = "teacher";

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof (javaScriptIsFun))

javaScriptIsFun = "yes"
console.log(typeof (javaScriptIsFun))

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year)
console.log(typeof (null))

let age = 30;
age = 32;

const birthYear = 1991;
var job = "programmer";
job = "teacher";


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

const firstName = "jonas";
const lastName = "smit";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

console.log(ageJonas < ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge)

const firstName = "jonas";
const year = 2037;
const birthYear = 1991;
const job = "teacher"

const jonasNew = `i m ${firstName}, a ${year - birthYear} old ${job}`;
console.log(jonasNew);

console.log(`i'm leo`);
console.log("string with\n\multiple\n\lines");
console.log(`multiline 
string`) 
const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log(`Sarah can start driving lesons`)
} else {
    const yearsLeft = 18 - age;
    console.log(`not old enough wait for ${yearsLeft} years`)
}

const birthYear = 1991;
let century;
if(birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century)

const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(String(23), 23);


console.log("i'm " + 23 + " years old")
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 1;
if(money){
    console.log("Do not spend it all");
} else {
    console.log("you should get a job")
}

let height = 123;

if (height) {
    console.log("defined");
} else {
    console.log("not defined");
}

const age = "18";
if(age === 18) console.log("you became an adult (strict)");

if(age == 18) console.log("you became an adult (loose)");

const favourite = Number(prompt("What is your favourite number"));

console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
    console.log("cool number");
} else if (favourite === 7) {
    console.log("also cool number")
} else {
    console.log("not cool")
}

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`)
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`)
}

const hasDriverLicence = true;
const hasGoodVision = true;

console.log(hasDriverLicence && hasGoodVision);

const shouldDrive = hasDriverLicence && hasGoodVision;

if(shouldDrive) {
    console.log("sara can drice");
} else {
    console.log("someone else drive")
}

const isTired = false;
console.log(hasDriverLicence && hasGoodVision && isTired)

if(hasDriverLicence && hasDriverLicence && !isTired) {
    console.log("sara can drive");
} else {
    console.log("someone else drive")
}

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy");
} else if (scoreKoalas < scoreDolphins) {
    console.log("Dolphins win the trophy");
} else {
    console.log("Both win the trophy");
}


const day = "saturday";

switch(day){
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meet up");
        break;
    case "tuesday":
        console.log("prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("code examole");
        break;
    case "saturday":
    case "sunday":
        console.log("enjoy");
        break;
    default:
        console.log("not valid day");
        break;
}

if (day === "monday"){
    console.log("Plan course structure");
    console.log("Go to coding meet up");
} else if (day === "tuesday") {
    console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("code examole");
} else if (day === "saturday" || day === "sunday") {
    console.log("enjoy");
} else {
    console.log("not valid day")
}

const bill = 275;

let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
