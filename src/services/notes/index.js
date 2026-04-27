import axios from "axios"
const route = 'http://localhost:3001/api/notes'

export const getAll = () => {
  return axios
    .get(route)
    .then(response => {
      const { data } = response
      console.log(data)
      return data
    })
}

export const create = ({ content }) => {
  console.log(content)
  return axios
    .post(route, { content })
    .then(response => {
      const { data } = response
      return data
    })
}