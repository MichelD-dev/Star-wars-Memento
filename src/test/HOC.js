import React, { useState } from 'react'

const HOC = (WrappedComponent, category) => {
  console.log(category)
  // const [request, setRequest] = useState(false)
  // const [list, setList] = useState([])

  return class extends React.Component {
    state = {data: []}

    componentDidMount() {
      // try {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${category}`
        )
        const data = await response.json()
        this.setState({...this.state, data})
      
        // setList([...list, [...data.results]])
        // setRequest(false)
      }
      fetchData()
      // } catch (e) {
      //   console.log(e.message)
      // }
    }

    render() {
      return (
        <WrappedComponent
        // {...props}
        data={this.state.data}
        />
      )
    }

    // return function (props) {
    //   try {
    //     async function fetchData() {
    //       const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    //       const data = await response.json()
    //       // setList([...list, [...data.results]])
    //       // setRequest(false)
    //       return <WrappedComponent {...props} data={data} />
    //     }
    //     fetchData()
    //   } catch (e) {
    //     console.log(e.message)
    //   }
    // }
  }
}

export default HOC
