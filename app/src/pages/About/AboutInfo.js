import React from 'react'
import CameraPic from "../../assets/icons/StudioPic2.jpg"

import 
{ Background, CameraBackroundPic, Description,
AboutUsInfo, AboutUsText, LearnMoreButton,

} from "./AboutInfo.style"


const AboutInfo = () => {
  return (

    <Background>


        <div>

            <CameraBackroundPic style={{backgroundImage:`url(${CameraPic})`,  backgroundSize: "cover", }} >

                <Description>
                    <AboutUsInfo>
                       <span>We Are CineGAF </span> <br></br>
                        Providing the best Movies for entartainment and fun
                    </AboutUsInfo>

                    <AboutUsText>
                        In 1960 When the revolutionary of the film, <br></br>
                        starts to grow in the Market, Our CinemaFAG Cinema Company <br></br>
                        was born.With decades CineFAG presenting the best Movies from all the gernes. <br></br>



                    </AboutUsText>

                    <LearnMoreButton>
                        Learn More
                    </LearnMoreButton>


                </Description>
            </CameraBackroundPic>


        </div>


       
        

    </Background>
    
        
  )
};

export default AboutInfo       
        


    
    
