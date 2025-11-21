import React from 'react'
import { Container, Col,Image,Row } from "react-bootstrap";
function SurveyCreators() {
    return (
        <>

         <Container className="py-5"> 
           <p
  style={{
    fontSize: "1.25rem",         
    lineHeight: "1.8",           
    color: "#4a4a4a",                  
    margin: "2rem 0",               
    fontWeight: "400",
    textAlign:"center"          
  }}
>
  From global enterprises to individual creators — people everywhere use
  <span style={{ fontWeight: "600", color: "#142c50",fontSize:"24px" }}> Surveyly </span>
  to turn feedback into action.
</p>

      <Row className="justify-content-center align-items-center g-4 text-center " style={{ maxWidth: "800px", margin: "0 auto" }}>
        {[
          "amazon.svg",
          "american_red_cross.svg",
          "hilton.svg",
          "nasa.svg",
          "stanford.svg",
          "walt_disney.svg",
        ].map((logo, index) => (
          <Col key={index} xs={6} md={4} lg={2}>
            {/* xs=2 per row on mobile (6 cols), md=3 per row on tablet (4 cols), lg=6 per row on desktop (2 cols) */}
            <Image
              src={`/images/${logo}`}
              alt={logo.replace(".svg", "")}
              fluid
              className="opacity-75 hover-opacity"
              style={{ maxHeight: "70px", objectFit: "contain" }}
            />
          </Col>
        ))}
      </Row>
    </Container>
        </>
    )
}

export default SurveyCreators