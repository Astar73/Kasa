import React from 'react'
import { useState } from 'react'
import topArrow from '../../images/TopArrow.svg'

export default function Dropdown({ title, content }) {
    const [active, setActive] = useState(false)

    const activeDropdown = () => {
        setActive(!active)
    }

    return (
        <div className={`dropdown ${active && 'active'}`}>
            <div className="dropdown__title" onClick={activeDropdown}>
                {title}
                <span className="dropdown__icon">
                    <img src={topArrow} alt="Flèche vers le haut" />
                </span>
            </div>
            <div className="dropdown__content">{content}</div>
        </div>
    )
}
