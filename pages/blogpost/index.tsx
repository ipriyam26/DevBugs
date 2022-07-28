import { GetServerSideProps, NextPage } from "next";
import React from "react";
import BlogSnippets from "../../components/blogSnippet";
import { Blog } from "./../../types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/blogs");
  const data: Blog[] = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
};

const Blog: NextPage<{ data: Blog[] }> = (props) => {
  const blogs = props.data;

  return (
    <div className="  space-y-10 ">
      <h1 className=" text-4xl text-bkdblue-500 mt-10 text-center font-bold">
        Blogs
      </h1>

      <ul className=" mx-7 my-5 text-center md:text-start md:grid md:grid-cols-2 xl:grid-cols-3 ">
        {blogs.map((blog, index) => {
          return <BlogSnippets key={index} blog={blog}></BlogSnippets>;
        })}
      </ul>
    </div>
  );
};

export default Blog;
