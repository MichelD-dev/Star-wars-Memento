import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import FetchedContent from './Components/Content.js'
import Header from './Components/Header/Header.js'

function App() {
  const [categoriesList, setCategoriesList] = useState([])
  const [clickedCategory, setClickedCategory] = useState('')

  const fetch = category => {
    if (categoriesList.some(cat => cat === category)) return
    setCategoriesList([...categoriesList, category])
    setClickedCategory(category)
  }

  return (
    <Container fluid>
      <Header fetch={fetch} />
      <FetchedContent
        categoriesList={categoriesList}
        clickedCategory={clickedCategory}
      />
    </Container>
  )
}

export default App
