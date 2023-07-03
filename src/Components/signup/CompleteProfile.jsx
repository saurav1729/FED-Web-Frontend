import React, { useEffect } from "react";
import PropTypes from "prop-types";

// css
import CPCss from "./css/CompleteProfile.module.css";

// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CompleteProfile(props) {
  console.log(props.data);
  return (
    <div
      className={CPCss.mDiv}
      id="showCreate"
      // id={Object.keys(props.data).length > 0 ? "showCreate" : "hideCreate"}
    >
      <div className={CPCss.mDivCon}>
        <ArrowBackIcon
          className={CPCss.ArrowBackIcon}
          onClick={() => props.set(false)}
        />
        <div>
          <p className={CPCss.CreateProfile}>Create Profile</p>
          <p className={CPCss.Please}>Please enter Your Details</p>
        </div>
      </div>
    </div>
  );
}

CompleteProfile.propTypes = {};

export default CompleteProfile;
