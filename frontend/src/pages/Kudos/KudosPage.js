import React, { useState } from 'react';
import './styles.css';

const KudosPage = () => {
    return (
      <div className="kudos-page">
        <header>
          <h1>Your Kudos</h1>
          <a href="/dashboard" className="back-link">← Back to Dashboard</a>
        </header>
  
        <div className="user-info">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
        </div>
  
        <div className="kudos-list">
          <h2>Received Kudos</h2>
  
          <div className="kudo-card">
            <p><strong>From:</strong> Jane Doe</p>
            <p><strong>Message:</strong> Great job on the project!</p>
            <p className="date">Received on: 2024-02-08</p>
          </div>
  
          <div className="kudo-card">
            <p><strong>From:</strong> Alex Smith</p>
            <p><strong>Message:</strong> Your help was invaluable. Thanks!</p>
            <p className="date">Received on: 2024-02-07</p>
          </div>
  
          <div className="kudo-card">
            <p><strong>From:</strong> Chris Johnson</p>
            <p><strong>Message:</strong> Keep up the amazing work!</p>
            <p className="date">Received on: 2024-02-06</p>
          </div>
        </div>
      </div>
    );
  }
  
export default KudosPage