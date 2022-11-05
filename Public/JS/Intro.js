import React from "react";

export default function Introduction () {
    const introHeading = "Get ready to experience one of the biggest celebrations ever!"
    return (
        <div
            className="w-100 fs-1 d-flex flex-column text-center align-self-center user-select-none m-0 p-0 section"
            style={{fontFamily : "IntroFont"}}>

            <video 
                draggable="false" muted={true}
                autoPlay={true} loop={true}
                style={{width : "100%" , zIndex : "1"}}>
                <source src="/Public/Media/Concert.mp4" type="video/mp4" />
            </video>

            <div className="position-absolute justify-self-center"
                style={{zIndex : "2" , top : "50vh" , left : "10vw"}}>
                {introHeading}
            </div>

        </div>
    )
}