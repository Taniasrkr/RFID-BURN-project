
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowRFIDTable = () => {
    const [rfidData, setRfidData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/rfiddata');
                setRfidData(response.data.results);
            } catch (error) {
                console.error('Error fetching RFID data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>RFID Data Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>RFID Tag</th>
                        <th>AIM</th>
                    </tr>
                </thead>
                <tbody>
                    {rfidData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.rfid_tag}</td>
                            <td>{item.aim}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowRFIDTable;
