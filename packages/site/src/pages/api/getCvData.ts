import { NextApiResponse, NextApiRequest } from 'next'
const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const databaseId = '87ab6106-57f6-4cfd-99a8-4011dc347132';
  const response = await notion.databases.query({
    database_id: databaseId,
    // filter: {
    //   or: [
    //     {
    //       property: 'In stock',
    //       checkbox: {
    //         equals: true,
    //       },
    //     },
    //     {
    //       property: 'Cost of next trip',
    //       number: {
    //         greater_than_or_equal_to: 2,
    //       },
    //     },
    //   ],
    // },
    sorts: [
      {
        property: 'timeframe',
        direction: 'descending',
      },
    ],
  });

  res.status(200).json({ data: response })



}
