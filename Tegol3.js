//Task 3 :
const numbers = [0, 1, 2, 233, 3, 0, 4, 5, 43, 6,0,0];
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) 
{
    zeroCount += (numbers[i] === 0) * 1;
}

console.log(`The number of zeros is: ${zeroCount}`);