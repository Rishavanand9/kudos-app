import React, { useState } from 'react';
import './styles.css';
import ProfileCard from '../../components/ProfileCard';
import { currentUser } from '../../constants';
import SearchInput from '../../components/SearchInput';
import SendKudos from '../../components/SendKudos';

const Dashboard = () => {
    // State management

    const [selectedUser, setSelectedUser] = useState(null);

    // Event handlers
    const handleLogout = () => {
        sessionStorage.removeItem('userDetails')
        window.location.reload()
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <div className="user-welcome">
                    <h1>Welcome, <span className="username">{currentUser.username}</span></h1>
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

            <SearchInput onSelect={setSelectedUser} />

            {selectedUser ? <SendKudos selectedUser={selectedUser} /> : null}

        </div>
    );
};

export default Dashboard;