import { red } from "@mui/material/colors";

import React from "react";

function ContactMap() {
  return (
    <div>
      <iframe
        title="map"
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "0.6px",
          borderColor: red,
        }}
        src="https://maps.google.com/maps?q=Gevgelija%20Macedonia&t=&z=11&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </div>
  );
}

export default ContactMap;
