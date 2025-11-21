import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaPlusCircle, FaListAlt, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import {  Link } from "react-router-dom";
function Aside() {

    return (
        <>
            <div className='aside-bar d-flex align-self-stretch  bg-body-tertiary '>
                <aside className='shadow p-4 d-flex flex-column gap-3  fs-5 rounded-1 w-100'>
                    <div className='d-flex align-items-center gap-6'>
                         <Link
                                to="/dashboard"
                                className="d-flex align-items-center gap-2"
                                style={{ color: "var(--primary-color)" }}
                            >
                                <MdDashboard size={22} />
                                Dashboard
                            </Link>
                    </div>

                    <div className='aside-links'>
                        <nav className="d-flex flex-column mb-3">

                            <Link
                                to="/dashboard/create"
                                className="d-flex align-items-center gap-2"
                                style={{ color: "var(--primary-color)" }}
                            >
                                <FaPlusCircle />
                                Create New Survey
                            </Link>

                            <Link
                                to="/dashboard/surveys"
                                className="d-flex align-items-center gap-2 mt-2"
                                style={{ color: "var(--primary-color)" }}
                            >
                                <FaListAlt />
                                My Surveys
                            </Link>

                            <Link
                                to="/dashboard/analytics"
                                className=" d-flex align-items-center gap-2 mt-2"
                                style={{ color: "var(--primary-color)" }}
                            >
                                <FaChartBar />
                                Analytics / Responses
                            </Link>

                            
                           

                        </nav>
                    </div>


                </aside >
            </div >
        </>
    )
}

export default Aside