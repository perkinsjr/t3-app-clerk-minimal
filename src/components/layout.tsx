import styles from '../styles/shared.module.css'
import Header from './header'

interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className={styles.container}>{children}</main>
  </>
)

export default Layout
