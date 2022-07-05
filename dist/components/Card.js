import React from "../../_snowpack/pkg/react.js";
import Pin from "../images/pin.png.proxy.js";
export default function Card({item}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col sm:flex-row py-10 justify-center"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-[270px] md:w-[180px]",
    src: item.img
  }), /* @__PURE__ */ React.createElement("div", {
    className: "pl-[25px] pt-[20px] w-[300px] md:w-[500px]"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2 items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-[15px]",
    src: Pin
  }), /* @__PURE__ */ React.createElement("span", {
    className: "tracking-widest"
  }, item.country.toUpperCase()), /* @__PURE__ */ React.createElement("span", {
    className: "text-[#918E9B] underline"
  }, "View on Google Maps")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-[35px] font-bold"
  }, item.location)), /* @__PURE__ */ React.createElement("div", {
    className: "pt-3"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold"
  }, item.date)), /* @__PURE__ */ React.createElement("div", {
    className: "pt-2"
  }, /* @__PURE__ */ React.createElement("span", null, item.description))));
}
