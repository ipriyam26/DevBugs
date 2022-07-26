import React from 'react'
import PropTypes from 'prop-types'
import {Blog} from '../types'

function BlogSnippets(props: { blog: Blog }) {
  return (
    <div className='space-y-1'>
        <h4 className=' font-medium text-lg  '>{props.blog.title}</h4>
        <div className='flex space-x-5 text-base'>

        <p> <strong className='text-gray-700 '>Author: </strong> {props.blog.author}</p>
        <p> <strong className='text-gray-700 '>Date: </strong> {props.blog.date}</p>
        </div>
        <p className=' text-gray-500 text-lg' >{props.blog.description}</p>
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
