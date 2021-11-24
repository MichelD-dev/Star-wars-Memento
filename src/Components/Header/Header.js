import { Image, Menu } from 'semantic-ui-react'
// import styles from './Header.module.css'

const Header = ({test}) => {
  const handleClick = (category) => {
    test(category)
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
        <Menu.Item onClick={() =>handleClick('planets')}>
          Planets
        </Menu.Item>
        <Menu.Item onClick={() =>handleClick('people')}>People</Menu.Item>
        <Menu.Item onClick={() =>handleClick('ships')}>Ships</Menu.Item>
      </Menu.Menu>
      <Menu.Item></Menu.Item>
    </Menu>
  )
}

export default Header
