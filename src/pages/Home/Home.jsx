import React from "react"
import Banner from "../../components/Banner/Banner"
import image from "../../images/Banner.png"
import Card from "../../components/Card/Card"

export default function Home() {
    return (
        <main>
            <Banner image={image} title="Chez vous, partout et ailleurs" />
            <Card />
        </main>
    )
}
