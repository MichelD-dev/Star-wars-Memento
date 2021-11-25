import { useEffect, useState } from 'react'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Test from './test/UsersList.js'
import Content from './Components/Content.js'
import Header from './Components/Header/Header.js'
// import UsersList from './test/UsersList.js'
// import UsersList2 from './UsersList2.js'
import FetchedUsers from './test/UsersList.js'
import FetchedUsers2 from './test/UsersList2.js'

function App() {
  const [request, setRequest] = useState(false)
  const [list, setList] = useState([])
  const [fetched, setFetched] = useState([])
  const [clicked, setClicked] = useState([])
  const [category, setCategory] = useState('')

  // const withFetchedData = category => {
  //   if (fetched.some(cat => cat === category)) {
  //     return
  //   }
  //   setRequest(true)
  //   setFetched([...fetched, category])
  //   try {
  //     async function fetchData() {
  //       const response = await fetch(`http://swapi.dev/api/${category}`)
  //       const data = await response.json()
  //       setList([...list, [...data.results]])
  //       setRequest(false)
  //     }
  //     fetchData()
  //   } catch (e) {
  //     console.log(e.message)
  //   }
  // }

  // useEffect(() => {
  //   console.log(fetched)
  //   console.log(request)
  // }, [fetched, request])

  const handleClick2 = test => {
    setClicked([...clicked, test])
  }

  return (
    <>
      <button onClick={() => handleClick2('test1')}>Test 1</button>
      <button onClick={() => handleClick2('test2')}>Test 2</button>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {clicked.some(item => item === 'test1') && <FetchedUsers />}
        {clicked.some(item => item === 'test2') && <FetchedUsers2 />}
      </div>
    </>
    // <Container
    //   // fluid
    //   style={{
    //     minHeight: '100vh',
    //   }}
    // >
    //   <Header fetch={() => setCategory()} />
    //   {request ? (
    //     <Dimmer active>
    //       <Loader inverted size='big' style={{ opacity: '.8' }}>
    //         Veuillez patienter...
    //       </Loader>
    //     </Dimmer>
    //   ) : (
    //     <Content list={list} />
    // {clicked.some(item => item === 'test1') && <FetchedContent cat={category} />}
    //
    //   )}
    // </Container>
  )
}

export default App
