import { useState } from 'react'
import { Container, Loader } from 'semantic-ui-react'
import Content from './Components/Content.js'
import Header from './Components/Header/Header.js'

function App() {//FIXME il y a un stash à recup sur branche HOC...
  const [request, setRequest] = useState(false)
  const [list, setList] = useState([])

  const withFetchedData = (category) => {console.log(category);
    setRequest(true)
    try {
      async function fetchData() {
        const response = await fetch(`http://swapi.dev/api/${category}/?page=1`)
        const data = await response.json()
        setList(data.results)
      }
      fetchData()
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <Container fluid style={{ backgroundColor: 'black', minHeight: '100vw' }}>
      <Header test={withFetchedData} />
      {request &&
        (list.length === 0 ? (
          <Loader active inverted size='big' style={{ opacity: '.8' }}>
            Veuillez patienter...
          </Loader>
        ) : (
          <Content list={list} />
        ))}
      )
    </Container>
  )
}

export default App
