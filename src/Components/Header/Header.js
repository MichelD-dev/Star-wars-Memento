import { Image, Menu } from 'semantic-ui-react'

const Header = ({ fetch }) => {
  const handleClick = (category, catId) => {
    fetch(category, catId)
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
          wrapped
          size='small'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/1280px-Star_Wars_Yellow_Logo.svg.png'
          verticalAlign='middle'
        />
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item onClick={() => handleClick('films', 1)}>Films</Menu.Item>
        <Menu.Item onClick={() => handleClick('planets', 2)}>
          Planètes
        </Menu.Item>
        <Menu.Item onClick={() => handleClick('people', 3)}>
          Personnes
        </Menu.Item>
        <Menu.Item onClick={() => handleClick('starships', 4)}>
          Vaisseaux
        </Menu.Item>
        <Menu.Item onClick={() => handleClick('vehicles', 5)}>
          Vehicules
        </Menu.Item>
        <Menu.Item onClick={() => handleClick('species', 6)}>Espèces</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Header
