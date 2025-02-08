import React, { useState } from "react";
import './../pages/Dashboard/styles.css'
import { API_HEADERS, SEND_KUDOS_URL } from "../constants";
import axios from "axios";

const SendKudos = ({ selectedUser: { id, username, email} }) => {
    const [kudosMessage, setKudosMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)

    const handleSendKudos = async() => {
        if (!kudosMessage.trim()) {
            alert('Please write a message first');
            return;
        }
        setLoading(true)
        try{
            const payload = {
                recipient_id: id,
                message: kudosMessage,
            }
            const response = await axios.post(SEND_KUDOS_URL, payload, {headers: API_HEADERS})
            setMessage({
                isSuccess: true,
                message: response.status === 201 ? "Message Sent" : JSON.stringify(response.data)
            })
        }catch(err){
            console.log(err)
            const errorMessage = err.response?.status === 404 
                ? JSON.stringify(err.response?.data)
                : JSON.stringify(err);
            setMessage({
                isSuccess: false,
                message: errorMessage
            })
        }finally{
            setLoading(false)
        }
        setKudosMessage('');
    };

    const handleChange = (e) => {
        setMessage(null)
        setKudosMessage(e.target.value)
    }

    return (<div className="user-card">
        <h3>{username}</h3>
        <p><strong>Name:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>

        <textarea
            placeholder="Write a kudos message..."
            className="message-box"
            value={kudosMessage}
            onChange={handleChange}
            aria-label="Kudos message"
        ></textarea>
        <button
            className="send-kudos-btn"
            onClick={handleSendKudos}
            disabled={loading || !kudosMessage.trim()}
            aria-label="Send Kudos"
        >
            Send Kudos
        </button>

        {message && (
            <div className={`message ${message.isSuccess ? 'success' : 'error'}`}>
                {message.message}
            </div>
        )}
    </div>)

}

export default SendKudos