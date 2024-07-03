
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getRfidData, addRfidData } = require('./database');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/rfiddata', async (req, res) => {
    try {
        const data = await getRfidData();
        res.json({ results: data });
    } catch (err) {
        console.error('Error fetching data', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/rfiddata', async (req, res) => {
    try {
        const { rfid_tag, aim } = req.body;
        const result = await addRfidData(rfid_tag, aim);
        res.status(201).json(result);
    } catch (err) {
        console.error('Error inserting data', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

