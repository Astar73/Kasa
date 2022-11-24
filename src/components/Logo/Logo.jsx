import React from "react"
import { Link } from "react-router-dom"

export default function Logo() {
    return (
        <div>
            <Link to="/">
                <img src="../images/LOGO.svg" alt="Logo Kasa" />
            </Link>
        </div>
    )
}
