/*Note: Test Numbers 1 - 15 since this range has an output of: crackle, pop, crackle pop
Numbers divisible by 3 between 1 and 15: 3,6,9,12,15 (output: "crackle")
Numbers divisible by 5 between 1 and 15: 5, 10, 15   (output: "pop")
Numbers dividsibel by 3 and 5 between 1 and 15: 15   (output: "crackle pop")
Others numbers: 1,2,4,7,8,11,13,14 (output: "__ is not divisible for 3 or 5)
Use % operator to test for remainder
*/

/* Start: Test Number Range Entered by User */
function testNumberRange(num) {
    if(num > 0 && num <=15 ) {
        console.log(`Number enter is ${num}`)
        console.log(`Number eneter is between 1 and 15`);

    } else {
        console.log(`Please enter a number between 1 and 15`);
        console.log(`${num} is not between 1 and 15`); //note: if this is an input field, how to clear? 
        // when user starts typing again in input filed, clicks inside input field, or presses enter?
    }
}
testNumberRange(15);

/* End: Test Number Range Entered by User */
/* Test Start: Check If Number Entered is Divisible: 3, 5 and or by 3 and 5 */