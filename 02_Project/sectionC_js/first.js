// clouser
let city = "jaipur"
function one() {
    let name = "hello"
    function two() {
        let age = 23
        console.log(`${name} ! city is ${city}`);

    }
    return two;
    //    console.log(city);

}
// two() give error not defined
//  let first = one()
// first()

// array function

let sum = [];
function takeArr(arr) {
    for (const element of arr) {
        
        isPrime = false;
        for (let i = 2; i < element; i++) {
            if (element % i == 0) {
                isPrime = true;
                break;
            }
        }
        if (!isPrime) {
            // primes.push(i)
            sum.push(element)
        }
    }
    let calculate = sum.reduce((total, val) => total + val)
    console.log(calculate);


}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13]
takeArr(myArray)


let str = 'daed'
let valu = '';
let val1 = ''
function checkAnotherStr(str) {
    for (let i = 0; i < str.length; i++) {
        valu += str.charAt(i)
    }

    for (let i = str.length; i >= 0; i--) {
        val1 += str.charAt(i)

    }
    if (val1 == valu) {
        console.log("this is a  palindrome string");

    } else {
        console.log('this is not a palindrome string');

    }
}
// checkAnotherStr("mad")







//sufle array

function suffle(arr) {

    for (let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i));

        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

const time = suffle([1, 2, 3, 4])
console.log(time);

// console.log(newa);


