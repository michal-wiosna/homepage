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
emptyParagraph.innerHTML = `Uzupełnienie treści JavaScriptem`;


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