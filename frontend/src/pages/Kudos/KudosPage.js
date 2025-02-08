import React, { useEffect, useState, useCallback } from 'react';
import './styles.css';
import KudosCard from '../../components/KudosCard';
import ProfileCard from '../../components/ProfileCard';
import axios from 'axios';
import { API_HEADERS, currentUser, GET_USER_KUDOS } from '../../constants';

const KudosPage = () => {
    const [kudoList, setKudoList] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios(GET_USER_KUDOS, { headers: API_HEADERS });
            if (response.status === 200) {
                setKudoList(response.data);
            }
        } catch (err) {
            console.error("Error fetching kudos:", err);
        }
    }, []); // Memoized function with no dependencies

    useEffect(() => {
        fetchData();
    }, [fetchData]); // Dependency on memoized function

    return (
        <div className="kudos-page">
            <header>
                <h1><span className="username">{currentUser.username}'s</span> Kudos</h1>
                <a href="/dashboard" className="back-link">← Back to Dashboard</a>
            </header>
            <ProfileCard />
            <div className="kudos-list">
                <h2>Received Kudos</h2>
                {!kudoList.length ? (
                    <p>No kudos received yet.</p>
                ) : (
                    kudoList.map((kudo) => <KudosCard key={kudo.id} data={kudo} />)
                )}
            </div>
        </div>
    );
};

export default React.memo(KudosPage);
