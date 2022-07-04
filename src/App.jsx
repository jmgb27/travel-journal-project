import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Globe from "./images/globe.png";
import Data from "./components/data";

function App() {
    return (
        <>
            <div className="flex justify-center gap-2 py-3 bg-[#F55A5A]">
                <img className="h-[25px]" src={Globe} />
                <p className="text-white">my travel journal.</p>
            </div>
            {Data.map((item) => {
                return (
                    <div className="px-10 pt-[15px]">
                        <Card key={item.id} item={item} />
                        <div className="shadow-div mx-[20%] py-[20px] text-center"></div>
                    </div>
                );
            })}
        </>
    );
}

export default App;
