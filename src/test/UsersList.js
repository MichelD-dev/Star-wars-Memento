import HOC from "./HOC"

const UsersList = ({ data }) => {
  const renderUsers = data.map(user => (
    <div key={user.id}>
      <p>{user.name}</p>
    </div>
  ))

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Test 1</h1>
      <div>{renderUsers}</div>
    </div>
  )
}

const FetchedUsers = HOC(UsersList, 'users')

export default FetchedUsers
