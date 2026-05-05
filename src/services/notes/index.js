import axios from "axios"
const route = 'https://joyful-horse-1e25cd.netlify.app/api/notes'
// const route = 'http://localhost:3001/api/notes'


export const getAll = () => {
  return axios
    .get(route)
    .then(response => {
      const { data } = response
      console.log(data)
      return data
    })
}

export const create = ({ content }, { token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  
  return axios
    .post(route, { content }, config)
    .then(response => {
      const { data } = response
      return data
    })
}