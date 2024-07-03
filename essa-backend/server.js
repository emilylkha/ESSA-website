import express from 'express';
import { fetchArticles } from './articles.services.js';
import { connectToDB, getDb } from './db.js';
import { fetchEvents } from './events.services.js';
import 'dotenv/config';
import { Client } from "@notionhq/client";
import { fetchPages } from './notion_api/databasePages.services.js';
import { getDatabasePageInfo } from './notion_api/databasePageInfo.js';

const app = express();
let db;
const databaseId = process.env.COMMITEE_DATABASE_KEY;

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
        //const events = await fetchEvents(db);
        //res.status(200).json(events);
        // trying notion api here:
        const notionClient = new Client({auth: process.env.API_KEY_NOTION});
        //const response = await fetchPages(notionClient, databaseId);
        const response = await getDatabasePageInfo(notionClient, '01d40c74-3ac4-4583-aa75-78ac43cee101');

        res.status(200).json(response);



    } catch (error) {
        res.status(500).json({ error: error.message });
    }

    
    
});

// getting notion to work with MongoDB
// Atlas (10 mins)













