import React from "react"
import Logo from "../Logo/Logo"

export default function Footer() {
    return (
        <footer className="footer">
            <Logo className="footer_logo" />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
