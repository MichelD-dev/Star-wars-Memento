import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import FetchedContent from './Components/Content.js'
import Header from './Components/Header/Header.js'

function App() {
  const [clicked, setClicked] = useState([])
  const [category, setCategory] = useState('')

  const fetch = (category, catId) => {
    setClicked([...clicked, category])
    setCategory({ catId, category })//FIXME
  }

  return (
    <Container
      fluid
      style={{
        minHeight: '100vw',
      }}
    >
      <Header fetch={fetch} />
      <FetchedContent clicked={clicked} category={category} />
    </Container>
  )
}

export default App
