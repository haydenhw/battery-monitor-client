import React from 'react'
import api from "../services/api";

export default function PresentVoltageCard() {
  const [voltage, setVoltage] = React.useState( '')

  React.useEffect(() => {
    api.getPresentVoltage(setVoltage)
  }, [])

  return (
    <div className="data-card card mb-3">
      <div className="card-body">
        <h2>Present</h2>
        <div className="data-reading">
          <span className="v-large-font">{voltage}</span>
          <span>V</span>
        </div>
      </div>
    </div>
  )
}
