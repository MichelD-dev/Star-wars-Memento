import { Grid, Container } from 'semantic-ui-react'
import withFetch from './HOC/withFetch'
import DataList from './List'

const Content = ({ data, cat, clicked }) => {
  return (
    <>
      <Container fluid style={{ width: '90vw' }}>
        <Grid
          stackable
          centered
          columns={4}
          style={{
            height: '100vh',
            paddingTop: '20rem',
            justifyContent: 'flex-start',
          }}
        >
          {clicked.some(item => item === cat) &&
            data.map((category, i) => (
              <Grid.Column key={`category_${i}`}>
                <DataList data={category.results} />
              </Grid.Column>
            ))}
        </Grid>
      </Container>
    </>
  )
}
const FetchedContent = withFetch(Content)

export default FetchedContent
