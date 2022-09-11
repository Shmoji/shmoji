import axios from "axios"
import { HealthResult } from "modules/health/utils/HealthTypes"

/**
 * 
 */
export const getHealthResults = async ({ skip, limit, search }): Promise<HealthResult[]> => {
  const params = {
    search,
  }

  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_SERVERLESS_HEALTH,
      {
        params,
      }
    )

    return response?.data?.value
  } catch (error) {
    console.error(`Error while getting health results from serverless fx`, error)
    return null
  }
}
