"use client"
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation'

const facebook = () => {
    const router = useRouter();
    return ( 
    <div>
      <span>Facebook</span>
       <li><Button variant='danger'>HoidanIT</Button></li>
        <li> <button onClick={()=> router.push('/')}>Home</button></li>
    </div>);
}
 
export default facebook;