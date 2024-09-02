
export async function fetchArticles(db){
    if (!db) {
        throw new Error('Database not connected');
    }

    const articles = await db.collection('database')
        .find()
        .toArray();

    return articles;
}