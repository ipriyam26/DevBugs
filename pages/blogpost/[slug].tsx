import React, { useEffect, useState } from 'react'
import {Blog} from './../../types'
import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    let slug =  context.query.slug as string;

    let response =  await fetch(`http://localhost:3000/api/getblog?${slug}`);
    let blog:Blog = await response.json();

    
    return {
      props: {blog}, // will be passed to the page component as props
    };
  };


const Slug:NextPage<{blog:Blog}> = (props) =>{

    const {blog} = props;
    function createMarkup(c:string) {
        return {
           __html: c    };
     }; 
    
    
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
                
                <div dangerouslySetInnerHTML={createMarkup( blog==null?"Loading..":blog.description)} ></div>
                </div>
            </main>
        </div>
    </div>;

}
export default Slug;