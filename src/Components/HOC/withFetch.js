import { useEffect, useState } from 'react'

function withFetch(WrappedComponent) {
  const WithFetch = props => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
      if (props.category) fetchData(props.category.category)
    }, [props.category])

    const fetchData = async category => {
   
      try {
        const response = await fetch(`http://swapi.dev/api/${category}`)
        if (response.ok) {
          const json = await response.json()
          setData([...data, json])
          setIsLoading(true)
        } else {
          throw new Error('Fetch request error')
        }
      } catch (err) {
        setIsLoading(false)
        setIsError(err)
      }
    }

    return (
      isLoading && (
        <WrappedComponent
          data={data}
          isLoading={isLoading}
          isError={isError}
          {...props}
          cat={props.category.category}
        />
      )
    )
  }

  return WithFetch
}

export default withFetch
