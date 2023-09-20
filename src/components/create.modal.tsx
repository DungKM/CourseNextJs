"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { mutate } from "swr";
interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (value: boolean) => void;
}
function CreateModal(props: IProps) {
  const { showModalCreate, setShowModalCreate } = props;

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const handleSubmit = () => {
    if(!title){
      toast.error('Title Not required')
      return
    }
    if(!author){
      toast.error('Author Not required')
      return
    }
    if(!content){
      toast.error('Content Not required')
      return
    }
    const formData = {
      title: title,
      author: author,
      content: content,
    };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        Accept: "application/icon, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res){
          toast.success("Create successed");
          handleCloseModal()
          mutate("http://localhost:8000/blogs")
        }
      });
  };
  const handleCloseModal = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setShowModalCreate(false);
  };
  return (
    <>
      <Modal
        show={showModalCreate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
