const express = require('express');
const app = express();
require('dotenv').config();
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};
const PORT = process.env.PORT;
const SSL_PORT = process.env.SSL_PORT;

app.use(express.static('./frontend/build'));

app.get('/', (req, res) => {
    res.status(404).send('Page not found');
});
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

try {
	httpServer.listen(PORT);
	httpsServer.listen(SSL_PORT);
	console.log(`Server listening on ports: ${PORT} & ${SSL_PORT}`);
} catch (ex) {
	console.log(ex);
}

