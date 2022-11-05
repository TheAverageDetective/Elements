import React from "react";

export default function Contact () {
    function mail(){
        var a = document.createElement("a")
        a.href="mailto:lorem@example.com"
        a.click()
    }

    return (
        <div className="w-100 fs-1 d-flex flex-column text-center align-self-center user-select-none m-0 p-0 section"
        style={{minHeight : "50vh"}}
        id="contact"
        >
            <div style={{fontFamily : "InfoFont"}}>
                Have any queries? Get in touch.
            </div>
            
            <div style={{fontFamily : "Senja" , cursor : "pointer"}} id="email" onClick={mail}>
                lorem@example.com
            </div>
        </div>
    )
}