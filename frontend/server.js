// This uses express.js to start react in production environment
// Source: https://dev.to/loujaybee/using-create-react-app-with-express

const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(`${__dirname}/build/index.html`));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);