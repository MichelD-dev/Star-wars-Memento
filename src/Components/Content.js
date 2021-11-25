import { Grid, Container } from 'semantic-ui-react'
import DataList from './List'

const Content = ({ list }) => {
  return (
    <>
      <Container fluid style={{ width: '90vw' }}>
        <Grid
          stackable
          centered
          columns={4}
          style={{ height: '100vh', paddingTop: '11rem' }}
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

export default Content
