import React from "react"
import Router from "./router/Index"
import '../css/app.css';
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const App = () => {
    return (
        <Router />
    );
}

export default App
