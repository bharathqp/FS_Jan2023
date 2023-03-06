
















// 					return a + c + e + z
// 				return function(e){
// 				}
// 			let z = 90
// 			return function(c){
// 			}
// 		}
// 	console.log(a+b)
// 	console.log(x)
// 	console.log(x)
// 	x = 30
// //let x = 20
// add (x, y)
// console.log(x(10)(20)(30))
// console.log(x)
// function add(a, b){
// function yyy(x) 
// let x = 200
// let x = function (a){
// var x = 30
// x = 30
// y = 30
// yyy(x)
// {
// }
// }
//Currying
//Hoisiting
//Scope
// `It is technique of evaluating the
// console.log(x)
// console.log(y)
// function with multiple arguments into 
// let x = ['x','p','g','l','a']
// let y = x
// sequence of function with a single argument`
// x = ['1','2','8','3','0']


// call, bind and apply.


let person1 = {
	first_name:'Sachin',
	last_name: 'Tendulakr'
}

let person2 = {
	first_name:'Virat',
	last_name: 'Kohli'
}



let person = {
	first_name : "sadsa",
	last_name : "sdasad",
	full_name:function (age, skill) {
				return `Hi My name is ${this.first_name} ${this.last_name}, I am ${age} years old, and I am good at ${skill}.`
			 }
	}

console.log(person.full_name.call(person1, 40, 'Batting'))
console.log(person.full_name.apply(person2, [32, 'Batting']))

let x = person.full_name.bind(person1)
console.log(x())






