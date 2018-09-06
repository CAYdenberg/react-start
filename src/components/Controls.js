import React from 'react'

/**
 * Props:
 * prevSlide - Function
 * nextSlide - Function
 * currentSlide - Number
 * totalSlides - Number
 */

function Controls(props) {
  return (
    <div className="controls">

      {props.currentSlide > 0 &&
        <button type="button" onClick={props.prevSlide} className="button button--prev">
          Prev
        </button>
      }

      {props.currentSlide < props.totalSlides - 1 &&
        <button type="button" onClick={props.nextSlide} className="button button--next">
          Next
        </button>
      }

    </div>
  )
}

export default Controls
