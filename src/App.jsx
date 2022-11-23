import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import FichesLogement from "./pages/FichesLogement/FichesLogement.jsx"
import Error404 from "./pages/Error404/Error404.jsx"
import About from "./pages/About/About.jsx"

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<FichesLogement />} />
                    <Route path="/logement/:id" element={<Error404 />} />
                    <Route path="*" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
