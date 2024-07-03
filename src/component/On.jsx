
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EnterRFIDData = () => {
    const [newRfidTag, setNewRfidTag] = useState('');
    const [newAim, setNewAim] = useState('');
    const navigate = useNavigate();

    const handleAddRfidData = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/rfiddata', {
                rfid_tag: newRfidTag,
                aim: newAim,
            });
            setNewRfidTag('');
            setNewAim('');
            navigate('/rfidtable'); 
        } catch (error) {
            console.error('Error adding RFID data:', error);
        }
    };

    return (
        <div>
            <h1>Enter RFID Data</h1>
            <form onSubmit={handleAddRfidData}>
                <input
                    type="text"
                    placeholder="RFID Tag"
                    value={newRfidTag}
                    onChange={(e) => setNewRfidTag(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="AIM"
                    value={newAim}
                    onChange={(e) => setNewAim(e.target.value)}
                    required
                />
                <button type="submit">Add RFID Data</button>
            </form>
        </div>
    );
};

export default EnterRFIDData;
