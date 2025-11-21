import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SiteButton from '../common/SiteBtn';
import { FiLogOut } from "react-icons/fi";

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false); 
        navigate("/");
    };

    useEffect(() => {
        const handleStorageChange = () => {
            setIsLoggedIn(!!localStorage.getItem("token"));
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return (
        <header className="site-header py-3 border-bottom">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo */}
                <div className="site-logo">
                    <Link to="/" className="fw-bold fs-4 text-decoration-none ">
                        Surveyly
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="header-menu d-flex align-items-center">
                    <Link to="/" className="me-3 text-decoration-none ">
                        Home
                    </Link>

                    {isLoggedIn ? (
                        <>
                            <Link to="/dashboard" className="me-3 text-decoration-none">
                                Dashboard
                            </Link>

                            <SiteButton
                                text="Logout"
                                onClick={handleLogout}
                                icon={<FiLogOut size={18} />} 
                                color="#142c50"
                                bgColor="#fff"
                                borderColor="#142c50"
                                hoverColor="#fff"
                                hoverBg="#142c50"
                                hoverBorder="#fff"
                                style={{ padding: "0.6rem 1.2rem" }}
                            />
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="me-3 text-decoration-none ">
                                Login
                            </Link>
                            <Link to="/register" className="me-3 text-decoration-none">
                                Sign Up
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
