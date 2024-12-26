export default defineEventHandler(async (event) => {
  // const body = await readBody(event);
  const integrationToken = "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";
  const database = "15980371f11380b489adf77dd31e70a3";
  const url = `https://api.notion.com/v1/databases/${database}/query`;
  // generate today in formt yyyy-mm-dd
  const body = {
    // sort by ID
    sorts: [
      {
        property: "ID",
        direction: "ascending",
      },
    ],
  };
  const response: { results: any[] } = await $fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      Authorization: `Bearer ${integrationToken}`,
    },
    body: JSON.stringify(body),
  });

  const data = response.results.map((item) => {
    return item.properties;
  });
  const info = data.map((item) => {
    return {
      id: item.ID.unique_id.number,
      image: item.image.files[0]?.file?.url || item.image.files[0].external.url,
      name: item.name.title[0].plain_text,
      description: item.description?.rich_text[0]?.plain_text,
      techs: item.techs.multi_select.map((item: { name: string }) => item.name),
      status: { name: item.status.status.name, color: item.status.status.color },
    };
  });

  return info;
});
