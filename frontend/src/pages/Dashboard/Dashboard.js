import React, { useState } from 'react';
import './styles.css';

const Dashboard = () => {
    // State management
    const [searchQuery, setSearchQuery] = useState('');
    const [kudosMessage, setKudosMessage] = useState('');
    const [currentUser] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        kudosRemaining: 3
    });
    const [selectedUser] = useState({
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        kudosRemaining: 5
    });

    // Event handlers
    const handleLogout = () => {
        // Add logout logic here
        console.log('Logging out...');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        // Add search logic here
    };

    const handleSendKudos = () => {
        if (!kudosMessage.trim()) {
            alert('Please write a message first');
            return;
        }
        console.log('Sending kudos:', kudosMessage);
        setKudosMessage(''); // Clear message after sending
        // Add kudos sending logic here
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

            <div className="info-box">
                <p><strong>Email:</strong> {currentUser.email}</p>
                <p><strong>Kudos Remaining:</strong> {currentUser.kudosRemaining}</p>
            </div>

            <nav className="dashboard-nav">
                <a 
                    href="/kudos" 
                    className="received-link"
                    aria-label="View Received Kudos"
                >
                    View Received Kudos
                </a>
            </nav>

            <form 
                className="search-container" 
                onSubmit={handleSearch}
            >
                <input
                    type="text"
                    placeholder="Search User..."
                    className="search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search users"
                />
                <button 
                    type="submit" 
                    className="search-btn"
                    aria-label="Search"
                >
                    Search
                </button>
            </form>

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