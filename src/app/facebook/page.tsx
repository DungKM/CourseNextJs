"use client"
import { useRouter } from 'next/navigation'

const facebook = () => {
    const router = useRouter();
    return ( <div className="">Facebook
          <li> <button onClick={()=> router.push('/')}>Home</button></li>
    </div> );
}
 
export default facebook;