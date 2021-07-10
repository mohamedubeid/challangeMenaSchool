/**Create a function that will reverse all the element inside a nested array

exp

[1,2,3,4] => [4,3,2,1]
[1,[2,3],4]=>[4,[3,2],1]
[9,[5,[10,30]],6]=> [6,[[30,10],5]9]
 
 */

function reverseNestedArray(array) {
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number') {
            array[i] + 1;
        }
    }
    return array;
};
a = [9,[5,[10,30]],6];

//console.log(a.indexOf([ 2,3]));

console.log(reverseNestedArray(a));
console.log(typeof array[0]);

module.exports = reverseNestedArray;

