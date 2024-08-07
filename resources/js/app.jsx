import './bootstrap';

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from './main/App';

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
