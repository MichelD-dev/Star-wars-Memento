import { useRef, useState } from 'react'
import { Header, Image, Menu, Ref, Segment, Sidebar } from 'semantic-ui-react'

const SideMenu = () => {
  const segmentRef = useRef()
  const [visible, setVisible] = useState(true)

  const handleClick = category => {
    fetch(category)
  }

  return (
    <Sidebar.Pushable as={Segment.Group} raised>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        target={segmentRef}
        visible={visible}
        width='thin'
      >
        <Menu.Item onClick={() => handleClick('films')}>Films</Menu.Item>
        <Menu.Item onClick={() => handleClick('planets')}>Planètes</Menu.Item>
        <Menu.Item onClick={() => handleClick('people')}>Personnes</Menu.Item>
        <Menu.Item onClick={() => handleClick('starships')}>
          Vaisseaux
        </Menu.Item>
        <Menu.Item onClick={() => handleClick('vehicles')}>Vehicules</Menu.Item>
        <Menu.Item onClick={() => handleClick('species')}>Espèces</Menu.Item>
      </Sidebar>

      <Ref innerRef={segmentRef}>
        <Segment secondary></Segment>
      </Ref>

      <Segment>
        <Header as='h3'>Application Content</Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Sidebar.Pushable>
  )
}

export default SideMenu
