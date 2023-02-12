// Self invoking function

// (function sqr(n)
// {
//    console.log(n * n)
// })(6)


function sum()
{
   let x = 0

   for (let num of arguments)
   {
   		x += num
   }

	return x

}

let out = sum(10, 20, 30, 50, 60, 50, 90, 50, 60, 50, 90, 50, 60, 50, 90)

console.log(out)