import { NextApiResponse, NextApiRequest } from 'next'

interface IEntry {
  activityTitle?: string,
  activityType: string,
  day: string,
  duration: number,
  project: string,
  endDate?: string,
  startDate?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body as IEntry[]

    const groupBy = (input, key) => {
      return input.reduce((acc, currentValue) => {
        let groupKey = currentValue[key];
        if (!acc[groupKey]) {
          acc[groupKey] = [];
        }
        acc[groupKey].push(currentValue);
        return acc;
      }, {});
    };

    const roundPerTask = (data) => {

      return data.map(task => {
        const FACTOR = 1.2
        const durationWithFactor = parseFloat(task.duration) * FACTOR
        return {
          ...task, 
          durationWithFactor: Math.ceil(durationWithFactor / 0.25) * 0.25,
          duration: Math.ceil(parseFloat(task.duration) / 0.25) * 0.25
        }
      })
    }

    const grouped = groupBy(roundPerTask(data), 'day')

    const groupedTotal = Object.keys(grouped).map(key => {
      let total = 0
      grouped[key].map(item => {
        total = total + item.duration
      })
      return {
        [key]: [...grouped[key]], total: total
      }
    })

    res.status(200).json({ total: groupedTotal })
  }
  res.status(500)
}