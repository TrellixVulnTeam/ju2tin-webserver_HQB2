const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.static('./frontend/build'));

app.get('/', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

