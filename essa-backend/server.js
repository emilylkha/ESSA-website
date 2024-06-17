import express from 'express';
import { fetchArticles } from './articles.services.js';
import { connectToDB, getDb } from './db.js';
import { fetchEvents } from './events.services.js';

const app = express();
let db;

// db connection:
connectToDB((err) => {
    if (!err) {
        db = getDb(); // Retrieve the db connection after successfully connecting
        app.listen(3001, () => {
            console.log('listening on port 3001');
        });
    } else {
        console.error('Failed to connect to the database');
    }
});

// routes:
app.get('/articles', async (req, res) => {
    try {
        const articles = await fetchArticles(db);
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// routes:

// api for events:

app.get('/events', async (req, res) => {
    try {
        const events = await fetchEvents(db);
        res.status(200).json(events);
        console.log(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
});











