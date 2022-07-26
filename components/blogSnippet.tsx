import React from 'react'
import PropTypes from 'prop-types'
import {Blog} from '../types'
import Link from 'next/link';


function BlogSnippets(props: { blog: Blog }) {
  const {blog} = props;

  return (
    <div className='space-y-1'>
      {/* <Link> */}
        <h4 className=' font-semibold text-lg  '>{blog.title.toUpperCase()}</h4>
      {/* </Link> */}
        <div className='flex space-x-5 text-base'>

        <p> <strong className='text-gray-700 '>Author: </strong> {blog.author}</p>
        <p> <strong className='text-gray-700 '>Date: </strong> {blog.date}</p>
        </div>
        <p className=' text-gray-500 text-lg' >{blog.description.slice(0,200)}...</p>
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
