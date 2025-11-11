import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * Global reusable button component
 * Props:
 * - text: string (button label)
 * - onClick: function (optional)
 * - link: string (optional — navigates if provided)
 * - color: string (text color)
 * - bgColor: string (background color)
 * - borderColor: string
 * - hoverColor: string (text color on hover)
 * - hoverBg: string (background color on hover)
 * - hoverBorder: string (border color on hover)
 * - size: "sm" | "lg" | undefined
 */
function SiteButton({
  text = "Sign up for free",
  onClick,
  link,
  color = "#fff",
  bgColor = "var(--primary-color, #142c50)",
  borderColor = "var(--primary-color, #142c50)",
  hoverColor = "var(--primary-color, #142c50)",
  hoverBg = "#fff",
  hoverBorder = "var(--primary-color, #142c50)",
  size = "md",
  style = {},
}) {
  const baseStyle = {
    color,
    backgroundColor: bgColor,
    borderColor,
    transition: "all 0.3s ease",
    fontWeight: 600,
    padding: size === "lg" ? " 1.5rem" : size === "sm" ? " 0.75rem" : "1rem",
    borderRadius: "8px",
    textDecoration: "none",
    ...style,
  };

  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = isHovered
    ? {
        color: hoverColor,
        backgroundColor: hoverBg,
        borderColor: hoverBorder,
      }
    : {};

  const combinedStyle = { ...baseStyle, ...hoverStyle };

  // If link prop is passed → render <Link>, else render <Button>
  if (link) {
    return (
      <Link
        to={link}
        style={combinedStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </Link>
    );
  }

  return (
    <Button
      onClick={onClick}
      style={combinedStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </Button>
  );
}

export default SiteButton;
