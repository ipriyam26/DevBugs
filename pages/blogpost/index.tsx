import React, { useEffect, useState } from 'react'
import BlogSnippets from '../../components/blogSnippet';
import {Blog} from './../../types'
function Blog() {
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
    <div className='  space-y-10 ' >
        <h1 className=' text-4xl text-bkdblue-500 mt-10 text-center font-bold' >Blogs</h1>
        
        <ul className=" md:space-y-6 first-line:sm:space-y-5 my-5 grid-cols-2 grid mx-44 gap-5">
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
  )
}

export default Blog