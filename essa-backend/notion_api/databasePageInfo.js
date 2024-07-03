// this function returns the information about all the pages inside a selected database:
export async function getDatabasePageInfo(notionClient, pageId) {
    const response = await notionClient.pages.retrieve({
        page_id: pageId
    });

    return response;
}
