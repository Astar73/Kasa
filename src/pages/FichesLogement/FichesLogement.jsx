import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../../data/logements.json'
import aboutDropdown from '../../data/about-dropdown.json'
import Carousel from '../../components/Carousel/Carousel'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function FichesLogement() {
    const { id } = useParams()
    const logement = logements.find((logement) => logement.id === id)
    const { title, pictures, description, host, rating, location } = logement

    return (
        <main className="logement">
            <Carousel slides={pictures} />
            <div className="logement__content">
                <div className="logement__header">
                    <h1 className="logement__title">{title}</h1>
                    <p className="logement__location">{location}</p>
                    <div className="logement__tags"></div>
                </div>
                <div className="logement__host-rate"></div>
            </div>
            <div className="logement__dropdown">
                <Dropdown />
                <Dropdown />
            </div>
        </main>
    )
}
