import React from "react"
import './../pages/Kudos/styles.css'

const KudosCard = ({ name, message, date }) => {

    return (
        <div className="kudo-card">
            <p><strong>From:</strong>{name}</p>
            <p><strong>Message:</strong> {message}</p>
            <p className="date">Received on: {date}</p>
        </div>
    )}

export default KudosCard