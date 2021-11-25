import { useState } from 'react'

const HOC = (WrappedComponent, category) => {
  // const [request, setRequest] = useState(false)
  // const [list, setList] = useState([])

  return function (props) {
    try {
      async function fetchData() {
        const response = await fetch(`http://swapi.dev/api/${category}`)
        const data = await response.json()
        // setList([...list, [...data.results]])
        // setRequest(false)
        return <WrappedComponent {...props} data={data} />
      }
      fetchData()
    } catch (e) {
      console.log(e.message)
    }
  }
}

export default HOC
