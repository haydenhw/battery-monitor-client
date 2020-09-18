import React from "react";

function DashboardView () {
  return (
    <div className="data-view v-view">
      <h1 className="mb-4">Battery Voltage</h1>
      <div className="data-card card mb-3">
        <div className="card-body">
          <h2>Present</h2>
          <div className="data-reading">
            <span className="v-large-font">12.6</span>
            <span>V</span>
          </div>
        </div>
      </div>
      <div className="data-card card">
        <div className="card-body">
          <h2>History</h2>
          <span>
            <img className="w-100"
                 src="https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA"
                 alt=""/>
          </span>
        </div>
      </div>
    </div>
    )
}

export default DashboardView
