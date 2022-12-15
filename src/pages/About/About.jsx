import React from 'react'
import Banner from '../../components/Banner/Banner'
import BannerImg from '../../images/AboutBanner.png'
import aboutDropdown from '../../data/about-dropdown.json'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function About() {
    return (
        <main className="about">
            <Banner image={BannerImg} title="" />
            {aboutDropdown.map((text, id) => {
                return <Dropdown key={id} title={text.title} content={text.content} />
            })}
        </main>
    )
}
