import express from 'express';
import { fetchArticles } from './articles.services.js';
import { connectToDB, getDb } from './db.js';
import { fetchEvents } from './events.services.js';
import 'dotenv/config';
import { Client } from "@notionhq/client";
import { fetchPages } from './notion_api/databasePages.services.js';

const app = express();
let db;
const databaseId = 'a0db77fbddfb4b24a47005b421e29c25';

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
        // trying notion api here:
        const notionClient = new Client({auth: process.env.API_KEY_NOTION});
        const response = await fetchPages(notionClient, databaseId);

        console.log(response);



    } catch (error) {
        res.status(500).json({ error: error.message });
    }

    
    
});

// getting notion to work with MongoDB
// Atlas (10 mins)













