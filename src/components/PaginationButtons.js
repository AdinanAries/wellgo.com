import { useState } from "react";

function PaginationButtons(props){

    const {
        pageSize, 
        currentPage, 
        totalItems, 
        nextPage, 
        prevPage, 
        setPage
    } = props

    let optionsMarkup=[];
    for(let i=0; i<(Math.ceil(totalItems/pageSize)); i++){
        optionsMarkup.push(<option value={i+1}>{(((i)*pageSize)+1)} - {((i+1)*pageSize)}</option>)
    }

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{color: "rgba(0,0,0,0.7)", marginRight: 10, fontSize: 13, width: 40, height: 40, border: "1px solid rgba(0,0,0,0.1)", borderRadius: "100%", background: "rgb(0,0,255,0.05)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                <i className="fa-solid fa-angles-left"></i>
            </div>
            <div onClick={prevPage} style={{color: "rgba(0,0,0,0.7)", fontSize: 13, width: 40, height: 40, border: "1px solid rgba(0,0,0,0.1)", borderRadius: "100%", background: "rgb(0,0,255,0.05)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                <i className="fa fa-angle-left"></i>
            </div>
            <div style={{backgroundColor: "rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.1)", padding: 10, borderRadius: 50, margin: "0 10px"}}>
                <select 
                    value={currentPage}
                    onChange={(evnt)=>setPage(evnt.target.value)} 
                    style={{fontSize: 13, border: "none", background: "none"}}
                >
                    {optionsMarkup.map(each=>each)}
                </select>
            </div>
            <div onClick={nextPage} 
                style={{color: "rgba(0,0,0,0.7)", fontSize: 13, width: 40, height: 40, border: "1px solid rgba(0,0,0,0.1)", borderRadius: "100%", background: "rgb(0,0,255,0.05)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                <i className="fa fa-angle-right"></i>
            </div>
            <div style={{color: "rgba(0,0,0,0.7)", marginLeft: 10, fontSize: 13, width: 40, height: 40, border: "1px solid rgba(0,0,0,0.1)", borderRadius: "100%", background: "rgb(0,0,255,0.05)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                <i className="fa-solid fa-angles-right"></i>
            </div>
        </div>
    )
}

export default PaginationButtons;