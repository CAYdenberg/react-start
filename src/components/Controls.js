import React from 'react'

function Controls(props) {
  return (
    <div className="controls">
      <button type="button" onClick={props.prevSlide} className="button">◀ Prev</button>
      <button type="button" onClick={props.nextSlide} className="button">Next ▶</button>
    </div>
  )
}

export default Controls
