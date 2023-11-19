import { get_currency_symbol } from "../../../helpers/general";
import { markup } from "../../../helpers/Prices";

const SearchFilters = (props) => {

    const { filterStops, filterAirlines } = props;

    //console.log("STOPS FILTER:", filterStops);

    const STOPS = filterStops.map(each=>{
        /*{
            count: STOPS_COUNT,
            prices: [TOTAL_AMOUNT],
            lowest: TOTAL_AMOUNT,
            currency: CURRENCY,
            flights: [FLIGHT]
        }*/
        if(each.count===0){
            return (
                <div key={each.count} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                        <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>Nonstop ({each.flights.length})</p>
                    </div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontSize: 15}}>
                        <span style={{fontSize: 15, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                            dangerouslySetInnerHTML={{__html: get_currency_symbol(each.currency)}}></span>
                        {(markup(each.lowest).new_price).toFixed(2)}</p>
                </div>
            );
        } else {
             return (
                <div key={each.count} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                        <p style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontSize: 15}}>
                            {(each.count>1 ? each.count+" Stops" : each.count+" Stop")} ({each.flights.length})
                        </p>
                    </div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontSize: 15}}>
                        <span style={{fontSize: 15, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                            dangerouslySetInnerHTML={{__html: get_currency_symbol(each.currency)}}></span>
                        {(markup(each.lowest).new_price).toFixed(2)}</p>
                </div>
            );
        }
    });

    const AIRLINES = filterAirlines.map(each=>{
        /*{
            airlineCode: AIRLINE_CODE,
            airlineName: AIRLINE_NAME,
            prices: [TOTAL_AMOUNT],
            lowest: TOTAL_AMOUNT,
            highest: TOTAL_AMOUNT,
            currency: CURRENCY,
            flights: [FLIGHT]
        }*/
        return (
            <div key={each.airlineCode} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                    <p style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontSize: 15}}>{each.airlineName} ({each.flights.length})</p>
                </div>
                <p style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontSize: 15}}>
                    <span style={{fontSize: 15, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                            dangerouslySetInnerHTML={{__html: get_currency_symbol(each.currency)}}></span>
                            {(markup(each.lowest).new_price).toFixed(2)}</p>
            </div>
        );
    });

    return (
        <div>
            <div id="mobile_sort_and_filter_title_and_sort">
                <div style={{height: 50, borderBottom: "1px solid rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <p style={{color: "rgba(0,0,0,0.5)", fontWeight: "bolder", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            Sort and Filter
                        </p>
                        <p onClick={()=>document.getElementById('search_list_main__settings_section').style.display='none'} id="close_filter_and_sort_btn" style={{color: "rgba(255,0,0,0.6)", fontSize: 33, marginRight: 5}}>
                            &times;
                        </p>
                    </div>
                </div>
                <div style={{marginTop: 20, marginBottom: 35}}>
                    <p style={{color: "rgba(0,0,0,0.5)", fontSize: 17}}>Sort by</p>
                    <select style={{padding: 14, marginTop: 12, width: "100%", border: "1px solid rgba(0,0,0,0.15)", borderRadius: 9, color: "rgba(0,0,0,0.7)"}}>
                        <option>
                            Price (Lowest)
                        </option>
                    </select>
                </div>
            </div>
            <p style={{color: "rgba(0,0,0,0.5)", fontSize: 17, marginBottom: 30}}>
                <i style={{marginRight: 7}} className="fa fa-sliders" aria-hidden="true"></i>
                Filter by</p>

            <div style={{marginBottom: 30}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                    <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>Stops</p>
                    <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>From</p>
                </div>
                {
                    STOPS.map(each=>each)
                }
            </div>

            <div style={{marginBottom: 20}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                    <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>Airlines</p>
                    <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>From</p>
                </div>
                {
                    AIRLINES.map(each=>each)
                }
            </div>

            <div style={{marginBottom: 30}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                    <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>Travel and baggage</p>
                    <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>From</p>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                        <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>Seat choice included</p>
                    </div>
                    <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$143</p>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                        <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>Carry-on bag included</p>
                    </div>
                    <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$123</p>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                        <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>No cancel fee</p>
                    </div>
                    <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$111</p>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                        <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>No change fee</p>
                    </div>
                    <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$371</p>
                </div>
            </div>
        </div>
    );
}

export default SearchFilters;