import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="nav__accueil">
                Accueil
            </Link>
            <Link to="/about" className="nav__about">
                À propos
            </Link>
        </nav>
    )
}
