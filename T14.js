// Higher Order Function
// 	These are the functions which can
// 		1. Take another function as an argument or
// 		2. return a function


function prints(data){
	console.log("Output is = ", data)
}



function square(data){
	let sqr = data * data
	console.log("Square of the Output is = ", sqr)
}


function sqrt(num){
	return num ** 0.5
}



function add(a, b, callback){

	console.log(a, b, callback)
	let sum = a + b
	callback(sum)
}

//add(10, 20, prints)
// add(20, sqrt(64), square)
// add(20, sqrt(64), cube)
// add(20, sqrt(64), multiply_10)





function prints1(){

	return 'Junk'
}




function some(){
	return [sqrt, prints]
}

console.log(some()[(16),(16)])



