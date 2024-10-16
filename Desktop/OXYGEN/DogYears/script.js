//my current age
const myAge = 32;

//early years variable
let earlyYears = 2;

earlyYears = earlyYears * 10.5;
console.log(`Dog years for the first 2 years: ${earlyYears}.`);

//setting a number 
let laterYears = myAge - 2;

//calculating the later years in dog years
laterYears *= 4;
console.log(`Dog years for the years after that: ${laterYears}.`);

//creating a variable to hold my human years in dog years
let myAgeInDogYears = earlyYears + laterYears;

//creating a variable for my name
const myName = 'Eva Sevillano'.toLowerCase();

//creating the console result in a readable way
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

