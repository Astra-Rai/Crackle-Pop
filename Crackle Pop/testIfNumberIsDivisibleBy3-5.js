/*Note: Test Numbers 1 - 15 since this range has an output of: crackle, pop, crackle pop
Numbers divisible by 3 between 1 and 15: 3,6,9,12,15 (output: "crackle")
Numbers divisible by 5 between 1 and 15: 5, 10, 15   (output: "pop")
Numbers dividsibel by 3 and 5 between 1 and 15: 15   (output: "crackle pop")
Others numbers: 1,2,4,7,8,11,13,14 (output: "__ is not divisible for 3 or 5)
Use % operator to test for remainder
*/

/* Start Test: Check If Number Entered is Divisible: 3, 5 and or by 3 and 5 */

function three(num) {
    
    if(num % 3 === 0){
        console.log("crackle");    
    }
}

three(3);

function five(num) {
    
    if(num % 5 === 0){
        console.log("pop");    
    }
}
five(5);

function threeAndFive(num){
    if (num % 3 === 0 && num % 5 ===0){
        console.log("crackle pop")
    }
}

threeAndFive(15)

function notThreeOrFive(num){
    if (num % 3 != 0 && num % 5 !=0){

        console.log(`${num} is not divisible by 3 or 5`);
        /*console.log("Number Entered is Not Divisible by 3 or 5"), use tepmplate literals instead*/
    }
}
notThreeOrFive(15)

/* End Test: Check If Number Entered is Divisible: 3, 5 and or by 3 and 5 */
