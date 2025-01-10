//************* Q1 *******************//
//for :
let input1 = [1, 2, 3];
function ArrayFunctionFor(input1) {
    let result = [];
    for (let i = 0; i < input1.length; i++) {
        result.push(Math.pow(2, input1[i]))
    }
    return result;

}
console.log(ArrayFunctionFor(input1));


//for each :
let input2 = [1, 2, 3];
function ArrayFunctionForEach(input2) {
    let result = [];

    function calc(num) {
        result.push(2 ** num);
    }
    input2.forEach(calc);

    return result;
}
console.log(ArrayFunctionForEach(input2));

//map :
let input3 = [1, 2, 3];
function ArrayFunctionForEach(input3) {
    function calc(num) {
        return 2 ** num;
    }
    let result = input3.map(calc);
    return result;
}
console.log(ArrayFunctionForEach(input3));

//************* Q2 *******************//
let originalArray = [1, 2, 3, "ghofran"];
let newArray = originalArray.map(num => {
    if (typeof num !== 'number') {

        return 'N/A';
    }
    else if (num % 2 == 0) {

        return 'even';
    }
    else {

        return 'odd';
    }

});
console.log(newArray);

//************* Q3 *******************//
let arrayBefor = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
let arrayAfter = [];

arrayBefor.forEach(name => {
    arrayAfter.push(name);
});
console.log(arrayAfter);

//************* Q4 *******************//
function fizzbuzz() {
    let arr = [1, 3, 5, 10, 15, 20, 30, 33, 50];
    let arrResult = [];

    arr.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
     arrResult.push(num + " " + " Fizz Buzz");
    }
    else if (num % 3 === 0) {
    arrResult.push(num + " " + " Fizz");
    }
    else if (num % 5 === 0) {
    arrResult.push(num + " " + " Buzz");
    }
    else {
    arrResult.push(num);
    }
                      });
    return arrResult;
}
console.log(fizzbuzz());

