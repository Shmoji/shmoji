import axios from "lib/axios"
import { PuzzleMap } from "utils/puzzles"

/**
 * @param puzzle -- The puzzle that a solution is being submitted for
 * @param solution -- The solution provided by the user for the puzzle
 */
export const submitPuzzleAnswer = async (puzzle: PuzzleMap, solution) => {
  try {
    const response = await axios.post(
      `/submitPuzzleAnswer`,
      {},
      {
        params: {
          puzzle,
          solution,
        }
      }
    )

    return response?.data?.isSolved
  } catch (error) {
    console.error(`Error while submitting puzzle answer to API`, error)
    return null
  }
}
