import React from "react"
import './../pages/Dashboard/styles.css'
import { currentUser } from "../constants"

const ProfileCard = () => {

    return (
        <div className="info-box">
            <p><strong>Name:</strong> {currentUser.username}</p>
            <p><strong>Id:</strong> {currentUser.id}</p>
            <p><strong>Email:</strong> {currentUser.email}</p>
            <p><strong>Organization:</strong> {currentUser.organization}</p>
            <p><strong>Kudos Remaining:</strong> {currentUser.kudos_remaining}</p>
        </div>
    )
}

export default ProfileCard