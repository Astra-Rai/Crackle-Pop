/* 

random thought: html form, input field. use validation if field is empty and user 


function isStringEmpty(num) {
    if(num === undefined || num == null || num.length <= 0){
        return "Please enter a number"
    }
}

isStringEmpty("aaa");
*/


/*
- if string's length is equal to zero, string is empty. Use length property to check
- null, undefined, or blank variable in JavaScript
- isNAN method.

- Stack Overflow: if value  null, value.length less than zero
-

to get a string that contains only numbers, w3 resource 

function test(num){
 const regex = /^[0-9]+$/;
        
        if(num.value.match(regex)){
            console.log("number accepted")
        } else {
            console.log(`${num} is not a number please enter a number.`);
        }
}
test(4);

*/