// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer:indigo will permanently be added to the array
// b) Verify and explain: I was wrong because the console.log shows the amount after you added .push("indigo"). as it says in the syllabus "The output of the method itself is the length of the new array"-syllabus if it would have added the name to the array it would have to be console.log(colors)



// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer:10
// b) Verify and explain: .length takes whatever you are giving it and counts the number of letters including spaces taken.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain: adding a number in the brackets tells the console to look for the fourth index in the string which is o because it starts at 0 (H).


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:javascript1
// b) Verify and explain:I was way wrong. Adding the a declaration with and index of 1, and adding it to the console with languages[index] tells it to look for whats at that position. I learned that too because I changed the number to ee what the other outputs would be. 


// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())


// a) Your answer: It will capitalize all the letters in the array 
// b) Verify and explain: It didn't work at all. got an error. You can't have the string in an array. I tried a few other codings and found that it wouldn't work with two strings. I could only have one. I looked at a few pages and saw that the all said it changed was the way it came out but not the actual value.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer:I think it will give an error. The typeof isn't in the right place
// b) Verify and explain: it logged "number". Looked up on google and it says typeof logs what value it is. So because we put typeof but followed it up with .length, the .length turned it into a number instead of an object. I also learned that when its in brackets like that, it's an object now and not a string because I tried different codes.
