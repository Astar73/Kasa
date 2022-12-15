import star from '../../images/FillStar.svg'
import emptyStar from '../../images/EmptyStar.svg'
import React from 'react'

export default function Rating({ stars }) {
    const rate = [1, 2, 3, 4, 5]
    return (
        <div className="stars-container">
            {rate.map((number) =>
                number <= stars ? (
                    <img key={number.toString()} src={star} alt={stars} className="stars-container__star" />
                ) : (
                    <img key={number.toString()} src={emptyStar} alt={stars} className="stars-container__star" />
                )
            )}
        </div>
    )
}
