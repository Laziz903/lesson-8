let arr1 = [10.45, 9.519, 85.56, 22, 6.26, 98.245, 15, 34.2];

let min = Math.round(Math.min(...arr1));
console.log(min);


let max = Math.ceil(Math.max(...arr1));
console.log(max);


let result = max % min;
console.log(result);



let num1 = 10.4568313123132;


let numStr = num1.toFixed(3);
console.log(numStr);

let length = numStr.length;
console.log(length);

let numInt = Math.floor(Number(numStr));
console.log(numInt);


