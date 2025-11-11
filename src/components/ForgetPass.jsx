import React, { useState } from "react";
import { Form, Button, Card, Container, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ForgetPass() {
      const [validated, setValidated] = useState(false);
    
    const navigate = useNavigate();
     const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      //  Here you can call your backend login API (e.g., using Axios)
      console.log("Login successful!");
      navigate("/"); // Example redirect
    }

    setValidated(true);
  };
  return (
   <>
       <div
      className='form-wrapper'
      style={{
            backgroundImage: "url(/images/form-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     <Container className="d-flex justify-content-center align-items-center vh-100 ">
         <Card className="shadow-lg  p-4 rounded-4" style={{ width: "100%", maxWidth: "450px" }}>
           <Card.Body>

             <p className="text-start text-muted mb-4">
               Please enter your email
             </p>
   
             <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-start">
               <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <InputGroup hasValidation>
                   <InputGroup.Text>@</InputGroup.Text>
                   <Form.Control
                     required
                     type="email"
                     placeholder="Enter your email"
                   />
                   <Form.Control.Feedback type="invalid">
                     Please enter a valid email.
                   </Form.Control.Feedback>
                 </InputGroup>
               </Form.Group>
   
   
             
   
               <div className="d-grid">
                 <Button
                   variant="primary"
                   type="submit"
                   size="lg"
                   className="rounded-3 fw-semibold"
                 >
                   Send
                 </Button>
               </div>
   <div className="text-center mt-3">
                 <span className="text-muted">
                   Login?{" "}
                   <a
                     href="/login"
                     className="text-primary text-decoration-none fw-semibold"
                   >
                     Login
                   </a>
                 </span>
               </div>
               <div className="text-center mt-3">
                 <span className="text-muted">
                   Don’t have an account?{" "}
                   <a
                     href="/register"
                     className="text-primary text-decoration-none fw-semibold"
                   >
                     Create Account
                   </a>
                 </span>
               </div>
             </Form>
           </Card.Body>
         </Card>
       </Container>
   </div>
   </>
  )
}

export default ForgetPass