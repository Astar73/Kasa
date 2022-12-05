import React from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import BannerImg from '../../images/Banner.png'

export default function Home() {
    return (
        <main className="home">
            <Banner image={BannerImg} title="Chez vous, partout et ailleurs" />
            <Card />
        </main>
    )
}
