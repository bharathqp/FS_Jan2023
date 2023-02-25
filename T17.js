// Structuring
// Destructing


// let cities = ['Hyderabad', 'Delhi', 'Bangalore', 'Mysore', 'Hassan', 'Mangalore']
// let [Te, De, ...Ka] = cities

// let BE = ['Sql', 'Mongo', 'Express', 'Node']
// let FE = ['HTML', 'CSS', 'JS', 'React']

// let fullstack = [BE, FE]

// for (let [first, second, third, fourth] of fullstack){
// 	console.log(fourth)
// }



const plane1 = {
	width:50,
	height:150,
	area:750
}

const plane2 = {
	width:100,
	height:50,
	area:500
}

let {width:w_1, height:h_1, area:a_1, perimeter:p_1} = plane1
let {width:w_2, height:h_2, area:a_2, perimeter:p_2} = plane2



calc_perimeter = ({height, width}) => 2*(height + width)
calc_perimeter_2 = (pl) => 2*(pl.height + pl.width)


let p1 = calc_perimeter_2(plane2)
let p2 = calc_perimeter(plane2)

console.log(p1, p2)



x = (...args) => {}


x(10, 20, 3, a, c, sd, d, )