// Q7 . Given an array of numbers, calculate the sum of numbers within that array.

function  arraySum (arr) {

    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }

    return sum;
}


let ages = [18 ,22, 24 , 28 ,32,24, 23, 25]

arraySum(ages);







// Es6 method


const  calcArray =(arr) => arr.reduce((accum , currentValue ) => accum + currentValue);


calcArray(ages)