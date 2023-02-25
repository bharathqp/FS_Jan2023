/*

	Set is a unordered collection of unique elements.

*/


let y1 = ['Bangalore', 'Hyderabad', 'Delhi', 'Gangtok']
let y2 = ['Dispur', 'Patna', 'Panaji', 'Mumbai', 'Bangalore', 'Hyderabad']

let y1_set = new Set(y1)
let y2_set = new Set(y2)

let Y3 = y1.filter((el) => y2_set.has(el))
let Y4 = y2.filter((el) => !y1_set.has(el))

//console.log(Y3)


/*

	Map ==> Key Value pair

*/


let a_map = new Map()

let states_capitals = [
	['Assam', 'Dispur'],
	['Arunachal Pradesh', 'Itanagar'],
	['Bihar', 'Patna'],
	['Chattisgarh', 'Chattisgarh'],
	['Delhi', 'Delhi']]



let states_capitals_map = new Map(states_capitals)
states_capitals_map.set('Karnataka', 'Bangalore')


console.log(states_capitals_map.size)


