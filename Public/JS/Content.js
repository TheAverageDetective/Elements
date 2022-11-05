import React from "react";
import Introduction from "./Intro";
import Information from "./Info";
import Artists from "./Artists";
import Venue from "./Venue";
import Tickets from "./Tickets";
import Contact from "./Contact";

export default function Content (props) {
    return (
        <div className="row w-100 d-flex flex-column justify-content-center m-0 p-0"
            style={{minHeight : "90vh" , rowGap : "20vh"}}>

           <Introduction />
           <Information />
           <Artists />
           <Venue />
           <Tickets purchaseTickets={props.purchaseTickets}/>
           <Contact />

        </div>
    )
}