import styles from '../styles/header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.left}>
      <Link href="/">
        <div className={styles.logo}>
          <Image src="/logo.svg" width="32" height="32" alt="Logo" />
          <span className={styles.appName}>Your application</span>
        </div>
      </Link>
    </div>
    <div className={styles.right}>
      <SignedOut>
        <Link href="/sign-in">Sign in</Link>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  </header>
)

export default Header
