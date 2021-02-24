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
greet(28, "Michwisn");
