import { useEffect, useState } from 'react'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Content from './Components/Content.js'
import Header from './Components/Header/Header.js'

function App() {
  const [request, setRequest] = useState(false)
  const [list, setList] = useState([])
  const [fetched, setFetched] = useState([])

  const withFetchedData = category => {
    if (fetched.some(cat => cat === category)) {
      return
    }
    setRequest(true)
    setFetched([...fetched, category])
    try {
      async function fetchData() {
        const response = await fetch(`http://swapi.dev/api/${category}/?page=1`)
        const data = await response.json()
        setList([...list, [...data.results]])
        setRequest(false)
      }
      fetchData()
    } catch (e) {
      console.log(e.message)
    }
  }
  // useEffect(() => {
  //   console.log(fetched)
  //   console.log(request)
  // }, [fetched, request])

  return (
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vw' }}>
      <Header fetch={withFetchedData} />
      {request ? (
        <Dimmer active>
          <Loader inverted size='big' style={{ opacity: '.8' }}>
            Veuillez patienter...
          </Loader>
        </Dimmer>
      ) : (
        <Content list={list} />
      )}
    </Container>
  )
}

export default App
