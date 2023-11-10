import PaginationButtons from "../../../components/PaginationButtons";
import EachPaymentCard from "./EachPaymentCard";
import PaymentsForm from "../../../components/PaymentsForm";
import loading_icon from "../../../icons/loading.svg";
import nothing_found_icon from "../../../icons/nothing_found_icon.svg";

import { useState } from "react";

const PaymentCardsPage = (props) => {

    const {
        isLoading,
        payments,
        card_not_found,
        show_more_payment_method_info,
        hide_more_payment_method_info,
        show_add_new_payment_form,
        AddPaymentCard,
        SubmitEditPaymentCard,
        DeletePaymentCard
    } = props;

    const NEW_CARD = {
        id: "",
        user_id: "",
        card_number: "",
        holder_name: "",
        exp_date: "",
        sec_code: "",
        billing: {
            street: "",
            city: "",
            state: "",
            country: "",
            zip_code: ""
        }
    };

    const [ isEdit, setIsEdit ] = useState(false);
    let [ paymentForm, setPaymentForm ] = useState(NEW_CARD);

    const cancelIsEdit = () => {
        setIsEdit(false);
        setPaymentForm(NEW_CARD);
    }

    const startPaymentCardEdit = (obj) => {
        setIsEdit(true);
        setPaymentForm(obj);
    }

    const paymentCardFormOnSubmit = () => {
        if(!isEdit){
            AddPaymentCard(paymentForm);
        }else{
            SubmitEditPaymentCard(paymentForm);
        }
    }

    const paymentCardFormStateChangeWrapper = (field, value, isBilling=false) => {
        if(isBilling){
            paymentForm.billing[field]=value;
        }else{
            paymentForm[field]=value;
        }
        setPaymentForm({
            ...paymentForm
        })
    }

    return (
        <div id="user_account_main_payment_pane" style={{display: "none", marginTop: 10}}>
            {isLoading && 
                <div style={{marginBottom: 20, padding: "20px"}}>
                    <div style={{backgroundImage: `url(${loading_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                        Please wait...</p>
                </div>
            }
            {
                (!isLoading && payments.isError) && 
                    <div style={{marginBottom: 20, padding: "20px"}}>
                        <div style={{backgroundImage: `url(${nothing_found_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                        <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                            <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                            Oop! Error on server</p>
                    </div>
            }
            {   
                (!isLoading && !payments.isError) &&
                    <>
                        <div style={{overflowY: "auto"}}>
                            { 
                                payments.length < 1 &&
                                <div style={{marginBottom: 20, padding: "20px"}}>
                                    <div style={{backgroundImage: `url(${card_not_found})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                                        <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                                        No payment method added</p>
                                </div>
                            }
                            {
                                payments.map((each, index)=>(
                                    (payments.length > 0) && <EachPaymentCard 
                                        index={index} 
                                        each={each}
                                        show_add_new_payment_form={show_add_new_payment_form}
                                        DeletePaymentCard={DeletePaymentCard}
                                        startPaymentCardEdit={startPaymentCardEdit}
                                        show_more_payment_method_info={show_more_payment_method_info} 
                                        hide_more_payment_method_info={hide_more_payment_method_info}
                                    />
                                ))
                            
                            }
                        </div>
                        {
                            (payments.length > 5) &&
                            <div style={{padding: "15px 0"}}>
                                <PaginationButtons />
                            </div>
                        }
                        <div onClick={show_add_new_payment_form} style={{padding: 14, cursor: "pointer", background: "rgb(23, 87, 148)", color: "white", borderRadius: 9, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)", textAlign: "center"}}>
                            <i style={{marginRight: 10, color: "rgba(255,255,255,0.5)"}} className="fa fa-plus"></i>
                            Add New Payment Method
                        </div>
                        <PaymentsForm
                            isEdit={isEdit}
                            stateChange={paymentCardFormStateChangeWrapper}
                            submitFunction={paymentCardFormOnSubmit}
                            paymentForm={paymentForm}
                            cancelIsEdit={cancelIsEdit}
                        />
                </>
            }
        </div>
    )
}

export default PaymentCardsPage;