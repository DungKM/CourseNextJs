'use client'

import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/dungdz.module.css'

import useSWR from "swr";
import AppTable from '@/components/app.table';



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
if (!data) return "Loading...";

  return (
   <div>
    
    <AppTable
    blogs={data?.sort((a:any, b:any)=> b.id -a.id)}
    />
   </div>
  )
}
