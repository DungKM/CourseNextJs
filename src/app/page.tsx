'use client'

import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/dungdz.module.css'


export default function Home() {

  return (
   <div>
    <ul>
      <li className={x['red']}> <Link href="/facebook"> 
    <span className={y['red']}>Facebook</span>  
      </Link></li>
      <li> <Link href="/tiktok">Tiktok</Link></li>
      <li> <Link href="/admin">Admin</Link></li>

    </ul>
   </div>
  )
}
