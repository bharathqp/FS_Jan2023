//Function is a reusable block of code


// let x
// let y

// function func_a(a, b){

// 	let sum = a + b
// 	let mul = a * b
// 	let div = a / b

// 	let out = []
// 	out.push(sum)
// 	out.push(mul)
// 	out.push(div)
// 	return out
// }

// y = func_a(10, 20, 213, 243, 234, 423)

// console.log(y)


function func_b()
{

	for (let val of arguments)
	{
		console.log("The value is ", val)
	}

}

func_b(10)