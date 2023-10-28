import { useState } from "react";
import CURRENCIES_FULL from "../Constants/CurrenciesFull";
import { ellipsify } from "../helpers/general";
import CONSTANTS from "../Constants/Constants";

const CurrenciesPane = (props) => {

    const { toggle_show_hide_pane } = props;

    let [ filtered, setFiltered ] = useState(CURRENCIES_FULL);
    const [ val, setVal ] = useState("");
    const [ selected, setSelected ] = useState(localStorage.getItem(CONSTANTS.local_storage.wellgo_usr_curr));

    const FilterCurrencies = (evnt) => {
        setVal(evnt.target.value);
        if(val===""){
            setFiltered(CURRENCIES_FULL);
        }else{
            let ff = CURRENCIES_FULL.filter(each => each.abbreviation.toLowerCase().includes(val.toLowerCase()) || each.currency.toLowerCase().replaceAll(")", "").replaceAll("(", "").includes(val.toLowerCase()));
            setFiltered(ff);
        }
    }

    const SelectSiteCurrency = (CURR) => {
        props.SelectSiteCurrency(CURR);
        setSelected(CURR);
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.6)", position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", zIndex: 10001}} >
            <div className="mobile-remove-border-radius" style={{backgroundColor: "rgb(43, 52, 61)", padding: "15px 0", borderRadius: 8, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)"}}>
                <p onClick={toggle_show_hide_pane} style={{zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center", color: "rgba(255,0,0,0.9)", position: "absolute", top: 15, right: 20, cursor: "pointer"}}>
                    <i style={{fontSize: 18}} className="fa-solid fa-times"></i></p>
                <h1 style={{color: "rgb(214, 106, 202)", textAlign: "center",fontFamily: "'Prompt', Sans-serif",}}>
                    Currency</h1>
                <p style={{color: "white", textAlign: "center", fontSize: 13, marginBottom: 10, fontFamily: "'Prompt', Sans-serif"}}>
                    Your Currency: 
                    <span style={{color: "orange", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}> {selected}</span></p>
                <div style={{borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "0 10px"}}>
                    <div style={{backgroundColor: "rgba(255,255,255,0.1)", padding: "0 10px", borderRadius: 8, marginBottom: 10}}>
                        <i style={{color: "rgba(255,255,255,0.1)", marginRight: 10}} className="fa-solid fa-search"></i>
                        <input onInput={FilterCurrencies} value={val} 
                            style={{width: "calc(100% - 60px)", background: "none", color: "white", padding: "10px 0", border: "none"}} type="text" 
                            placeholder="search..." />
                    </div>
                </div>
                <div className="mobile-full-screen" style={{ height: 400, minWidth: 500, overflow: "auto", padding: "0 10px"}}>
                    {
                        filtered.map(each=>(
                                <div onClick={()=>SelectSiteCurrency(each.abbreviation)}
                                    key={each.abbreviation} style={{cursor: "pointer", display: "flex", justifyContent: "space-between", padding: 10, borderBottom: "1px solid rgba(255,255,255,0.1)", color: "white"}}>
                                    <p style={{marginRight: 20}}>
                                        {
                                            (selected === each.abbreviation) && 
                                                <i className="fa-solid fa-check" style={{color: "lightgreen", marginRight: 10}}></i>
                                        }
                                        <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                            ({each.abbreviation}) </span>
                                        <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                            {ellipsify(each.currency, 30)}
                                        </span>
                                    </p>
                                    <span style={{color: "orange"}} dangerouslySetInnerHTML={{__html: each.symbol}}></span>
                                </div>
                            )
                        )
                    }
                    {
                        filtered.length<1 && <div style={{padding: 20}}>
                            
                            <p style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", textAlign: "center", color: "rgba(255,255,255,0.7)"}}>
                                <i className="fa-solid fa-exclamation-triangle" style={{color: "yellow", marginRight: 10}}></i>
                                no results for
                                <span style={{color: "skyblue"}}> '{val}'</span></p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default CurrenciesPane;