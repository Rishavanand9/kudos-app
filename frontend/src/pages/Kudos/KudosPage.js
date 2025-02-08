import React, { useState } from 'react';
import './styles.css';
import KudosCard from '../../components/KudosCard';
import ProfileCard from '../../components/ProfileCard';

const KudosPage = () => {
    return (
        <div className="kudos-page">
            <header>
                <h1>Your Kudos</h1>
                <a href="/dashboard" className="back-link">← Back to Dashboard</a>
            </header>

            <ProfileCard />

            <div className="kudos-list">
                <h2>Received Kudos</h2>

                <KudosCard name="Alex Smith" message={" Your help was invaluable. Thanks!"} date={"2024-02-07"} />

            </div>
        </div>
    );
}

export default KudosPage