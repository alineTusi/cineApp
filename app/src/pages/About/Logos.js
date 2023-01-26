import React from "react";
import {Logos, Photos, PhotoImage2,
        PhotoImage3, PhotoImage4, PhotoImage5,PhotoImage7

} from "./Logos.style"

import Logo2 from "../../assets/icons/Movie2.jpg"
import Logo3 from "../../assets/icons/Movie3.jpg"
import Logo4 from "../../assets/icons/Movie4.jpg"
import Logo5 from "../../assets/icons/Movie5.jpg"

import Logo7 from "../../assets/icons/Movie7.jpg"

export default function Icons (){
  return (
    <Logos>
        <Photos>

            
            <PhotoImage2 src={Logo2} alt="" />
            <PhotoImage3 src={Logo3} alt="" />
            <PhotoImage4 src={Logo4} alt="" />
            <PhotoImage5 src={Logo5} alt=""/>
            <PhotoImage7 src={Logo7} alt="" />
           
  
            

            


        </Photos>
      
    </Logos>
  )
}

