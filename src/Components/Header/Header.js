import { Image, Menu } from 'semantic-ui-react'

const Header = ({ fetch }) => {
  const handleClick = category => {
    fetch(category)
  }

  return (
    <Menu
      secondary
      size='massive'
      fixed='top'
      stackable
      inverted
      style={{ padding: '2rem 4rem 0' }}
    >
      <Menu.Item>
        <Image
          src='..\assets\images\Star-Wars-Logo.png'
          verticalAlign='middle'
        />
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item onClick={() => handleClick('films')}>Films</Menu.Item>
        <Menu.Item onClick={() => handleClick('planets')}>Planètes</Menu.Item>
        <Menu.Item onClick={() => handleClick('people')}>Personnes</Menu.Item>
        <Menu.Item onClick={() => handleClick('starships')}>
          Vaisseaux
        </Menu.Item>
        <Menu.Item onClick={() => handleClick('vehicles')}>Vehicules</Menu.Item>
        <Menu.Item onClick={() => handleClick('species')}>Espèces</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Header
