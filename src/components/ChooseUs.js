import securepaymentssvg from '../icons/securepayments.svg';
import bestdealssvg from '../icons/bestdeals.svg';
import customersupportsvg from '../icons/customersupport.svg';

var ChooseUs = ()=>{
    return (
        <div>
            <div className="wrapper">
                <h1 style={{textAlign: "center", fontSize: 20, marginTop: 20, color: "rgba(0,0,0,0.7)", marginBottom: "10px", fontWeight: 1000, fontFamily: "Sans-serif"}}
                >Get the Best Deals!</h1>
                <p style={{color: "rgba(0,0,0,0.6)", textAlign: "center", margin: "0 5px", fontWeight: "bolder", fontSize: 15}}
                >We have the cheapest flight tickets</p>
                <div className="why-choose-us-container" >
                    <div className="each-choose-us-container">
                        
                        <div style={{backgroundImage: `url('${securepaymentssvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

                        </div>
                        <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", textAlign: "center", marginBottom: 10, fontFamily: "Courgette"}}>
                            Secure Payment</p>
                        <p style={{color: "rgba(0,0,0,0.6)", textAlign: "center", fontWeight: "bolder", fontSize: 15}}>
                            This is a place holder text for the description of this info card</p>
                    </div>
                    <div className="each-choose-us-container">
                        
                        <div style={{backgroundImage: `url('${customersupportsvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

                        </div>
                        <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", textAlign: "center", marginBottom: 10, fontFamily: "Courgette"}}>
                            Customer Support</p>
                        <p style={{color: "rgba(0,0,0,0.6)", textAlign: "center", fontWeight: "bolder", fontSize: 15}}>
                            This is a place holder text for the description of this info card</p>
                    </div>
                    <div className="each-choose-us-container">
                        
                        <div style={{backgroundImage: `url('${bestdealssvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

                        </div>
                        <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", textAlign: "center", marginBottom: 10, fontFamily: "Courgette"}}>
                            Best Deals</p>
                        <p style={{color: "rgba(0,0,0,0.6)", textAlign: "center", fontWeight: "bolder", fontSize: 15}}>
                            This is a place holder text for the description of this info card</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;