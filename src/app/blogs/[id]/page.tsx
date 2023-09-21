"use client";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";
const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <div className="my-2">
      <Link href={"/blogs"} className="btn btn-warning my-2">
        Back
      </Link>
      <Card className="text-center">
        <Card.Header>Tilte :{data?.title}</Card.Header>
        <Card.Body>
          <Card.Text>Content : {data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Author : {data?.author}</Card.Footer>
      </Card>
    </div>
  );
};

export default ViewDetailBlog;
