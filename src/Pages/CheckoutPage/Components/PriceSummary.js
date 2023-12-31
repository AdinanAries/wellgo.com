import { markup } from "../../../helpers/Prices";
import { get_currency_symbol } from "../../../helpers/general";
import { useEffect, useState } from "react";

const PriceSummary = (props) => {

    const { payments, prices, total_travelers } = props;
    let overallTotal = parseFloat(prices.total_amount);
    
    const { extras } = prices;
    const EXTRAS_MARKUP = [];
    extras.forEach(each=>{
        overallTotal=(overallTotal+each.total);
        EXTRAS_MARKUP.push(
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.7)"}}>
                    {each.name} ({each.quantity})
                </p>
                <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                    <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                            dangerouslySetInnerHTML={{__html: get_currency_symbol(prices.base_currency)}}></span>
                    {(markup(each.total).new_price).toFixed(2)}
                </p>
            </div>
        );
    });

    return (
        <div style={{border: "1px solid rgba(0,0,0,0.1)", borderRadius: 9, padding: 10, margin: 10}}>
            <p style={{fontSize: 16, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                Price Summary
            </p>
            <div style={{marginTop: 20, borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 10}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.8)"}}>
                        {total_travelers>1 ? (total_travelers+" Travelers"): (total_travelers+" Traveler")}:
                    </p>
                    <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                        <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}} 
                                dangerouslySetInnerHTML={{__html: get_currency_symbol(prices.total_currency)}}></span>
                        {(markup(prices.total_amount).new_price).toFixed(2)}
                    </p>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                    <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.7)"}}>
                        Flight
                    </p>
                    <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                        <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                                dangerouslySetInnerHTML={{__html: get_currency_symbol(prices.base_currency)}}></span>
                        {(markup(prices.base_amount).new_price).toFixed(2)}
                    </p>
                </div>
                {EXTRAS_MARKUP.map(each=>each)}
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                    <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.7)"}}>
                        Taxes and fees
                    </p>
                    <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                        <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                                dangerouslySetInnerHTML={{__html: get_currency_symbol(prices.tax_currency)}}></span>
                        {(markup(prices.tax_amount).new_price).toFixed(2)}
                    </p>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                <div>
                    <p style={{fontSize: 16, letterSpacing: 1, color: "rgba(0,0,0,0.8)", fontWeight: "bolder"}}>
                        Total
                    </p>
                    <p style={{fontSize: 12, marginTop: 5, color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif"}}>
                        <i style={{marginRight: 10, color: "green"}} className="fa fa-info"></i>
                        prices are quoted in {prices.total_currency}
                    </p>
                </div>
                <p style={{fontSize: 17, fontWeight: "bolder", letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                    <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}} 
                                dangerouslySetInnerHTML={{__html: get_currency_symbol(prices.total_currency)}}></span>
                    {(markup(overallTotal).new_price).toFixed(2)}
                </p>
            </div>
            <div className="checkout_page_main_checkout_btn_container">
                <p className="checkout_page_mobile_button_place_total_price_display">
                    <i style={{marginRight: 5}} className="fa fa-info-circle"></i>
                    The total amout you pay is 
                    <span style={{color: "crimson", fontWeight: "bolder"}}> <span 
                        style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif"}} 
                        dangerouslySetInnerHTML={{__html: get_currency_symbol(prices.total_currency)}}></span>
                            {(markup(overallTotal).new_price).toFixed(2)}
                    </span>. See price summary at the bottom
                </p>
                {
                    ( !props.isPaymentPage ) ?
                    <div onClick={props.buttonFunction} className="checkout_page_main_checkout_btn" style={{backgroundColor: "darkslateblue"}}>
                        Continue
                        <span style={{fontSize: 13, color: "rgba(255,255,255,0.4)", marginLeft: 10}}>
                            ({props.buttonText})</span>
                    </div> :
                    <div  onClick={props.buttonFunction} className="checkout_page_main_checkout_btn">
                        <i style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}} className="fa fa-credit-card"></i>Checkout
                    </div>
                }
            </div>
        </div>
    )
}

export default PriceSummary;