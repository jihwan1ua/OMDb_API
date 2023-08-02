import React from 'react'
import spinner from './spinner.gif'

function Spinner() {
  return (
    <div>
        <img
            src={spinner}
            // double curly brackets will represents JS object being created inside of jsx. And also for CSS.
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt="Loading..."
        />
    </div>
  )
}

export default Spinner
