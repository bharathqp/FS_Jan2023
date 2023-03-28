import React, {useState} from 'react';

const UseStateTutorial = () => {
    let [country, setCountry] = useState("India")

    return (<>
        <h1 className='text-center my-3'>My Country is {country}</h1>
        <button class='btn btn-primary mx-3' onClick={()=> setCountry('America')}>USA</button>
        <button class='btn btn-primary mx-3' onClick={()=> setCountry('UAE')}>UAE</button>
        <button class='btn btn-primary mx-3' onClick={()=> setCountry('Great Briton')}>UK</button>
        <button class='btn btn-primary mx-3' onClick={()=> setCountry('Australia')}>AUS</button>
</>)}



export default UseStateTutorial;