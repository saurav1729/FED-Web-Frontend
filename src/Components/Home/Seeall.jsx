import React from "react";
import "./css/seeall.css";
import Wcard from "../../Data/testimonial.json";
function Seeall() {
  return (
    <div className="seeall_page">
      <div className="sub_div">
        <div>
          {" "}
          <p className="Title">
            What do <span className="spn">they say</span> about us?
          </p>
        </div>
        {Wcard.map((element) => {
          return (
            <div className="mcard">
              <div className="cardbox">
                <p className="cmt">{element.comment}</p>
                <p className="sp">{element.speaker_name}</p>
                <p className="prg">{element.program_}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Seeall;
