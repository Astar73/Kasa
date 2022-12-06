import React from 'react'

export default function Banner({ image, title }) {
    return (
        <>
            <div className="banner filter" style={{ backgroundImage: `url(${image})` }}></div>
            <h1 className="banner__title">{title}</h1>
        </>
    )
}
