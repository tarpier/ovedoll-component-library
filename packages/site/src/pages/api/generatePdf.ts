import playwright from 'playwright-aws-lambda';
import { NextApiResponse, NextApiRequest } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    const params = req.body
    console.log(params)
    const pageToScrape = params.pageToScrape;
    // return res.status(200).json({pageToScrape})

  let result = null;
  let browser = null;

  try {
    const browser = await playwright.launchChromium();
    const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto(pageToScrape);
   const result = await page.content();
   console.log(result);
  } catch (error) {
    throw error;
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
};