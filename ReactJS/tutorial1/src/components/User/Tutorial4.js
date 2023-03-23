





let Tutorial4 = (props) => (
        <div class="container">
            <div className="row">
                <div class="offset-md-1 col-md-3 p-2 my-2 rounded">
                    <img class="card-img-top" src={props.data.image} alt="Card image" style={{width:"100%",height:'250px'}}/>
                </div>
                <div class="col-md-4 p-2 my-2 rounded">
                        <h4 class="card-title">{props.data.brand}</h4>
                        <p className="text-success h5 mb-3"> This a brand new phone</p>
                        <ul>
                            <li>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB
                            </li><li>16.51 cm (6.5 inch) HD Display
                            </li><li>13MP + 2MP | 5MP Front Camera
                            </li><li>5000 mAh Lithium-Ion Battery
                            </li><li>Mediatek Helio P35 Processor
                            </li><li>1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories
                            </li>
                        </ul>
                </div>
                <div class="col-md-2 p-2 my-2 rounded">
                    <h5> INR 20,0000 </h5>
                </div>
            </div>
        </div>        
)



export default Tutorial4;