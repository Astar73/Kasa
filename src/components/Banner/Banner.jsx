import React from 'react'

export default function Banner({ image, title }) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <h1 className="banner__title">{title}</h1>
        </div>
    )
}
