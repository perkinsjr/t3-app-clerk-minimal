import styles from '../styles/shared.module.css'
import Header from './header'

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.container}>{children}</main>
  </>
)

export default Layout
