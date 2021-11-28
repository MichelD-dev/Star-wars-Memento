import { useEffect, useState } from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

function withFetch(WrappedComponent) {
  const WithFetch = props => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState()

    useEffect(() => {
      if (!props.clickedCategory) return
      const fetchData = async () => {
        try {
          setIsLoading(true)
          const response = await fetch(
            `https://swapi.dev/api/${props.clickedCategory}`
          )
          if (response.ok) {
            const json = await response.json()
            setData(data => [...data, json])
            setIsLoading(false)
          } else {
            throw new Error('Fetch request error')
          }
        } catch (err) {
          setIsError(err.message)
          console.log(err.message)
        }
      }
      fetchData()
    }, [props.clickedCategory])

    return isLoading ? (
      <Dimmer active>
        <Loader inverted size='big' style={{ opacity: '.8' }}>
          Veuillez patienter...
        </Loader>
      </Dimmer>
    ) : (
      <WrappedComponent data={data} {...props} />
    )
  }

  return WithFetch
}

export default withFetch
