import { getPuzzleSolutions } from 'lib/models/getPuzzleSolutions'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // Check if answer is correct (answers stored in DB)
  const solutions = await getPuzzleSolutions()

  // If correct, store: "wallet": { puzzlesSolved: [PUZZLES.CODE_1_1] }

  res.status(200).json({ name: 'John Doe' })
}
