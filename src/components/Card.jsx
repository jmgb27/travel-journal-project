import React from "react";
import Pin from "../images/pin.png";

export default function Card({ item }) {
    return (
        <div className="flex flex-col sm:flex-row py-10 justify-center">
            <img className="w-[270px] md:w-[180px]" src={item.img} />
            <div className="pl-[25px] pt-[20px] w-[300px] md:w-[500px]">
                <div className="flex gap-2 items-center">
                    <img className="h-[15px]" src={Pin} />
                    <span className="tracking-widest">
                        {item.country.toUpperCase()}
                    </span>
                    <span className="text-[#918E9B] underline">
                        View on Google Maps
                    </span>
                </div>

                <div>
                    <h1 className="text-[35px] font-bold">{item.location}</h1>
                </div>

                <div className="pt-3">
                    <span className="font-semibold">{item.date}</span>
                </div>

                <div className="pt-2">
                    <span>{item.description}</span>
                </div>
            </div>
        </div>
    );
}
