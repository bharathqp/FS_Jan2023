import Tutorial3 from './Tutorial3'
import Tutorial4 from './Tutorial4'

let Header = () => {
  return (
    <div className="row bg-danger text-light py-4">
        <h4> This is our Second Tutorial</h4>
    </div>
  )
}

 
 let Content = () => {
    let thisWebsite = 'Cars'
    
    let cars = [{
        brand:"Honda",
        model: "2020",
        image:'https://www.financialexpress.com/wp-content/uploads/2023/03/2023-Honda-City-facelift-7.jpg'
        },
        {
        brand:"Audi",
        model: "2020",
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl0WSitBQnzXUkph0nT_oV_x6rS5rNrOtLg&usqp=CAU'
        },
        {
        brand:"Maruti",
        model: "2020",
        image:'https://www.financialexpress.com/wp-content/uploads/2023/03/2023-Honda-City-facelift-7.jpg'
        },
        {
        brand:"Tata",
        model: "2020",
        image:'https://www.financialexpress.com/wp-content/uploads/2023/03/2023-Honda-City-facelift-7.jpg'
        },
        {
        brand:"Mahindra",
        model: "2020",
        image:'https://www.financialexpress.com/wp-content/uploads/2023/03/2023-Honda-City-facelift-7.jpg'
        }]
 


    let phones = [
        {
            brand:"Apple",
            model: "2020",
            image:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg'
        },
        {
            brand:"Apple",
            model: "2020",
            image:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg'
        },
        {
            brand:"Apple",
            model: "2020",
            image:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg'
        },
        {
            brand:"Apple",
            model: "2020",
            image:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg'
        }
    ]



 return(
    <div className='row'>
            {thisWebsite === "Phones" ?  <Phones data={phones}/>:  <Cars data={cars}  />}

    </div>
 )}


 let Phones = (props) => {
    let data = props.data
    return (
        <>
            {data.map(each => <Tutorial4 data={each}/>)}
        </>
    )
}


let Cars = (props) => {
    let data = props.data
    return (
        <>
            {data.map(each => <Tutorial3 data={each}/>)}
        </>
    )
}
 
 let Footer = () => {
    return (<div className="row bg-danger text-light">
                <h5> This is our Second Tutorial</h5>
            </div>
    )
}

let Tutorial2 = () => {
   return ( <>  
                <Header/>
                <Content/>
                <Footer/>
            </>
)}

export default Tutorial2;
