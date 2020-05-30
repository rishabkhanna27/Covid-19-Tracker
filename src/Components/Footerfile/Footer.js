import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const FooterPage = () => {
  return (
    <div>
    <MDBFooter color="blue" className="font-small pt-4 bg-dark mt-4">
      <MDBContainer fluid className="text-center bg-info text-md-left">
      <MDBCol className="foote"> <h1 className="title">API'S USED FOR COVID-19 TRACKER :- 
      <a href="https://api.covid19india.org/"><i className="f">|| India1 - </i></a>
            <a href="https://disease.sh/v2/all"><i className="f">World1 - </i></a>
            <a href="https://covid19.mathdro.id/api"><i className="f">World2 ||</i></a>
      </h1>
      </MDBCol>
       <MDBRow>

<div className="container-fluid bg-info">
    <div className="contain">
      {/* <div className="row"> */}
        {/* <div className="col-md-6"> */}
        {/* <div className="d-inline-block"> */}
          <h1 className="foot"><u>Made By: Rishab Khanna</u>
          
              <a href="https://github.com/rishabkhanna27" className="text-dark"><p className="fa fa-2x fa-fw fa-github"></p></a>
              <a href="https://www.linkedin.com/in/rishabkhanna27/" className="text-dark"><p className="fa fa-2x fa-fw fa-linkedin"></p></a>
              <a href="https://www.instagram.com/rishabkhanna.27/" className="text-dark"><p className="fa fa-2x fa-fw fa-instagram"></p></a>
              <a href="https://www.facebook.com/rishabkhanna27" className="text-dark"><p className="fa fa-2x fa-fw fa-facebook"></p></a></h1>

                {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            </div>
          </div>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;