import React from "react";

export default function Information () {
    const info = <p>
                    Lorem is organising a New Year Musical Fest, 
                    <span style={{color : "rgb(200, 45, 100)"}}> Ignite 🔥</span>
                    <br/>
                    <br/>
                    Connect with your favorite music artists as they perform 
                    <span style={{color : "chartreuse"}}> live 🔴 </span>
                    <br/>
                    <br/>
                    Come, join us with your
                    <span style={{color : "darkorange"}}> friends</span>,
                    <br/>
                    <br/>
                    <span style={{color : "gold"}}> an opportunity you won't want to miss! </span>
                </p>
    return (
        <div 
            className="w-100 fs-1 d-flex flex-column text-center align-self-center user-select-none m-0 p-0 section"
            style={{zIndex : "2" , fontFamily : "InfoFont"}}
        >
            {info}
        </div>
    )
}