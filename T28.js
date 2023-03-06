
// function Person (){
// 	this.name = "Virat"
// 	this.skill = 'Singing'
// }


// let p1 = new Person();
// let p2 = new Person();

// var skill = 100

// Person.prototype.age  = 40

// Person.prototype.details = function() { return this.skill } 


// console.log(p1.details())


// let div1  = document.getElementById('div1')
// let btn  = document.getElementById('btn')

// btn.addEventListener('click', function(e) {
// 	e.stopPropagation();
// 	alert('You clicked on the Button')

// }, true)




// div1.addEventListener('click', function(e) {
// 	alert('You clicked on the Division111111111')

// }, {captrue:true})


function factorial(x) 
{ 
  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
}


	// 5
	// 	5 * factorial(5-1)							5 * 24 = 120  
	// 			4 * factorial(4-1)					4 * 6 = 24  
	// 				3 * factorial(3-1)				3 * 2 = 6  
	// 					2 * factorial(2-1)		    2 * 1 = 2  
	// 						1 * factorial(1-1)	    1 * 1 = 1    
	// 							1 					1


console.log(factorial(5));


