const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/henkilosto', (req, res) => {
    fs.readFile(path.join(__dirname, 'henkilosto.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Virhe luettaessa tietoja' });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Palvelin käynnissä osoitteessa http://localhost:${PORT}`);
});