import logo from './logo.svg';
import './App.css';


let Element 
let Element1
let Element2
let number = 200

Element1 = <h1>Hello, World!!</h1>
//let Element1 = <h1>Hello {student}, Welcome to React JS!!</h1>
//Element = <h1> The Square of {number} is {number * number}</h1>
Element2 = <h1> {number%2 === 0 ?   "The number is Even" :   "The number is Odd" }</h1>
// let Element1 = (<ul>
//             <li>Home Page</li>
//             <li>About Page</li>
//             <li>Contact Page</li>
//             <li>Gallery Page</li>
//          </ul>)



let Element3 = () => Element1



function Element4(){           
   return Element2
}

Element = () => (
               <>
                     <Element3/>
                     <Element4/>
                     Element3
                     <Element4/>
                     <Element3/>
               </>)


export default Element;
