// Arrays

/* let array1 = Array()
let array2 = [1, 'abc'	, 2, 3.0]
let array3 = "India"
console.log('array1', array1)
console.log('array2', array2)
console.log('array3', array3.split(''))
let array2 = [100, 200, 300, 400, 500, 600, 800]
let x = "Good"
array2[2] = 2322	
x[2] = 'R'
console.log(x[2])


let array1 = Array(8).fill(0)
console.log(array1) */

let array1 = [1,2,3]
let array2 = [7,8,9,20]

let array3 = array1.concat(array2)
let array4 = 200

//console.log('array1', array1)
//console.log('array2', array2)
//console.log('array3', array3)


//console.log(Array.isArray(array4))


let array5 = ["India", "Pakistan", "SL", "USA", "UK", "AUS", "SA", "WI"]

//console.log(array5)
//console.log(array5.toString())

//console.log(array5.join())
//console.log(array5.join(' # '))

let output = array5.slice()
output = array5.slice(6, 10)


output.push("Canada")
output.push(9)
output.unshift("BANGALDESH")

/* let output_NEW = output
output_NEW.shift()
 */

// splice

//console.log(output)

output.splice(2,1,'India','Bhutan')
//console.log(output)


// How Create an Array
// How to Fill an Array
// How to Concatenate an Array
// How to stringify an Array

// How to add elemnts an Existing Array
	// Push, Unshift & Splice
	
// How to remove elemnts an Existing Array
	// Pop, Shift & Splice
	

/* let frontend = ["HTML", "CSS", "JS"]
let backend  = ["NodeJS", "ExpressJS"]
let databse  = ["MongoDB", "MySQL"]

let full_stack = [frontend, backend, databse]
full_stack = [["HTML", "CSS", "JS"], ["NodeJS", "ExpressJS"], ["MongoDB", "MySQL"]]
console.log(full_stack[1].length)


full_stack = [1, 2.0, true, ['a', 'b', 'c'], databse, null, undefined]

console.log(full_stack) */

// console.log(output)

// output.sort()

// console.log(output)

// output.reverse()

// console.log(output)

let x = prompt("Enter a word")

x = x.split('')
x.reverse()
x = x.join('')
console.log(x)

y = x.split('')
y.reverse()

x == y.join('') ? console.log("Its a palindrome!!") : console.log("Its not a palindrome!!")
