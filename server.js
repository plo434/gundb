const express = require('express');
const Gun = require('gun');

const app = express();
const PORT = process.env.PORT || 8765;

// Setup server
const server = app.listen(PORT, () => {
    console.log(`GunDB Relay running on port ${PORT}`);
});

// Setup GunDB with Express
const gun = Gun({ web: server });

// Homepage to confirm relay is running
app.get('/', (req, res) => {
    res.send('GunDB Relay Active');
});

// Allow access over the internet
app.use(Gun.serve);
