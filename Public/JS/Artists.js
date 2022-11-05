import React from "react";

export default function Artists () {
    return (
        <div className="w-100 fs-1 d-flex flex-column text-center align-self-center user-select-none m-0 p-0 section">
            
            <div className="ArtistHeading w-100 text-center"
                style={{fontFamily : "HeadingFont", marginBottom : "8vh"}}>
                    The Artists 🎙
            </div>

            <div className="artist w-100 d-flex flex-row justify-content-start align-items-center m-0 px-4">
                <div>
                    <img className="artistImage" alt="Artist Image" src="/Public/Media/TheWeeknd.png" />
                </div>

                <div className="ArtistName w-50 justify-self-end">
                    The Weeknd
                </div>
            </div>

            <div className="artist w-100 d-flex flex-row justify-content-end align-items-center m-0 px-4">
                <div className="ArtistName w-50 justify-self-end">
                    Billie Eilish
                </div>

                <div>
                    <img className="artistImage" alt="Artist Image" src="/Public/Media/BillieEilish.jpg" />
                </div>
            </div>

            <div className="artist w-100 d-flex flex-row justify-content-start align-items-center m-0 px-4">
                <div>
                    <img className="artistImage" alt="Artist Image" src="/Public/Media/JustinBieber.jpg" />
                </div>

                <div className="ArtistName w-50 justify-self-end">
                    Justin Bieber
                </div>
            </div>

        </div>
    )
}