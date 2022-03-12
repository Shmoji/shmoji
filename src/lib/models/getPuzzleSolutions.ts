import { getClient, q } from 'lib/faunaDb'

/**
 * Returns the array of puzzle solutions. Each index mapping out what solution is for what
 */
export async function getPuzzleSolutions(): Promise<any[]> {
  try {
    const puzzleCollection: any = await getClient().query(
      // 2nd arg of Ref is ID of Document you want
      q.Get(q.Ref(q.Collection('Puzzle'), '325797115548664400'))
    )

    if (!puzzleCollection) {
      return null
    }

    return puzzleCollection?.data?.puzzleSolutions
  } catch (error) {
    console.error(error)
  }
}