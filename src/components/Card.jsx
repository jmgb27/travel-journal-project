import React from "react";
import Pin from "../images/pin.png";

export default function Card({ item }) {
    return (
        <div className="py-10 flex justify-center">
            <img className="h-[230px]" src={item.img} />
            <div className="pl-[25px] pt-[20px] w-[500px]">
                <div className="flex gap-2">
                    <img className="h-[15px]" src={Pin} />
                    <p>{item.country}</p>
                    <p className="text-[#918E9B] underline">
                        View on Google Maps
                    </p>
                </div>

                <div>
                    <h1 className="text-[35px] font-bold">{item.location}</h1>
                </div>

                <div className="pt-3">
                    <p className="font-semibold">{item.date}</p>
                </div>

                <div className="pt-2">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    );
}
