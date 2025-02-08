import React from "react"
import './../pages/Kudos/styles.css'

const KudosCard = ({data}) => {

    return (
        <div className="kudo-card">
            <p><strong>From:</strong>{data?.sender?.username}</p>
            <p><strong>Message:</strong> {data?.message}</p>
            <p className="date">Received on: {data?.created_at}</p>
        </div>
    )}

export default KudosCard