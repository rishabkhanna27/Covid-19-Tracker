import React, {Component} from 'react';
import {Card, CardDeck} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import styles from './About.module.css';
import {FooterPage} from '../../Footerfile/Footer'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from"mdbreact";
import img1 from '../../assets/about.jpeg';
import img2 from '../../assets/symptoms.jpg';
import img3 from '../../assets/pevention.png';
import imag1 from '../../assets/slide1.jpg';
import imag2 from '../../assets/slide2.jpg';
import imag3 from '../../assets/slide3.png';
import imag4 from '../../assets/slide4.jpg';
import imag5 from '../../assets/slide5.png';
import imag6 from '../../assets/slide6.jpg';
import imag7 from '../../assets/slide7.jpg';

export class About extends Component{
    render(){
        return(
            <div className={styles.container}>
               
        <div className={styles.slide}>
          <div>
             <p id="int"className={styles.head}><span role="img" aria-label="house">&#128567;</span><u><b>ABOUT COVID-19</b></u></p></div>
             <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={7}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
      <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={imag1}
              alt="First slide"
            />
          </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={imag2}
              alt="Second slide"
            />
          </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={imag3}
              alt="Third slide"
            />
          </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src={imag4}
              alt="Fourth slide"
            />
          </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
          <MDBView>
            <img
              className="d-block w-100"
              src={imag5}
              alt="Fifth slide"
            />
          </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
          <MDBView>
            <img
              className="d-block w-100"
              src={imag6}
              alt="Sixth slide"
            />
          </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="7">
          <MDBView>
            <img
              className="d-block w-100"
              src={imag7}
              alt="Seventh slide"
            />
          </MDBView>
          </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
</div>
<br></br>
<div>

<CardDeck className={styles.cardss}>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '15rem' }} variant="top" src={img1} />
    <Card.Body>
    <h1>INTRODUCTION</h1><br></br>
    The COVID-19 pandemic, also known as the coronavirus pandemic, 
      is an ongoing pandemic of coronavirus disease 2019 (COVID‑19) caused 
      by severe acute respiratory syndrome coronavirus 2 (SARS‑CoV‑2).<br></br><br></br>
      <Card.Title>  <Button href="#a" className="btn" variant="outline-danger"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>

  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '15rem' }} variant="top" src={img2} />
    <Card.Body>
    <h1>SYMPTOMS</h1><br></br>
    Symptoms of COVID-19 can be relatively non-specific and infected people may be asymptomatic. 
    The two most common symptoms are fever (88 per cent) and dry cough (68 per cent).<br></br><br></br>
      <Card.Title>  <Button href="#b" className="btn" variant="outline-danger"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>

  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '15rem' }} variant="top" src={img3} />
    <Card.Body>
    <h1>PREVENTION</h1><br></br>
    Strategies for preventing transmission of the disease include maintaining 
    overall good personal hygiene, washing hands, avoiding touching the eyes, nose, or mouth with unwashed hands etc.<br></br><br></br>
      <Card.Title>  <Button href="#c" className="btn" variant="outline-danger"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>

</CardDeck>

</div>
<div id="a" className={styles.main} ><p className={styles.header}><b><u>INTRODUCTION TO COVID‑19</u></b></p><br></br><img className={styles.h} src={img1} alt=""/><br></br><br></br>
            <div className={styles.text}><b>The COVID-19 pandemic, also known as the coronavirus pandemic, is an ongoing pandemic of coronavirus disease 2019 (COVID‑19)
 caused by severe acute respiratory syndrome coronavirus 2 (SARS‑CoV‑2).The outbreak was first identified in Wuhan, China,
 in December 2019. The World Health Organization declared the outbreak a Public Health Emergency of International Concern on 30 January, and a pandemic on 11 March. As of 14 May 2020, more than 4.37 million cases of COVID-19 have been reported in over 188 countries and territories, resulting in more than 297,000 deaths. More than 1.56 million people have recovered.

The virus is primarily spread between people during close contact, most often via small droplets produced by coughing,
 sneezing, and talking.The droplets usually fall to the ground or onto surfaces rather than travelling through air over long distances. Less commonly, people may become infected by touching a contaminated surface and then touching their face.It is most contagious during the first three days after the onset of symptoms, although spread is possible before symptoms appear,
  and from people who do not show symptoms..</b><br></br><br></br><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div>
</div>
<div id="b" className={styles.main} ><p className={styles.header}><b><u>SYMPTOMS OF COVID‑19</u></b></p><br></br><img className={styles.h} src={img2} alt=""/><br></br><br></br>
            <div className={styles.text}><b>Symptoms of coronavirus can be relatively non-specific and infected people may be asymptomatic.  The
                 two most common symptoms are fever (88 per cent) and dry cough (68 per cent). Less common 
symptoms include fatigue, respiratory sputum production (phlegm), loss of the sense of smell,
loss of taste, shortness of breath, muscle and joint pain, sore throat, headache, chills, vomiting,
 coughing out blood, and diarrhea.
Approximately one in five people become seriously ill and has difficulty breathing.Emergency symptoms include 
difficulty breathing, persistent chest pain or pressure, sudden confusion, difficulty waking, and bluish face or
 lips; immediate medical attention is advised if these symptoms are present.Further development of the disease
  can lead to complications including pneumonia, acute respiratory distress syndrome, sepsis, septic shock, and
   kidney failure.
Some infected people have no symptoms, known as asymptomatic or presymptomatic carriers.
Transmission from such a carrier can occur. Health authorities have issued public notices that people with 
se contact to confirmed infected people should be quarantined and closely monitored.Chinese estimates
the asymptomatic ratio range from few to 44 per cent.The usual incubation period (the time between infection
 and symptom onset) ranges from one to 14 days, and is most commonly five days.</b><br></br><br></br><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div>
 </div>
 <div id="c" className={styles.main} ><p className={styles.header}><b><u>PREVENTION OF COVID‑19</u></b></p><br></br><img className={styles.h} src={img3} alt=""/><br></br><br></br>
 <div className={styles.text}><b>
 Strategies for preventing transmission of the disease include maintaining overall good personal hygiene,
washing hands, avoiding touching the eyes, nose, or mouth with unwashed hands, and coughing or sneezing into a 
tissue, and putting the tissue directly into a waste container. Those who may already have the infection have been
advised to wear a surgical mask in public.Physical distancing measures are also recommended to prevent 
transmission.Health care providers taking care of someone who may be infected are recommended to use 
standard precautions, contact precautions, and eye protection.
Many governments have restricted or advised against all non-essential travel to and from countries and areas affected
the outbreak.The virus has already spread within communities in large parts of the world, with many not knowing
re or how they were infected.<br></br>Basic measures to keep in mind:<div className={styles.points} ><br></br>1) Hand washing<br></br>2) Surface cleaning<br></br>3) Face masks and respiratory hygiene<br></br>
4)Social distancing  <br></br>   5)Self Isolation</div> </b><br></br><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div>
 </div>
 <FooterPage/>

</div>

        )
    }
}
export default About;