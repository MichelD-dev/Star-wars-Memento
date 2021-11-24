import { Segment, List } from 'semantic-ui-react'

const DataList = ({ list = [] }) => {
  return (
    <Segment inverted style={{ opacity: '.8' }}>
      <List selection inverted divided size='big'>
        {list.map(item => (
          <List.Item key={item.name}>{item.name}</List.Item>
        ))}
      </List>
    </Segment>
  )
}

export default DataList
