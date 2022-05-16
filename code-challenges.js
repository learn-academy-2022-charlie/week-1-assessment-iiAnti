// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// __________________________________________________________________________
		// alright, so I started with a const of sweet
			// I then created two strings which I named tasty and gross, because let's be honest, some are not good.
		// I then followed it by a condition ( if ,else if, else) that needed to be met which you can see here would either be defined by the " < > " symbols.
			// this was followed a a .length afterwards to define how long the values were
		// if the .length of the fruit was > than it is deemed tasty and if it < then it is deemed not tasty.
			// if it was nether one of the given anwsers, then we would give out that I don't your taste buds.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


 	

		const sweet = (tasty, gross) => {
			if (tasty.length > gross.length) {
				return `This ${tasty} is good`
					} else if(tasty.length < gross.length){
					return `This ${gross} is not good`
				} else{
						return "idk your taste buds"
					}
				}

					console.log(sweet(fruit1, fruit2))
					console.log(sweet(fruit3, fruit4))
					console.log(sweet(fruit4, fruit4))
					
							


							// console.log(ya, eh) this is my failed ex.


		// I had trouble defining the else. I couldn't get it to show. I kept getting the error code in terminal.
			// I looked around a little for a bit. didn't find much, but then I erased the failed log that I commented out right above, and switched one of them to the same const, and it worked! 
// __________________________________________________________________________



// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// __________________________________________________________________________
		// I had complications with this one, so I hope I did it right
			// I added a const of heat and gave it a string of high.
		// I first started off with the < > symbols which was a bust, so I went to the syllabus and scrolled till I found a useful section. The roller coaster one.
			// this helped lead the way to this code. 
		// I the labeled it all with a === sign compared to the heat of the water.
			// if it was too hot or cold, it would label it. and same if it was right, it says it's the right temp.
		 // I now added a fourth condition which tells if you can't cook depending on the number. 


const temp1 = 42
const temp2 = 350
const temp3 = 212




		const heat = (high) => {
				if(high === temp1) {
			    return `${temp1} is below boiling point`
					} else if(high === temp3) {
			    		return `${temp3} is at boiling point`
					  }
					  else if(high === temp2){
					    return `${temp2} is above boiling point`
					  } else{
					  	return "You don't know how to cook"
					  }
					} 

					console.log(heat(temp1))
					console.log(heat(temp2))
					console.log(heat(temp3))
					console.log(heat(500))






	// I'm not sure if I was supposed to put a number in the parameters. I get confused with some questions. So I think where I put the 500 is correct, but if not, help?

// ______________________________________________________________________________









// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// _________________________________________________________________


// This one was simpler for me. I input everything into a console.log.
	// after, I combined both const with a .concat accessor which is what adds two arrays together.
// I then added the second const in the parameters of the .concat .
	// to finish I added the .length property to end  to define the amount of number in the array after joining them.

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]


				
			console.log(myNumbers1.concat(myNumbers2).length)



	// I did have to look at the syllabus to see where the .length went in the code. I also kept adding () at the end of it which is also what lept breaking it till I read the syllabus.


// __________________________________________________________________________






// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

// _________________________________________________________________________

// started off looking at the const
	// then it took many tries (explain at the bottom of this code) but figured out the code and started with a new function
// the function split the string with .split witch turns them into arrays
	// then I reversed the order with .reverse() which is a mutator
// finished it off with .join() which turns it back from an array
	// now you console.log the outcome with the no function of rev

const currentCohort = "Charlie 2022"

		
					

					const rev = currentCohort.split('').reverse().join('');

							console.log(rev)



// I tried a couple of functions including the one right here.
	// nothing worked for a while. I was thinking too simplicity
//  used both the syllabus and google for help
	// google helped with the coding. Had to go through about 3 articles.
//  the syllabus helped with understanding  Arrays meant and why I used them there. It also helped me remember that they were called arrays.


//         let revCur = currentCohort.reverse();
					
					// console.log(currentCohort);


// ______________________________________________________________________



// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"


// first put in a loop function. this will allow for the code to run up to the number specified in the declaration.
	// follow with the i (or whatever you please) this first part is tp tell it where to start.
// the secodn part is to tell it where it stops
	 // the third part is to tell it how it is going to get there
// follow by a condition "if" to determine if soemthing is even or odd
	// use the declaration followed by the choice of "let" you used ect. i 
// use modulo (%) 2 and make it strictly (===) equal to 0 to see if it is odd or evenly divided. (if there is a remainder ever, it means it is odd.)
	// console.log even and then else with an odd.




const myArray = [13, 34, 5, 10, 27, 42]
					

					for(let i = 0; i <= myArray.length; i++){
						 if(myArray[i] % 2 === 0){
						console.log("even")
					} else {
						console.log("odd")
					}
					}
				

					


// Oh my gosh. I had so much trouble with this one for some reason. I did it with ease in the partner assignments. but I forgot what the code for it was. I searched through the syllabus, google, and past assignments because I was so confused. I couldn't find anything for so long. Even on google. so I skipped the question and went on to work on the next one which came a little easier to me and boosted my confidence again. I came back to this question and finally found the help for this question on both google and the syllabus.

// One of my biggest problems is remembering. But I do know one thing, I never give up.






// ______________________________________________________________________


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3



// Start with a new set of declaration (had to search what the const was again)
	 //name it as you wish. make two of them and in the first one "num1" add the larger numbers.
 // add a second one "nu2" but this time with the less numbers.
 	// Now made a function with the two new declarations with a return.
 // subtract nu1 from in the return 
  // at the end console.log the new function with the new declarations in the ()




// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

		const nu1 = (number2 , number3)
		const nu2 = (number1, number4)
					
					const subt = (nu1 , nu2) => {
						return nu1 - nu2
					}

				console.log(subt(number2, number1))
				console.log(subt(number3, number4))





// thankfully this one was quicker for me. I was a little confused on how I would form the code.
 // I went to the syllabus in the Function section and found the area in the Multiple parameters section on how the code may be coded
//  followed those steps and it led me to success.








