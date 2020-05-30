import React, {Component} from 'react';
import styles from './Myths.module.css';
import Button from 'react-bootstrap/Button'
import {Card, CardDeck} from "react-bootstrap";
import {FooterPage} from '../../Footerfile/Footer'

import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';
import img9 from '../../assets/9.jpg';
import img10 from '../../assets/10.png';
import img11 from '../../assets/11.png';
import img12 from '../../assets/12.png';
import img13 from '../../assets/13.png';
import img14 from '../../assets/14.png';
import img15 from '../../assets/15.png';
import img16 from '../../assets/16.png';

import img20 from '../../assets/20.png';
import img21 from '../../assets/21.png';
import img22 from '../../assets/22.png';
import img23 from '../../assets/23.png';
import img24 from '../../assets/24.png';
import img25 from '../../assets/25.png';
import img26 from '../../assets/26.jpg';
import img27 from '../../assets/27.png';
import img28 from '../../assets/28.png';
import img29 from '../../assets/29.jpg';
import img30 from '../../assets/30.png';
import img31 from '../../assets/31.png';
import img32 from '../../assets/32.png';
import img33 from '../../assets/33.png';
import img35 from '../../assets/35.png';



export class Myth extends Component{
    render(){
        return(
<div className={styles.container}>

<div className={styles.intro} id="int"><b><span role="img" aria-label="house">&#128565;</span><u>COVID-19 MYTH BUSTERS</u></b></div>

<div className={styles.text}>

<CardDeck className={styles.cardss}>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img1} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#a" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>

  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img2}  alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#b" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>

  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img3} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#c" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img4} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#d"className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>

</CardDeck>


<CardDeck className={styles.cardss}>

  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img5} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#e" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img6} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#f" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img7} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#g" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img8} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#h" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
</CardDeck>


<CardDeck className={styles.cardss}>

  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img9} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#i" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img10} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#j" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img11} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#k" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img12} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#l" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
</CardDeck>


<CardDeck className={styles.cardss}>

  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img13} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#m" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img14} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#n" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img15} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#o" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
  <Card className={styles.hov}>
    <Card.Img className="img-thumbnail" style={{ height: '23rem' }} variant="top" src={img16} alt=""/>
    <Card.Body>
      <Card.Title>  <Button href="#p" className="btn-lg" variant="outline-success"><b>Click here for more information</b></Button></Card.Title>
    </Card.Body>
  </Card>
  
</CardDeck>
</div>
<div className={styles.textt}>

            <div id="a" className={styles.main} ><p className={styles.header}><b><u>Adding pepper to your soup or other meals DOES NOT prevent or cure COVID-19</u></b></p><br></br>
            <p><b>Hot peppers in your food, though very tasty, cannot prevent or cure COVID-19. 
            The best way to protect yourself against the new coronavirus is to keep at least 1 metre away from others and to wash your hands frequently and thoroughly. 
            It is also beneficial for your general health to maintain a balanced diet, stay well hydrated, exercise regularly and sleep well.</b></p><br></br><br></br>
            <img className={styles.h} src={img25} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="b" className={styles.main} ><p className={styles.header}><b><u>Can eating garlic help prevent infection with the new coronavirus?</u></b></p><br></br>
            <p><b>Garlic is a healthy food that may have some antimicrobial properties. However, there is no evidence from the current outbreak that eating garlic 
              has protected people from the new coronavirus.</b></p><br></br><br></br>
            <img className={styles.h} src={img20} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="c" className={styles.main}><p className={styles.header}><b><u>Are hand dryers effective in killing the new coronavirus?</u></b></p><br></br>
            <p><b>No. Hand dryers are not effective in killing the 2019-nCoV. To protect yourself against the new coronavirus, 
            you should frequently clean your hands with an alcohol-based hand rub or wash them with soap and water. 
            Once your hands are cleaned, you should dry them thoroughly by using paper towels or a warm air dryer.</b></p><br></br><br></br>
            <img className={styles.h} src={img35} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="d" className={styles.main}><p className={styles.header}><b><u>Can regularly rinsing your nose with saline help prevent infection with the new coronavirus?</u></b></p><br></br>
            <p><b>No. There is no evidence that regularly rinsing the nose with saline has protected people from infection with the new coronavirus. 
            There is some limited evidence that regularly rinsing nose with saline can help people recover more quickly from the common cold. However, 
            regularly rinsing the nose has not been shown to prevent respiratory infections</b></p><br></br><br></br>
            <img className={styles.h} src={img21} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="e" className={styles.main}><p className={styles.header}><b><u>  COVID-19 IS NOT transmitted through houseflies  </u></b></p><br></br>
            <p><b>To date, there is no evidence or information to suggest that the COVID-19 virus transmitted through houseflies. The virus that cause 
              COVID-19 spreads primarily through droplets generated when an infected person coughs, sneezes or speaks. You can also become infected 
              by touching a contaminated surface and then touching your eyes, nose or mouth before washing your hands. To protect yourself, keep at 
              least 1-metre distance from others and disinfect frequently-touched surfaces. Clean your hands thoroughly and often and avoid touching 
              your eyes, mouth and nose. </b></p><br></br><br></br>
              <img className={styles.h} src={img22} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="f" className={styles.main}><p className={styles.header}><b><u>  Drinking methanol, ethanol or bleach DOES NOT prevent or cure COVID-19 and can be extremely dangerous  </u></b></p><br></br>
            <p><b>Methanol, ethanol, and bleach are poisons. Drinking them can lead to disability and death. Methanol, ethanol, and bleach are sometimes used 
              in cleaning products to 
              kill the virus on surfaces – however you should never drink them. They will not kill the virus in your body and they will harm your internal organs.
              To protect yourself against COVID-19, disinfect objects and surfaces, especially the ones you touch regularly. You can use diluted bleach 
              or alcohol for that. Make sure you clean your hands frequently and thoroughly and avoid touching your eyes, mouth and nose</b></p><br></br><br></br>
              <img className={styles.h} src={img23} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="g" className={styles.main}><p className={styles.header}><b><u>  Spraying and introducing bleach or another disinfectant into your body 
              WILL NOT protect you against COVID-19 and can be dangerous  </u></b></p><br></br>
            <p><b>Do not under any circumstance spray or introduce bleach or any other disinfectant into your body. These substances can be poisonous 
              if ingested and cause irritation and damage to your skin and eyes.Bleach and disinfectant should be used carefully to disinfect 
              surfaces only. Remember to keep chlorine (bleach) and other disinfectants out of reach of children</b></p><br></br><br></br>
              <img className={styles.h} src={img24} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="h" className={styles.main}><p className={styles.header}><b><u> Adding pepper to your soup or other meals DOES NOT prevent or cure COVID-19   </u></b></p><br></br>
            <p><b>Hot peppers in your food, though very tasty, cannot prevent or cure COVID-19. The best way to protect yourself against the new 
              coronavirus is to keep at least 1 metre away from others and to wash your hands frequently and thoroughly. It is also beneficial 
              for your general health to maintain a balanced diet, stay well hydrated, exercise regularly and sleep well.</b></p><br></br><br></br>
              <img className={styles.h} src={img25} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="i" className={styles.main}><p className={styles.header}><b><u>   Being able to hold your breath for 10 seconds or more without coughing or feeling discomfort 
              DOES NOT mean you are free from the coronavirus disease (COVID-19) or any other lung disease. </u></b></p><br></br>
            <p><b>The most common symptoms of COVID-19 are dry cough, tiredness and fever. Some people may develop more severe forms of the disease, 
              such as pneumonia. The best way to confirm if you have  the virus producing COVID-19 disease is with a laboratory test.  
              You cannot confirm it with this breathing exercise, which can even be dangerous.</b></p><br></br><br></br>
            <img className={styles.h} src={img26} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="j" className={styles.main}><p className={styles.header}><b><u>  Cold weather and snow CANNOT kill the new coronavirus.  </u></b></p><br></br>
            <p><b>There is no reason to believe that cold weather can kill the new coronavirus or other diseases. The normal human body temperature remains around 36.5°C to 37°C, 
              regardless of the external temperature or weather. The most effective way to protect yourself against the new coronavirus is by frequently cleaning 
              your hands with alcohol-based hand rub or washing them with soap and water.</b></p><br></br><br></br>
            <img className={styles.h} src={img27} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="k" className={styles.main}><p className={styles.header}><b><u>   Taking a hot bath does not prevent the new coronavirus disease </u></b></p><br></br>
            <p><b>Taking a hot bath will not prevent you from catching COVID-19. Your normal body temperature remains around 36.5°C to 37°C, regardless 
              of the temperature of your bath or shower. Actually, taking a hot bath with extremely hot water can be harmful, as it can burn you. 
              The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may 
              be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose.</b></p><br></br><br></br>
            <img className={styles.h} src={img28} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="l" className={styles.main}><p className={styles.header}><b><u>  You can recover from the coronavirus disease (COVID-19). Catching the new coronavirus DOES NOT mean you will have it for life.  </u></b></p><br></br>
            <p><b>Most of the people who catch COVID-19 can recover and eliminate the virus from their bodies. If you catch the disease, make sure you treat your symptoms. If you have cough, fever, 
              and difficulty breathing, seek medical care early – but call your health facility by telephone first. Most patients recover thanks 
              to supportive care.</b></p><br></br><br></br>
              <img className={styles.h} src={img29} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="m" className={styles.main}><p className={styles.header}><b><u> Exposing yourself to the sun or to temperatures higher than 25C degrees DOES NOT prevent the coronavirus disease (COVID-19)   </u></b></p><br></br>
            <p><b>You can catch COVID-19, no matter how sunny or hot the weather is. Countries with hot weather have reported cases of COVID-19. To protect yourself,
              make sure you clean your hands frequently and thoroughly and avoid touching your eyes, mouth, and nose.  </b></p><br></br><br></br>
            <img className={styles.h} src={img30} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="n" className={styles.main}><p className={styles.header}><b><u>  Ultra-violet (UV) lamps should not be used to disinfect hands or other areas of your skin  </u></b></p><br></br>
            <p><b>UV radiation can cause skin irritation and damage your eyes.
            Cleaning your hands with alcohol-based hand rub or washing your hands with soap and water are the most effective
             ways to remove the virus. </b></p><br></br><br></br>
            <img className={styles.h} src={img31} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="o" className={styles.main}><p className={styles.header}><b><u>  Does the new coronavirus affect older people, or are younger people also susceptible?  </u></b></p><br></br>
            <p><b>People of all ages can be infected by the new coronavirus (2019-nCoV). Older people, and people with pre-existing medical conditions (such as asthma, 
            diabetes, heart disease) appear to be more vulnerable to becoming severely ill with the virus. WHO advises people of all 
            ages to take steps to protect themselves from the virus, for example by following good hand hygiene and good respiratory hygiene.</b></p><br></br><br></br>
            <img className={styles.h} src={img32} alt=""/><br></br><br></br>
            </div><div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            <div id="p" className={styles.main}><p className={styles.header}><b><u>   Are antibiotics effective in preventing and treating the new coronavirus? </u></b></p><br></br>
            <p><b>No, antibiotics do not work against viruses, only bacteria.The new coronavirus (2019-nCoV) is a virus and, therefore, 
              antibiotics should not be used as a means of prevention or treatment.However, if you are hospitalized for the 2019-nCoV, 
              you may receive antibiotics because bacterial co-infection is possible.</b></p><br></br><br></br>
            <img className={styles.h} src={img33} alt=""/><br></br><br></br>
            </div>
            <div className={styles.buttonn} ><Button href="#int" className="btn-lg" variant="dark"><b>GO TO THE TOP</b></Button><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></div><hr></hr>
            </div>
            <FooterPage/>

            </div>

        )
    }
}
export default Myth;