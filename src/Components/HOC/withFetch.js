import { useEffect, useState } from 'react'

function withFetch(WrappedComponent, category) {
  const WithFetch = props => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
      if (category) fetchData(category)
    }, [])

    useEffect(() => console.log(data), [])

    const fetchData = async category => {
      setIsLoading(true)
      setIsError(false)

      try {
        const response = await fetch( `http://swapi.dev/api/${category}/?page=1`)
        if (response.ok) {
          const data = await response.json()

          setIsLoading(false)
          setData(data)
        } else {
          throw new Error('Fetch request error')
        }
      } catch (err) {
        setIsLoading(false)
        setIsError(err)
      }
    }

    return (
      <WrappedComponent
        data={data}
        isLoading={isLoading}
        isError={isError}
        {...props}
        getData={category => fetchData(category)}
      />
    )
  }

  return WithFetch
}

export default withFetch
