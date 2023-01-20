import axios from "axios"

const fetchData = async (ids) => {
  const data = await Promise.all(
    ids.map(async (id) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      return response.data
    })
  )
  return data
}

export default fetchData