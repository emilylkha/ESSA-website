export async function fetchEvents(db){
    if (!db) {
        throw new Error('Database not connected');
    }

    const events = await db.collection('Events')
        .find()
        .sort({ name: 1 })
        .toArray();

    return events;
};



