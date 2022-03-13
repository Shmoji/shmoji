import axios from 'axios'

const client = axios.create({
  baseURL: (
    process.env.NEXT_PUBLIC_SERVER_BASE_URL || 'http://localhost:3000'
  ) + '/api',
})

export default client
