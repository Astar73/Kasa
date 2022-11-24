import React from "react"
import { Link } from "react-router-dom"
import logo from "../../images/LOGO.svg"

export default function Logo() {
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className="logo" />
            </Link>
        </div>
    )
}
