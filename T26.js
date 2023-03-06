var x = 10
function some_func(){
	let x = 15
	console.log(x)
	console.log("The value of global x is", this.x)
}


some_func()

// this refers to global variable in case of functions in non-strict mode

// this refers the current object

// this refers to the type of the vent in case of events 