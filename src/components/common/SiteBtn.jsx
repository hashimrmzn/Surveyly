import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SiteButton({
  text = "Sign up for free",
  onClick,
  link,
  icon, // <-- accept icon
  color = "#fff",
  border = "2px solid",
  bgColor = "var(--primary-color, #142c50)",
  borderColor = "var(--primary-color, #142c50)",
  hoverColor = "var(--primary-color, #142c50)",
  hoverBg = "#fff",
  hoverBorder = "var(--primary-color, #142c50)",
  size = "md",
  style = {},
}) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    color,
    border,
    backgroundColor: bgColor,
    borderColor,
    transition: "all 0.3s ease",
    fontWeight: 600,
    padding: size === "lg" ? "1.5rem" : size === "sm" ? "0.75rem" : "1rem",
    borderRadius: "8px",
    textDecoration: "none",
    display: "flex",              // <-- required for icon + text layout
    alignItems: "center",         // align icon + text vertically
    gap: "8px",                   // space between icon and text
    justifyContent: "center",
    ...style,
  };

  const hoverStyle = isHovered
    ? {
        color: hoverColor,
        backgroundColor: hoverBg,
        borderColor: hoverBorder,
      }
    : {};

  const combinedStyle = { ...baseStyle, ...hoverStyle };

  const content = (
    <>
      {icon && <span>{icon}</span>}   {/* <-- ICON RENDERED HERE */}
      {text}
    </>
  );

  if (link) {
    return (
      <Link
        to={link}
        style={combinedStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
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
      {content}
    </Button>
  );
}

export default SiteButton;
