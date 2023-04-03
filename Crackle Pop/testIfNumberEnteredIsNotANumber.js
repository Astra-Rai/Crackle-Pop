function checkNumber(num){
    if(isNaN(num)){
        console.log(`${num} is not a number`)
    }  else {
        console.log(`${num} is a number`)
    }
}

checkNumber(8);
checkNumber(-2.8);
checkNumber('a');
checkNumber('#')

console.log(isNaN(2)) // returns false because 2 is a number
console.log(isNaN('a')) // returns 'true' because the letter 'a' is not a number
console.log(isNaN('$')) // returns 'true' because the letter 'a' is not a number

/*
isNAN() Stands for is not a number. 
If a variable is not a number returns true
If a variabe is a number, returns false
*/