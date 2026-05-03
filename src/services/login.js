import axios from "axios"
const route = 'http://localhost:3001/api/login'

const login = async credentials => {
  const { data } = await axios.post(route, credentials)
  return data
}

export default { login }
