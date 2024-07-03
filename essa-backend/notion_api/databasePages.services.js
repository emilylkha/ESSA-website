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
        const response_page_id = getPages(response.results);
        return response_page_id;
      } catch (error) {
        console.error('Error fetching pages:', error);
        throw error;
      }


}

// helper function:
export const getPages = (json_object_array) => {
    const page_id_array = []
    json_object_array.map((object) => {page_id_array.push(object.id)})
    return page_id_array;

} 