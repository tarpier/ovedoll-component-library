import { NextApiResponse, NextApiRequest } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    if (req.body?.honeyPot) {
      res.status(500).json({ err: 'spam' })
      return
    }

    if (req.body?.['full-name'] && req.body?.email && req.body?.message) {
      const name = req.body['full-name']?.replace(/(<([^>]+)>)/gi, '')
      const email = req.body.email?.replace(/(<([^>]+)>)/gi, '')
      const message = req.body.message?.replace(/(<([^>]+)>)/gi, '')


      const post_data = JSON.stringify({
        text: `Message sent by ${name} (${email}):\n ${message}`,
      })

      const postResult = await axios.post(`https://hooks.slack.com/services/${process.env.SLACK_CONTACT_HOOK}`, post_data)
      postResult.status === 200 ? res.status(200).json({ send: true }) : res.status(500).json({ err: 'service down' })

    } else {
      res.status(500).json({ err: 'not all values set' })
    }
  } else {
    res.status(500).json({ err: 'incorrect method' })
  }
}