// We are creating a resolution to secure the vault. 
// You are building a vault that requires three mathematical calculations to generate the three codes in a combination.
// Use the JavaScript console or the script block within an HTML page to create three variables. 
// Each variable will be the result of each calculation (three in total). 
// The combination of the lock is 10 - 40 - 39. You must use three different arithmetic operators that will generate each individual number, then display the combination on the HTML page, or in an alert popup.

// STEPS TO COMPLETE 
// 1. Create a index.js file within block07 Folder.
// 2. Create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
// 3. Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/). Each must equal one of the three codes in the combination.


//STEP 1 & 2:
var PromptText = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

console.log(PromptText)

// var myName = getUserName()

// alertSubscriber(myName)
// subscribeToChannel(myName)
// leaveComment(myName)



// These are the three different variables using different Arithemtic operators
const X = 5+5
const Y = 50-10
const Z = 78/2

//This is the pop up dialogue that was asked to be created.
alert(PromptText + "is 10 - 40 - 39");





