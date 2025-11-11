import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  Container,
  Card,
  Spinner,
} from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import the API function
import userApi from "../api/userApi";

function CreateAccount() {
  const [validated, setValidated] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // loading state
  const [serverError, setServerError] = useState(""); // server error
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const password = form.elements["examplePass.ControlInput1"].value;

    // Password validation
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordError(""); // reset password error
    setServerError(""); // reset server error

    let valid = true;

    if (password.length < minLength) {
      setPasswordError("Password must be at least 8 characters long.");
      valid = false;
    } else if (!hasUppercase) {
      setPasswordError("Password must contain at least one uppercase letter.");
      valid = false;
    } else if (!hasNumber) {
      setPasswordError("Password must contain at least one number.");
      valid = false;
    } else if (!hasSpecialChar) {
      setPasswordError("Password must contain at least one special character.");
      valid = false;
    }

    if (form.checkValidity() === false || !valid) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // Collect form data
    const userData = {
      firstName: form.elements.validationCustom01.value,
      lastName: form.elements.validationCustom02.value,
      email: form.elements["exampleForm.ControlInput1"].value,
      password,
    };

    try {
      setLoading(true);
      const res = await userApi.register(userData);
      console.log("✅ Registration successful:", res);

      // Redirect to home after success
      navigate("/");
    } catch (err) {
      console.error("❌ Registration failed:", err);
      // Show server error message if available
      setServerError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
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
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="shadow-lg p-4 rounded-4" style={{ width: "100%", maxWidth: "700px" }}>
          <Card.Body>
            <h3 className="text-center fw-bold text-primary">Create Your Account</h3>

            <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-start">
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control required type="text" placeholder="John" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control required type="text" placeholder="Doe" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="examplePass.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      required
                    />
                    <Button
                      variant="outline-light border"
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                    >
                      {showPassword ? <FaEyeSlash color="gray" /> : <FaEye color="gray" />}
                    </Button>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                  {passwordError && <div className="text-danger mt-1">{passwordError}</div>}
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="I agree to the terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>

              {serverError && <div className="text-danger mb-2">{serverError}</div>}

              <div className="d-grid">
                <Button type="submit" variant="primary" size="lg" className="rounded-3 fw-semibold" disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : "Create Account"}
                </Button>
              </div>

              <div className="text-center mt-3">
                <span className="text-muted">
                  Already have an account?{" "}
                  <a href="/login" className="text-primary text-decoration-none fw-semibold">
                    Login
                  </a>
                </span>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CreateAccount;
