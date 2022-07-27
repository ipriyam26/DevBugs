import React from 'react'
import PropTypes from 'prop-types'
import {Blog} from '../types'
import Link from 'next/link';


function BlogSnippets(props: { blog: Blog }) {
  const {blog} = props;

  return (
    <div className='space-y-1'>

        <Link href={`blogpost/slug=${blog.slug}`}>
          <a href={`blogpost/slug=${blog.slug}`}>
            <h4 className=' font-semibold text-lg text-bkdblue-500 '>{blog.title.toUpperCase()}</h4>
          </a>
        </Link>
          <div className='flex flex-col text-base'>
          <p> <strong className='text-gray-700 '>Author: </strong> {blog.author}</p>
          <p> <strong className='text-gray-700 '>Date: </strong> {blog.date}</p>
          </div>

        <p className=' text-gray-500 sm:mx-25 lg:mx-0' >{blog.description.slice(0,200)}...</p>
        <br  />
    </div>
  )
}

BlogSnippets.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
},)}


export default BlogSnippets
