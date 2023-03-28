import { useRef, useEffect, useState} from "react";

let UseRefTutorial = () => {
    const [firstName, setFirstName] = useState("Ramesh")

    const prevFirstName = useRef("")


    useEffect(
        () => {prevFirstName.current = firstName}, [firstName])


    return (
        <>
            <input type="text" onChange={(e)=>setFirstName(e.target.value)}/>
            
            <h1>The Current Name: {firstName}</h1>

            <h1>The Previous Name: {prevFirstName.current}</h1>

        </>
    );}


export default UseRefTutorial;