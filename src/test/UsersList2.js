import HOC from './HOC'

const UsersList2 = ({ data }) => {
  const renderUsers = data.slice(0, 10).map(user => (
    <div key={user.id}>
      <p>{user.title}</p>
    </div>
  ))

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Test 2</h1>
      <div>{renderUsers}</div>
    </div>
  )
}

const FetchedUsers2 = HOC(UsersList2, 'todos')

export default FetchedUsers2
