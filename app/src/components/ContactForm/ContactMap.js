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
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
}

export default ContactMap;
