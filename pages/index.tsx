import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import coder from "../public/home.jpg";
import Link from "next/link";
import BlogSnippets from "../components/blogSnippet";
import { useEffect, useState } from "react";
import { Blog } from "../types";

const Home: NextPage = () => {
  const desc: string =
    "Dev Bugs is a blog about programming and software development. It covers programming languages, software development tools, tips and tricks, and other aspects of the software development process. The blog is written by a team of experienced software developers and is aimed at helping developers of all levels improve their skills and become more productive.";

  const [blogs, setBlogs] = useState([] as Blog[]);

  const getBlogs = async () => {
    const res = await fetch("/api/blogs");
    const data:Blog[] = await res.json();
    setBlogs(data);
  }
  useEffect(() => {
    getBlogs();

  }, []);


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="md:mt-14 md:space-y-10 sm:mt-5 sm:space-y-5">
        <h1 className="text-5xl font-sans font-medium text-center">Dev Bugs</h1>
        <div className=" text-center">
          <Image
            src={coder}
            alt="Image of a coder"
            height={345*1.5}
            width={518*1.5}
          ></Image>
        </div>
        <p className=" text-sans font-medium text-xl md:mx-52 sm:mx-6">{desc}</p>
      </div>
      <div className="md:mt-10 md:mx-52 space-y-6 sm:mx-6 sm:mt-5 ">
        <h2 className=" text-3xl font-sans font-medium">
          Recent Blogs
        </h2>
<ul className=" md:space-y-6 mx-10 sm:space-y-5 my-5">
{
  blogs.map((blog,index) =>{
    return(
    <BlogSnippets key={index} blog={blog}></BlogSnippets>
    )
  }
    )

}
</ul>
      </div>
    </>
  );
};

export default Home;
