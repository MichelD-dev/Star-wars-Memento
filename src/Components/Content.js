import { Grid, Container } from 'semantic-ui-react'
import DataList from './List'
import HOC from '../HOC'

const Content = ({ list }) => {
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
          {list.map((category, i) => (
            <Grid.Column key={`category_${i}`}>
              <DataList category={category} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </>
  )
}

const withFetchedDataComponent = HOC(Content, 'people')

export default withFetchedDataComponent
