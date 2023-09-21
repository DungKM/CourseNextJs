"use client"
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

interface IProps {
    blogs:IBlog[]
}

const AppTable = (props: IProps) => {
    const [blog, setBlog] = useState<IBlog | null>(null)
    const [showModalCreate, setShowModalCreate ] = useState<boolean>(false);
    const [showModalUpdate, setShowModalUpdate ] = useState<boolean>(false);

   const handleDeleteBlog = (id:number)=> {
    if (confirm(`Do you want delete blog (id = ${id})`)) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/icon, text/plain, */*",
          "Content-Type": "application/json",
        }
      }).then(res => res.json())
      .then(res => {
        if(res){
          toast.success("Delete blog successes");
          mutate("http://localhost:8000/blogs")
        }
      })
    } else {
    }
   }


    const {blogs} = props;
  return (
    <div className='my-2'>
    <div className='d-flex justify-content-between'>
        <span>Table</span>
        <Button onClick={()=>setShowModalCreate(true)}>
            Add New
        </Button>
    </div>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
     {blogs.map(item => {
        return(
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>
                <Link href={`/blogs/${item.id}`} className='btn btn-dark'>
                    View
                </Link>
                <Button variant='info' className='mx-3'
                onClick={()=>{
                  setBlog(item);
                  setShowModalUpdate(true)
                }}
                >
                    Edit
                </Button>
                <Button variant='danger' onClick={()=> handleDeleteBlog(item.id)}>
                    Delete
                </Button>
            </td>
        </tr>
        )
     })}
        
      
      </tbody>
    </Table>
    <CreateModal
    showModalCreate = {showModalCreate}
    setShowModalCreate ={setShowModalCreate}
    />
    <UpdateModal
    showModalUpdate = {showModalUpdate}
    setShowModalUpdate ={setShowModalUpdate}
    blog={blog}
    setBlog = {setBlog}
    />
    </div>
  );
}

export default AppTable;