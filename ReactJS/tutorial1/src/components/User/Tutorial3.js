



let greetUser = (user) => {
    alert('Welcome ' +user +'!');
}


let Tutorial3 = (props) => (
        <div class="col-md-4 p-2 my-2 rounded">
            <div className="p-3 shadow" onClick={() => greetUser("Sachin")}>
                <img class="card-img-top" src={props.data.image} alt="Card image" style={{width:"100%",height:'250px'}}/>
                <div class="card-body">
                <h4 class="card-title">{props.data.brand}</h4>
                </div>
            </div>
        </div>        
)



export default Tutorial3;