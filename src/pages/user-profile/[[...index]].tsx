import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => (
  <div style={styles}>
    <UserProfile path="/user-profile" routing="path" />
  </div>
)

export default UserProfilePage

const styles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
