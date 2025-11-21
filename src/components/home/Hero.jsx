import React from 'react'
import { Container } from "react-bootstrap";
import SiteButton from '../common/SiteBtn';
import { FiPlusCircle } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";

function Hero() {
    
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
                                    <SiteButton
                                        text="Build Your Survey Now"
                                        link="/dashboard/create"
                                        icon={<FiPlusCircle size={18} />}
                                        color="#142c50"
                                        bgColor="#fff"
                                        borderColor="#142c50"
                                        hoverColor="#fff"
                                        hoverBg="#142c50"
                                        hoverBorder="#142c50"
                                        style={{ width: "260px", padding: "0.6rem 1.4rem" }}
                                    />
                                ) : (
                                    <SiteButton
                                        text="Get Started for Free"
                                        link="/register"
                                        icon={<FiUserPlus size={18} />}
                                        color="#142c50"
                                        bgColor="#fff"
                                        borderColor="#142c50"
                                        hoverColor="#fff"
                                        hoverBg="#142c50"
                                        hoverBorder="#142c50"
                                        style={{ width: "260px", padding: "0.6rem 1.4rem" }}
                                    />
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