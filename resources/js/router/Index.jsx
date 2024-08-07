import React from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/Home"; // Corrige la importación
import NotFoundPage from "../pages/Not-Found"; // Corrige la importación

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default Index
