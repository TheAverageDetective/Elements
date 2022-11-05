import React from "react";

export default function Venue () {
    return (
        <div className="w-100 fs-1 d-flex flex-column text-center align-self-center user-select-none m-0 p-0 section"
            style={{minHeight : "50vh"}}>
            <div className="" style={{fontFamily : "InfoFont"}}>
                The Address 📍
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-50" style={{fontFamily : "Senja"}}>
                    Lorem Park , Ipsum Street, <br/>
                    Dolor, Sit - 70419
                </div>
            </div>

            <div style={{fontFamily : "InfoFont"}}>
                The Time 🕔
            </div>

            <div style={{fontFamily : "Senja"}}>
                30 December, 5:00 pm onwards
            </div>

        </div>
    )
}