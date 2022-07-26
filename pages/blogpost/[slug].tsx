import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {Blog} from './../../types'
import { useRouter } from 'next/router';

const Slug = () =>{
    const [blog, setBlog] = useState(null as Blog | null);
    const router = useRouter();

    const getBlog = async (slug:string|null|string[]) => {
        let data =  await fetch(`/api/getblog?${slug}`);
        console.log(data);
        
        let blog:Blog = await data.json();
        setBlog(blog);
    }

    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        if (!slug) return;
        getBlog(slug);

    }, [router.isReady,])
    
    
    return <div className=' w-full h-full  bg-bkpink-100'>
        <div className=" my-14">
            <main className="space-y-5">
            <h1 className=' text-center font-bold text-4xl font-sans text-bkdblue-500' >{blog && blog.title.toUpperCase()}</h1>
            <div className='flex  justify-center space-x-5 text-xl'>
            <p> <strong className='text-gray-700 '>Author: </strong> {blog && blog.author}</p>
            <p> <strong className='text-gray-700 '>Date: </strong> {blog && blog.date}</p>
            </div>
            <div className='flex space-x-4 mx-20'>

            {
                blog && blog.tags.map((tag:string) => {
                    return <p className='bg-bkdblue-500 text-bkpink-100 px-3 py-0.5 rounded-sm' key={tag}>{tag}</p>
                })
            }
            </div>
            <div className=' mx-20 ' >
                {blog && blog.description}
                </div>
            </main>
        </div>
    </div>;

}
export default Slug;