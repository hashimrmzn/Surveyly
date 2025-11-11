// src/components/VerifyAccount.jsx
import React, { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import userApi from "../api/userApi"; // use your centralized API calls

function VerifyAccount() {
  const location = useLocation();
  const navigate = useNavigate();

  // Pre-fill email if passed from registration page
  const [email, setEmail] = useState(location.state?.email || "");
  const [otpCode, setOtpCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle account verification
  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const res = await userApi.verifyOtp({ email, otpCode });
      setMessage("✅ Account verified successfully! Redirecting to login...");
      
      // Redirect to login after 2 seconds
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
        err.message ||
        "❌ Invalid or expired OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    setError("");
    setMessage("");
    setLoading(true);

    try {
      await userApi.resendOtp({ email });
      setMessage("✅ OTP resent successfully. Check your email.");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
        err.message ||
        "❌ Failed to resend OTP."
      );
    } finally {
      setLoading(false);
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
        <Card className="p-4 shadow" style={{ width: "400px" }}>
          <h4 className="text-center mb-3">Verify Your Account</h4>

          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleVerify}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={!!location.state?.email} // disable if prefilled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>OTP Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the OTP from your email"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100" disabled={loading}>
              {loading ? "Verifying..." : "Verify Account"}
            </Button>
          </Form>

          <Button
            variant="link"
            className="mt-2 p-0"
            onClick={handleResendOtp}
            disabled={loading || !email}
          >
            Resend OTP
          </Button>
        </Card>
      </Container>
    </div>
  );
}

export default VerifyAccount;
