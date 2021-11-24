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
          <Grid.Column>
            <DataList list={list}/>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default Content
