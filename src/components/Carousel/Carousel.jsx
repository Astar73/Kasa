import React from 'react'
import { useState } from 'react'
import leftArrow from '../../images/LeftArrow.svg'
import rightArrow from '../../images/RightArrow.svg'

export default function Carousel({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = slides.length
    const previousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    return (
        <div className="carousel">
            {slides.map((picture, index) => {
                return (
                    <img src={picture} alt="Logement" key={index} className={index === currentSlide ? 'carousel__visible' : 'carousel__invisible'} />
                )
            })}
            <button className="previous-slide" onClick={previousSlide}>
                <img src={leftArrow} alt="Flèche gauche" />
            </button>
            <button className="next-slide" onClick={nextSlide}>
                <img src={rightArrow} alt="Flèche droite" />
            </button>
        </div>
    )
}
