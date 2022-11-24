import React from "react"
import { Link } from "react-router-dom"

export default function Error404() {
    return (
        <main>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">
                <p>Retourner sur la page d’accueil</p>
            </Link>
        </main>
    )
}
