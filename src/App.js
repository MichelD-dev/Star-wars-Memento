import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import FetchedContent from './Components/Content.js'
import Header from './Components/Header/Header.js'

function App() {
  const [clicked, setClicked] = useState([])
  const [category, setCategory] = useState('')

  const fetch = category => {
    if (clicked.some(cat => cat === category)) return
    setClicked([...clicked, category])
    setCategory(category)
  }

  return (
    <Container fluid>
      <Header fetch={fetch} />
      <FetchedContent clicked={clicked} category={category} />
    </Container>
  )
}

export default App
