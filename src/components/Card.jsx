import React from "react";
import Fuji from "../images/fuji.png";
import Pin from "../images/pin.png";

export default function Card() {
    return (
        <div className="py-10 flex justify-center">
            <img className="h-[230px]" src={Fuji} />
            <div className="pl-[25px] pt-[20px] w-[500px]">
                <div className="flex gap-2">
                    <img className="h-[15px]" src={Pin} />
                    <p>JAPAN</p>
                    <p className="text-[#918E9B] underline">
                        View on Google Maps
                    </p>
                </div>

                <div>
                    <h1 className="text-[35px] font-bold">Mount Fuji</h1>
                </div>

                <div className="pt-3">
                    <p className="font-semibold">12 Jan,2021 - 24 Jan,2021</p>
                </div>

                <div className="pt-2">
                    <p>
                        Mount Fuji is the tallest mountain in Japan, standing at
                        3,776 meters (12,380 feet). Mount Fuji is the single
                        most popular tourist site in Japan, for both Japanese
                        and foreign tourists.
                    </p>
                </div>
            </div>
        </div>
    );
}
