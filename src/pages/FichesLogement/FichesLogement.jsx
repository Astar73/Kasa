import React from "react"

export default function FichesLogement() {
    return (
        <div className="logement">
            <Carousel />
            <div className="logement__content">
                <div className="logement__header">
                    <h1 className="logement__title"></h1>
                    <p className="logement__location"></p>
                    <div className="logement__tags">
                        <Tags />
                    </div>
                </div>
                <div className="logement__host-rate">
                    <Host />
                    <Rating />
                </div>
            </div>
            <div className="logement__collapse">
                <Collapse />
                <Collapse />
            </div>
        </div>
    )
}
