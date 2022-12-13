import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../../data/logements.json'
import Carousel from '../../components/Carousel/Carousel'
import Dropdown from '../../components/Dropdown/Dropdown'
import Tags from '../../components/Tags/Tags'
import Rating from '../../components/Rating/Rating'
import Host from '../../components/Host/Host'

export default function FichesLogement() {
    const { id } = useParams()
    const logement = logements.find((logement) => logement.id === id)
    const { title, pictures, description, host, rating, location, equipments, tags } = logement

    return (
        <main className="logement">
            <Carousel slides={pictures} />
            <div className="logement__container">
                <div className="logement__content">
                    <div className="logement__header">
                        <h1 className="logement__title">{title}</h1>
                        <p className="logement__location">{location}</p>
                    </div>
                    <div className="logement__tags">
                        <Tags content={tags} />
                    </div>
                </div>
                <div className="logement__host-rate">
                    <Host hostName={host.name} hostPict={host.picture} />
                    <Rating stars={rating} />
                </div>
            </div>
            <div className="logement__dropdown-container">
                <Dropdown title="Description" content={description} />
                <Dropdown title="Équipements" content={equipments} isList={true} />
            </div>
        </main>
    )
}
