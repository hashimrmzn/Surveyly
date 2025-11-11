import React from 'react'
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SiteButton from '../common/SiteBtn';
function Hero() {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");
    return (
        <>
            <section className='hero-sec min-height'
                style={{

                    backgroundImage: "url(/images/hero-bg.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className='container'>
                    <Container className="py-5 center-container ">
                        <div>
                            <h1 className="mb-5" style={{ color: "var(--primary-color, #142c50)" }}>
                                A simple and powerful online survey tool
                            </h1>


                            <p className="mb-5 fs-5 text-muted">
                                Create free online surveys with unlimited questions and responses!
                            </p>

                            {

                                isLoggedIn ? (
                                    <>
                                        <SiteButton text="Build Your Survey Now" link="/dashboard" />
                                    </>
                                ) : (

                                    <>
                                        <SiteButton text="Get Started for Free" link="/register" />
                                    </>
                                )


                            }

                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Hero