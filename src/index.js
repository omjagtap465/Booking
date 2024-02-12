const express = require('express')
const apiRoutes = require('./routes')
const bodyParser = require('body-parser');
const { ServerConfig } = require('./config');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes)
app.listen(ServerConfig.PORT, (req, res) => {
    
    console.log(`Sucessfully started the server on ${ServerConfig.PORT}`);
})