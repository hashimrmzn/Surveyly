import React from 'react'
import { Routes, Route } from "react-router-dom";
import Analytics from './Analytics';
import MySurveys from './MySurveys';
import CreateSurvey from './CreateSurvey';
function Dashboard_Window() {
    return (
        <>
       
            <Routes>
                <Route path="create" element={<CreateSurvey />} />
                <Route path="surveys" element={<MySurveys />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="*" element={<div className="text-xl">Welcome to your dashboard</div>} />
            </Routes>
            
   
        </>
    )
}

export default Dashboard_Window