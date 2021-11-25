import { useState } from 'react'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import FetchedContent from './Components/Content.js'
import Header from './Components/Header/Header.js'

function App() {
  const [request, setRequest] = useState(false)
  const [list, setList] = useState([])
  const [clicked, setClicked] = useState([])
  const [category, setCategory] = useState('')

  const fetch = (category, catId) => {
    setClicked([...clicked, category])
    setCategory({ catId, category })
  }

  return (
    <Container
      fluid
      style={{
        minHeight: '100vw',
      }}
    >
      <Header fetch={fetch} />
      {request ? (
        <Dimmer blurring active>
          <Loader inverted size='big' style={{ opacity: '.8' }}>
            Veuillez patienter...
          </Loader>
        </Dimmer>
      ) : (
        category && (
          <FetchedContent clicked={clicked} list={list} category={category} />
        )
      )}
    </Container>
  )
}

export default App
