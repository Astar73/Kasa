import React from 'react'
import { useState } from 'react'
import arrow from '../../images/TopArrow.svg'

export default function Dropdown({ title, content, isList }) {
    const [active, setActive] = useState(true)

    const activeDropdown = () => {
        setActive(!active)
    }

    return (
        <div className={`dropdown ${active && 'active'}`}>
            <div className="dropdown__title" onClick={activeDropdown}>
                {title}
                <span className="dropdown__icon">
                    <img src={arrow} alt="Flèche vers le haut" />
                </span>
            </div>
            <div className="dropdown__content">
                {isList ? (
                    <ul>
                        {content.map((value) => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                ) : (
                    content
                )}
            </div>
        </div>
    )
}
