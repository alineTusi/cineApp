import React from "react";
import {Link} from "react-router-dom"
import
{Main,Div,Container1,Box, BoxOverlay,ContactInfo,
  List, List1, Li1, Li2, Home,Li4,  ContactTitle,
  Container2, CompanyInfo, CompanyAdress,Logo1, Info1, 
  Paragraph1, CompanyInfo1,Info2, Logo2, Paragraph2,
  CompanyAdress2, CompanyInfo2, Info3, Logo3, Paragraph3, 
  CompanyAdress3, CompanyInfo3, Info4, Logo4, Paragraph4, 
  CompanyAdress4, Container3, ContactForm, FormInfo, FormSendEmail,
  Hr,Form, FormInput, Input,Name, Star,  ParagraphInfo,
  FormInput1, Input1,Name1,Star1,  ParagraphInfo1, 
  FormInput2, Name2,Star2, Input2,ParagraphInfo2,  
  TextArea,TextAreaTitle, Mesage, Star3,
  Container3SectionOne, ContactPicture, ButtonArea, 
  Container4, Map, 
        
} from "./Contact.style"
       
import BackgroundPic from "../../assets/icons/Stars2.jpg"
import ContactPic from "../../assets/icons/CinemaPopcorn.jpg"         
import ContactMap from "./ContactMap";
import ContactButton from "./ContactButton";
       
        
export default function Contact() {

  return (
    <Main>
      
      {/*First SEction*/}
      <div>

        <Div style={{backgroundImage:`url(${BackgroundPic})`,  backgroundSize: "cover", }} >

          <Container1>
            <Box></Box>

            <BoxOverlay> 
              <ContactInfo>
              <h3>Contact</h3>
              </ContactInfo>

              <List>

                <List1>

                  <Li1>You are here:</Li1>

                  <Li2>/</Li2>


                  <Link style={{textDecoration:"none",}}to="/">
                    <Home >Home</Home>
                  </Link>

                
                  <Li4>/</Li4>
                  
                  <ContactTitle>Contact</ContactTitle>
                </List1>

                
                  
              </List> 



            </BoxOverlay>
          </Container1>
                    
                    
              
        </Div>

     

      </div>

   {/*Second Section*/}

      <Container2>

        <CompanyInfo>

          <Info1>

            <Logo1></Logo1>

            <CompanyAdress>Company Adress</CompanyAdress>

          </Info1>

          <Paragraph1>26 Edgefield Court
            <br></br>New Brunswick, NJ 08901
            <br></br>4463 Ash Avenue

          </Paragraph1>


        </CompanyInfo>


        <CompanyInfo1>

          <Info2>

            <Logo2></Logo2>

            <CompanyAdress2>Company Adress</CompanyAdress2>

          </Info2>

          <Paragraph2>Monday To Saturday - 10.00 - 
            <br></br>07.00
            <br></br>Sunday - Closed



          </Paragraph2>


        </CompanyInfo1>


        <CompanyInfo2>

          <Info3>

            <Logo3></Logo3>

            <CompanyAdress3>Company Adress</CompanyAdress3>

          </Info3>

          <Paragraph3>info@example.com
            <br></br>admin@example.com


          </Paragraph3>


        </CompanyInfo2>



        <CompanyInfo3>

          <Info4>

            <Logo4></Logo4>

            <CompanyAdress4>Company Adress</CompanyAdress4>

          </Info4>

          <Paragraph4>+90-80033-93704
            <br></br>+90-80033-96875

          </Paragraph4>


        </CompanyInfo3>



        



      </Container2>


      {/*THIRD SECTION*/}

      <Container3>

        <Container3SectionOne>

 <ContactForm>
          <FormInfo>
            Contact Form
          </FormInfo>

          <FormSendEmail>

          Send an Email
          </FormSendEmail>
        </ContactForm>

        <div>
          
          <Hr></Hr>


        </div>

        <Form>
  <FormInput >

    
    <Name>
       Name
    </Name>

    <Star>*</Star>
  
   

   <ParagraphInfo>
   
    <Input type="name"  required />
   </ParagraphInfo>
    
    
  </FormInput>


  <FormInput1 >
    <Name1>
       Email
    </Name1>
    
    <Star1>*</Star1>

    <ParagraphInfo1>

     
      <Input1 type="email" required />

   </ParagraphInfo1>

  </FormInput1>


    


{/*Second Inpust*/}

  <FormInput2 >
    <Name2>
       Subject
    </Name2>
    
    <Star2>*</Star2>

    <ParagraphInfo2>

      
      <Input2 type="text" required />

   </ParagraphInfo2>

  </FormInput2>

  {/*TEXT AREA*/}

    <TextAreaTitle>

      <Mesage>Message</Mesage>

      <Star3>*</Star3>

      <TextArea 
        rows="10" cols="57" placeholder="Your mesage" required>
      </TextArea>

    
    </TextAreaTitle>

    <ButtonArea> Send Email</ButtonArea>
      
    </Form>

    


   
  </Container3SectionOne>



  <ContactPicture src={ContactPic} alt="contactPic"/>



    </Container3>


    {/*Section*/}


    <Container4>
      
      <Map>
        
        <ContactMap/>

      </Map>

      
    </Container4>
      

      <ContactButton/>      


    </Main>             
                    
      
    )
  }    
           

                          
              
                



          
          
          
          
           
        

       

      

                

                  

                     
              

                  
                  


             
             


                   

                     

                               

                               
              

                        
                      

                    

                    
        
        

        
          
          

       


        
        

      
        

       
      
    