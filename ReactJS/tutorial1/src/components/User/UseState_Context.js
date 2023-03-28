let countryContext = createContext();

let App3 = () => {  
    let country = useContext(countryContext)
    return (
        <>
            <h1 className="text-danger">My Country is {country}</h1>
        </>)
}


let App2 = () => {  
    return (
        <>
           <App3/>
        </>)
        }




let App1 = () => {  
    return (
        <>
            <App2/>
        </>)
        }



let MainApp = () => {  
    let country = "India"
    return (
        <countryContext.Provider value={"Bangalore"}>
            <App1 />
        </countryContext.Provider>)
            

    }
