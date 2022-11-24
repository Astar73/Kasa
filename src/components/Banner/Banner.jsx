import React from "react"

export default function Banner({ image, title }) {
    return (
        <div className="banner">
            <img className="banner__img" src={image} alt="Bannière" />
            <h1 className="banner__title">{title}</h1>
        </div>
    )
}
