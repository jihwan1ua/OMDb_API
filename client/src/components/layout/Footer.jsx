import React from 'react'

// inspired by Yaser AlAzem
// https://www.youtube.com/watch?v=Ia0WWc5dyLE&list=PLG3RxIUKLJlbDDGeeoUCkinS2DUybp_1o&ab_channel=YaserAz

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
            <div className="footer p-3 mt-4 text-center bg-dark text-light">
                Developed By: &nbsp;
                <span className="text-warning font-weight-normal">
                    Ji Hwan Kim
                </span>
                , Using Python Djano, React JS, and Redux JS
                integrated with external movies data API &nbsp;
                <a href="http://www.omdbapi.com" target="_blank">
                    OMDB
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
