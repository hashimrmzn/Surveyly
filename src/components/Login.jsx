import React, { useState } from "react";
import { Form, Button, Card, Container, InputGroup, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import userApi from "../api/userApi";

function Login() {
  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showVerifyLink, setShowVerifyLink] = useState(false); // ✅ Show verify link
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      setLoading(true);
      setErrorMsg("");
      setShowVerifyLink(false);

      const res = await userApi.login(formData); // backend login

      // If backend returns token
      if (res.accessToken) {
        localStorage.setItem("token", res.accessToken);
      }

      // Redirect to homepage or dashboard
      navigate("/");

    } catch (error) {
      console.error("Login failed:", error);

      const msg = error.response?.data?.message || "Login failed. Please try again.";
      setErrorMsg(msg);

      // Show "Verify Account" link if user is not verified
      if (msg === "Please verify your account first") {
        setShowVerifyLink(true);
      }
    } finally {
      setLoading(false);
      setValidated(true);
    }
  };

  return (
    <div
      className="form-wrapper"
      style={{
        backgroundImage: "url(/images/form-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="shadow-lg p-4 rounded-4" style={{ width: "100%", maxWidth: "450px" }}>
          <Card.Body>
            <h3 className="text-center mb-4 fw-bold text-primary">Welcome Back</h3>

            {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

            <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.password}
                    onChange={handleChange}
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

              <div className="d-grid mb-2">
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="rounded-3 fw-semibold"
                  disabled={loading}
                >
                  {loading ? <Spinner size="sm" animation="border" /> : "Login"}
                </Button>
              </div>

              {showVerifyLink && (
                <div className="text-center mb-2">
                  <span className="text-muted">
                    Didn't receive OTP?{" "}
                    <a
                      href="/verify-account"
                      className="text-primary text-decoration-none fw-semibold"
                      state={{ email: formData.email }} // pass email to verify page
                    >
                      Verify Account
                    </a>
                  </span>
                </div>
              )}

              <div className="text-center">
                <span className="text-muted">
                  Don’t have an account?{" "}
                  <a href="/register" className="text-primary text-decoration-none fw-semibold">
                    Create Account
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

export default Login;
