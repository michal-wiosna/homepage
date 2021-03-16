const firstName = "Michal";
const age = "27";

console.log(firstName);
console.log(age);
//alert(
//  'Cześć! Witam Cię na mojej stronie szkoleniowej, którą tworzę podczas kursu "WTF Co ten Frontend'
//);

console.log(`Nazywam sie ${firstName} i mam  ${age} lat`);

const heading = document.querySelector(".main__heading--js");

heading.innerHTML = `Nazywam sie ${firstName} i mam  ${age} lat`;
// console.log(heading);

const emptyParagraph = document.querySelector(".main__about--me--js");
emptyParagraph.innerHTML = "Uzupełnienie treści JavaScriptem";


function calculate(myNumber) {
  console.log(`Otrzymalem ${myNumber}`);
  myNumber = myNumber * 7;
  return myNumber;
}
const myResult = calculate(10);
console.log(`A teraz otrzymalem ${myResult} po wykonaniu dzialania`);


function greet(age, firstName) {
  console.log(`Nazywam sie ${firstName} i mam  ${age} lat`);
}
greet(29, "Michwisn");


function calculate2(myNumber1) {
  myNumber1 = myNumber1 - 1;
  console.log(`Mamy ${myNumber1}`)
  return myNumber1;

}
const myNumber2 = calculate2(12) + 1;
console.log(`a teraz jest ${myNumber2}`)
 

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}
createContent(".main__about--me", 'lalalaalalalal');

function nowyKontent(znacznik, kontent) {
  const paragraph = document.querySelector(znacznik);
  paragraph.innerHTML = kontent;
}

nowyKontent(".main__about--me--js2", "Tekst wpisany poprzez funkcję 'nowyKontent' ")


function helloWorld(one) {
  console.log(`Witaj dobry czlowieku i ${one}`)

}
helloWorld("papa");

const calculateX = (myValue) => myValue*10
//myValue = 10;
const wynik = calculateX(9);
console.log(`Wynik działania 'calculateX' to ${wynik}`)

// obiektowość tydzień V, lekcja 4


const deathStar = {
  diameter: 12000,
  fire: (target) => {
    console.log(`${target} destroyed`)
  },
  isOperating: true,
  name: 'Death Star',
  levels: 357,
  population: 10000,
  isLighton: true,
  commander: {
    name: 'Darth Vader',
    age: 44,
  }
}

console.log(deathStar.name)
console.log(deathStar.commander.name)
deathStar.fire('Rebel ship')
console.log(deathStar['name'])

const myProperty = 'name'
const showMeProperty = (myProperty) => {
  console.log(`Twoja własność to ${myProperty} to ${deathStar[myProperty]}`)
}

showMeProperty('levels')


const humanOne = {
  name: 'Mrozu',
  age: 27,
  address: {
    street: 'Warszawska',
    city: 'Białystok',
  }
}

const humanTwo = {
  name: 'Stefan',
  age: 27,
  address: {
    street: humanOne.address.street,
    city: 'Białystok',
  } 
}

humanTwo.age = 35;
console.log(`Wiek drugiego gościa to ${humanTwo.age}`)

const humanThree = humanOne
console.log(humanThree)

humanThree.age = 44;
console.log(humanThree)

humanOne.address.street = 'Lipowa'
console.log(humanOne)
console.log(humanTwo)