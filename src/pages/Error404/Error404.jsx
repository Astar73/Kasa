import React from "react"
import { Link } from "react-router-dom"

export default function Error404() {
    return (
        <main className="error">
            <h1 className="error__title">404</h1>
            <p className="error__text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/">
                <p className="error__text-link">
                    Retourner sur la page d’accueil
                </p>
            </Link>
        </main>
    )
}
