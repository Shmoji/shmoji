import { getPuzzleSolutions } from 'lib/models/getPuzzleSolutions'
import type { NextApiRequest, NextApiResponse } from 'next'
import { PuzzleMap } from 'utils/puzzles'

type Data = {
  isSolved: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const puzzle = Number(req.query.puzzle) as PuzzleMap
  const solution = req.query.solution

  // Get array of answers stored in DB
  const solutions = await getPuzzleSolutions()

  let isSolved = false

  // If user's solution is correct, store: "wallet": { puzzlesSolved: [PUZZLES.CODE_1_1] }
  if (solutions[puzzle] === solution) {
    console.log('YO, you solved it')
    isSolved = true
  }

  res.status(200).json({ isSolved })
}
