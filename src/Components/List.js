import { Segment, List } from 'semantic-ui-react'

const DataList = ({ category }) => {
  return (
    <Segment inverted style={{ opacity: '.8' }}>
      <List selection inverted divided size='big'>
        {category.map((item, i) => (
          <List.Item key={`name_${i}`}>{item.name || item.title}</List.Item>
        ))}
      </List>
    </Segment>
  )
}

export default DataList
