import React, { useState } from 'react';
import './styles.css';
import ProfileCard from '../../components/ProfileCard';
import { currentUser } from '../../constants';
import SearchInput from '../../components/SearchInput';

const Dashboard = () => {
    // State management
    const [kudosMessage, setKudosMessage] = useState('');

    const [selectedUser, setSelectedUser] = useState({});

    // Event handlers
    const handleLogout = () => {
        sessionStorage.removeItem('userDetails')
        window.location.reload()
    };

    const handleSendKudos = () => {
        if (!kudosMessage.trim()) {
            alert('Please write a message first');
            return;
        }
        console.log('Sending kudos:', kudosMessage);
        setKudosMessage(''); 
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <div className="user-welcome">
                    <h1>Welcome, <span className="username">{currentUser.name}</span></h1>
                </div>
                <button 
                    className="logout-btn"
                    onClick={handleLogout}
                    aria-label="Logout"
                >
                    Logout
                </button>
            </header>

            <ProfileCard />

            <nav className="dashboard-nav">
                <a 
                    href="/kudos" 
                    className="received-link"
                    aria-label="View Received Kudos"
                >
                    View Received Kudos
                </a>
            </nav>

            <SearchInput onSelect={setSelectedUser}/>

            <div className="user-card">
                <h3>{selectedUser.name}</h3>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Kudos Remaining:</strong> {selectedUser.kudosRemaining}</p>

                <textarea
                    placeholder="Write a kudos message..."
                    className="message-box"
                    value={kudosMessage}
                    onChange={(e) => setKudosMessage(e.target.value)}
                    aria-label="Kudos message"
                ></textarea>
                <button 
                    className="send-kudos-btn"
                    onClick={handleSendKudos}
                    disabled={!kudosMessage.trim()}
                    aria-label="Send Kudos"
                >
                    Send Kudos
                </button>
            </div>
        </div>
    );
};

export default Dashboard;