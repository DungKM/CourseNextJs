"use client"
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CreateModal from './create.modal';
import { useState } from 'react';
interface IProps {
    blogs:IBlog[]
}

const AppTable = (props: IProps) => {
    const [showModalCreate, setShowModalCreate ] = useState<boolean>(false);
    const {blogs} = props;
  return (
    <>
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
     {blogs.map(blog => {
        return(
        <tr key={blog.id}>
            <td>{blog.id}</td>
            <td>{blog.title}</td>
            <td>{blog.author}</td>
            <td>
                <Button>
                    View
                </Button>
                <Button variant='info' className='mx-3'>
                    Edit
                </Button>
                <Button variant='danger'>
                    View
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
    </>
  );
}

export default AppTable;