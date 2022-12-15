import React from 'react'

export default function Tags({ content }) {
    return (
        <div className="tag">
            {content.map((content) => {
                return (
                    <p key={content} className="tag__content">
                        {content}
                    </p>
                )
            })}
        </div>
    )
}
