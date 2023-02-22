/*

Anything that has Propertes and Values for those properties as key value pair ==> Object
The order of these properties cannot be reveresed, there is no order

*/


let student = {
	first_name : 'Sachin',
	last_name : 'Tendulkar',
	age: 21.5,
	skills: ['HTML', 'CSS', 'JS', 'Node', 'Express', 'React', 'Mongo'],
	full_name: function(){
		return this.first_name + ' ' + this.last_name
		}
	}

//console.log(student)
//console.log(student.last_name)
//console.log(student['last_name'])

//console.log(Object.values(student))



