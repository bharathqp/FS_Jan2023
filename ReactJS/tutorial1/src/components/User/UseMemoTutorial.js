import { useState, useMemo } from "react";




let UseMemoTutorial = () => {
    let [count, setCount] = useCustom(url)


    let slowDown = (a) => {
        for (let i = 0; i < 1000000000; i++){
            for (let i = 0; i < 2; i++){}
        }
        return "the number " + a
    }

    let theNumber = 100
    let someThing = useMemo(()=>slowDown(theNumber), [theNumber])

    return (<>
        <h3 className="my-3">You Clicked me for {count} times!!</h3>

        <h4> Rendering {someThing} </h4>

        <button className="btn btn-success" onClick={()=> setCount(count+1)}   >Click Me</button>
        </>);
}



export default UseMemoTutorial;