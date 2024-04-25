import React from 'react'

export default function CreativesList({ creatives }) {
  return (
    <div className="creatives-list">
        {creatives.map((creative, index) => (
            <div className="creative" key={index}  style={{ background: creative.color }}>
                <h2>{creative.title}</h2>
                <p className='creative-sub'>{creative.subtitle}</p>
            </div>
        ))}
    </div>
  )
}
