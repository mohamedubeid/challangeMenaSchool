/**
 * JSON.stringify()
Docs=>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
JSON.parse()
Docs=>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

*/
/*

function Stringify(params) {
    //TODO:
}

function parseMe(str) {
    //TODO
}


let obj={Stringify,parseMe};

module.exports = obj;
*/
/*let obj = {a:200,b:300,c:"ahmed"}

let str =JSON.stringify(obj)

console.log(typeof str)
console.log(str)*/

const obj1 = {name: "John", age: 30, city: "New York", date: new Date()};
const myJSON = JSON.stringify(obj1);

console.log(myJSON);

