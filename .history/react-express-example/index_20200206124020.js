const express = require('express');
var cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["RV", "SINGH ", "vivek"];
    res.json(list);
    console.log('Sent list of items');
});



// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
