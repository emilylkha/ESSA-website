// this function returns the id of pages for any database provided
export async function fetchPages(notionClient, databaseId, sortBy = []){
    try {
        const queryOptions = {
          database_id: databaseId,
          filter: {
            or: [],
          },
          sorts: sortBy
        };
    
        const response = await notionClient.databases.query(queryOptions);
        return response.id;
      } catch (error) {
        console.error('Error fetching pages:', error);
        throw error;
      }


}