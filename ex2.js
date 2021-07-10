/**without using any kind of loops determine if an array contains an element N
in a nested array
example
array=[15,6,[5,1],[10,[20,[0]]]]
contains(array,0)=> return true

contains(array,-1)=> return false 

*/
function contains(arr, n) {
    if(typeof arr[i] === 'object'){
        return contains(arr[i],n);
    }
    if(arr[i] === n) {
        return true;
    }else if(arr[i] !== n) {
        return contains(arr - 1, n);
    }
}


a = [15,6,[5,1],[10,[20,[0]]]];
console.log([contains(a,5));