import React, { useState } from "react";
import { Form, Button, Card, Container, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ResetPass() {
    const [showPassword, setShowPassword] = useState(false);
    const [Password, setPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setPassword(form.Password);
            console.log(`the password is:${Password}`);
            //  Here you can call your backend login API (e.g., using Axios)
            console.log("Login successful!");
            navigate("/"); 
        }

    };
    return (
          <div
      className='form-wrapper'
      style={{
           backgroundImage: "url(/images/form-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    > 
     <Container className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <Card className="shadow-lg p-4 rounded-4" style={{ width: "100%", maxWidth: "450px" }}>
          <Card.Body>
            <h3 className="text-center mb-4 fw-bold text-primary">Welcome Back</h3>
            <p className="text-center text-muted mb-4">
              Please login to your account
            </p>
  
            <Form noValidate  onSubmit={handleSubmit} className="text-start">
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
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                    <InputGroup>
                <Form.Control
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <Button
                  variant="outline-light border"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  {showPassword ? <FaEyeSlash color="gray" /> : <FaEye color="gray" />}
                </Button>
                </InputGroup>
                <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback>
              </Form.Group>
  
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check type="checkbox" label="Remember me" />
                <a href="/forgetpass" className="text-primary text-decoration-none small">
                  Forgot password?
                </a>
              </div>
  
              <div className="d-grid">
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="rounded-3 fw-semibold"
                >
                  Login
                </Button>
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
    )
}

export default ResetPass