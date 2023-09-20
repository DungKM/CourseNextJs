'use client'

import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/dungdz.module.css'

import useSWR from "swr";



export default function Home() {
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const { data, error, isLoading } = useSWR(
  "http://localhost:8000/blogs",
  fetcher,{
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  }

);

if (error) return "An error has occurred.";
if (isLoading) return "Loading...";

  return (
   <div>
    {data?.lenght}
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
