
export const fetchArticles = async (db) => {
    if (!db) {
        throw new Error('Database not connected');
    }

    const articles = await db.collection('articles')
        .find()
        .sort({ author: 1 })
        .toArray();

    return articles;
}