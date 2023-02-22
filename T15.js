let x = [1,2,3,66,77,88]
let countries = ['india', 'pakistan', 'usa', 'uae', 'uk']
let sum = 0

//let output = x.forEach((el)=> {sum += el})
//console.log(sum)

let output_sqr = countries.map((el)=> el.toUpperCase())

//console.log(output_sqr)
//console.log(countries) 
arr2
let output = x.filter((el)=> el%2 == 0)

function myFunc(intial, current, current_index, array) {
	console.log("intial, current, current_index, array", intial, current, current_index, array)
	return intial + current;
}


/* 
const numbers		 = [175, 50, 25];
let output_reducer   = numbers.reduce(myFunc);

console.log(output_reducer) 


let voters_list = [17, 19]

let output_every = voters_list.some((el)=> el>=18)

console.log(output_every)

 */