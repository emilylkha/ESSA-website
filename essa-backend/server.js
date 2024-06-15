const express = require('express');

// init app & middleware:

const app = express()

app.listen(3001, () => {
    console.log('listening on port 3001');
} )

// routes:

app.get('/articles', (req, res) => {
    res.json({mssg: 'hello'})
}

)