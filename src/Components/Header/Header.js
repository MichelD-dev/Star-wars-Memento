import { Image, Menu } from 'semantic-ui-react'
// import styles from './Header.module.css'

const Header = ({test}) => {
  const handleClick = () => {
    test()
  }

  return (
    <Menu
      secondary
      size='massive'
      fixed
      stackable
      inverted
      style={{ paddingTop: '2rem' }}
    >
      <Menu.Item>
        <Image
          src='..\assets\images\Star-Wars-Logo.png'
          vertialAlign='middle'
        />
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item onClick={handleClick}>
          Planets
        </Menu.Item>
        <Menu.Item onClick={handleClick}>People</Menu.Item>
        <Menu.Item link>Ships</Menu.Item>
      </Menu.Menu>
      <Menu.Item></Menu.Item>
    </Menu>
  )
}

export default Header
