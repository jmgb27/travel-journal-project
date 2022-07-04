import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import Card from "./components/Card.js";
import Globe from "./images/globe.png.proxy.js";
import Data from "./components/data.js";
function App() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center gap-2 py-3 bg-[#F55A5A]"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-[25px]",
    src: Globe
  }), /* @__PURE__ */ React.createElement("p", {
    className: "text-white"
  }, "my travel journal.")), Data.map((item) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "px-10 pt-[15px]"
    }, /* @__PURE__ */ React.createElement(Card, {
      key: item.id,
      item
    }), /* @__PURE__ */ React.createElement("div", {
      className: "shadow-div mx-[20%] py-[20px] text-center"
    }));
  }));
}
export default App;
