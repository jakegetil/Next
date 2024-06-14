'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = () => {
    const pathname = usePathname()
  return (
    <>
        <li><Link href="/" className={`${pathname === '/' ? 'active' : ''}`}>Home</Link></li>
        <li><Link href="/users" className={`${pathname.startsWith('/users') ? 'active' : ''}`}>Users</Link></li>
    </>
  )
}

export default Links