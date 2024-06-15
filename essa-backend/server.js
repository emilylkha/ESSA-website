const express = require('express');
const {connectToDB, getDb} = require('./db');

// init app & middleware:

const app = express()

let db;

// db connection:
connectToDB((err) => {
    if(!err){
        app.listen(3001, () => {
            console.log('listening on port 3001');
        } )

        db = getDb()
    }
    
})



// routes:

app.get('/articles', (req, res) => {
    let articles = [];

    db.collection('articles')
        .find()
        .sort({author:1})
        .forEach(article => articles.push(article))
        .then(() => {
            res.status(200).json(articles); 
        })
        .catch(() => {
            res.status(500).json({error: 'shit'});
        });

}

)