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
        
        <ul className=" mx-7 my-5 text-center md:text-start md:grid md:grid-cols-2 xl:grid-cols-3 ">
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