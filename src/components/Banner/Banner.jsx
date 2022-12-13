import React from 'react'

export default function Banner({ image, title }) {
    return (
        <>
            <div className="banner filter" style={{ background: `url(${image})` }}></div>
            <div className="banner--mobile filter"></div>
            <h1 className="banner__title">{title}</h1>
        </>
    )
}
