import React from 'react'

export default function Tags({ content }) {
    return (
        <div className="tag">
            {content.map((content) => {
                return <p className="tag__content">{content}</p>
            })}
        </div>
    )
}
