
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'yt_login_system',
    password: 'taniya04',
    port: 5432,
});

const getRfidData = async () => {
    try {
        const result = await pool.query('SELECT id, rfid_tag, aim FROM rfid_table');
        return result.rows;
    } catch (err) {
        console.error('Error fetching data', err);
        throw err;
    }
};

const addRfidData = async (rfid_tag, aim) => {
    try {
        const result = await pool.query(
            'INSERT INTO rfid_table (rfid_tag, aim) VALUES ($1, $2) RETURNING *',
            [rfid_tag, aim]
        );
        return result.rows[0];
    } catch (err) {
        console.error('Error inserting data', err);
        throw err;
    }
};

module.exports = {
    getRfidData,
    addRfidData,
};

