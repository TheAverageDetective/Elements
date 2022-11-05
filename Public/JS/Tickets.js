import React from "react";

export default function Tickets (props) {
    return (
        <div className="w-100 fs-1 d-flex flex-column text-center align-self-center user-select-none mt-3 p-0 section"
            style={{minHeight : "50vh"}}
            id="tickets"
        >
            <div style={{borderBottom : "dashed white 1px"}}></div>

            <div style={{fontFamily : "InfoFont"}}>
                Grab your tickets!
            </div>

            <div>
                Tickets available online and at venue.
                <br/>
                Pricing : INR 750 per head.
                <br/>
                <button className="getTicket" onClick={props.purchaseTickets}
                    style={{marginTop : "8vh"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-ticket-perforated" viewBox="0 0 16 16">
                            <path d="M4 4.85v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z"/>
                            <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Z"/>
                        </svg>
                        Get Tickets!
                </button>
            </div>
        </div>
    )
}

export function OutOfTickets () {
    return(
        <div style={{fontFamily : "InfoFont"}}>
            Oh no! Looks like we are out of available spots 😐 <br/>
            Better luck next time.
        </div>
    )
}