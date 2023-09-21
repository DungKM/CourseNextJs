"use client";
import AppTable from "@/components/app.table";
import useSWR from "swr";
const BlogsPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />;
};

export default BlogsPage;
