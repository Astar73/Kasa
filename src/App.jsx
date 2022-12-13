import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import FichesLogement from './pages/FichesLogement/FichesLogement.jsx'
import Error404 from './pages/Error404/Error404.jsx'
import About from './pages/About/About.jsx'
import Footer from './components/Footer/Footer.jsx'
import './style/main.scss'

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<FichesLogement />} />
                <Route path="*" element={<Error404 />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
