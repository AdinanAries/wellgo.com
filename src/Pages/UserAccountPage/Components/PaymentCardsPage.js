import PaginationButtons from "../../../components/PaginationButtons";
import EachPaymentCard from "./EachPaymentCard";

const PaymentCardsPage = (props) => {

    const {payments, card_not_found, show_more_payment_method_info, hide_more_payment_method_info, show_add_new_payment_form } = props;

    return (
        <div id="user_account_main_payment_pane" style={{display: (payments.length > 0 ? "none" : "block"), marginTop: 10}}>
            <div style={{height: 400, overflowY: "auto"}}>
                <div style={{display: ((payments.length > 0) ? "none" : "block"), marginBottom: 20, padding: "20px"}}>
                    <div style={{backgroundImage: `url(${card_not_found})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                        <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                        No payment method added</p>
                </div>
                {/*
                        id: "001",
                        user_id: "001",
                        card_number: "***3424",
                        holder_name: "Mohammed Adinan",
                        exp_date: "03-23-2025",
                        sec_code: "009",
                        billing: {
                            street: "956 Anderson Ave, 1A",
                            city: "Bronx",
                            state: "NY",
                            country: "United States",
                            zip_code: "10453"
                        }
                    */

                    payments.map((each, index)=>(
                        <EachPaymentCard 
                            index={index} 
                            each={each} 
                            show_more_payment_method_info={show_more_payment_method_info} 
                            hide_more_payment_method_info={hide_more_payment_method_info}
                        />
                    ))
                
                }
            </div>
            <div style={{padding: "15px 0"}}>
                <PaginationButtons />
            </div>
            <div onClick={show_add_new_payment_form} style={{padding: 14, cursor: "pointer", background: "rgb(23, 87, 148)", color: "white", borderRadius: 9, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)", textAlign: "center"}}>
                <i style={{marginRight: 10, color: "rgba(255,255,255,0.5)"}} className="fa fa-plus"></i>
                Add New Payment Method
            </div>
        </div>
    )
}

export default PaymentCardsPage;