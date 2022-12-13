import React from 'react'

export default function Host(host) {
    return (
        <div className="host">
            <div className="host__name">{host.hostName}</div>
            <div className="host__container">
                <img className="host__container__img" src={host.hostPict} alt="Votre hôte" />
            </div>
        </div>
    )
}
