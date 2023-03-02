import React from 'react'
import Link from 'next/link'
import type {PostMetadata} from '../../types/postsMetadata'

export default function PostPreview(props: PostMetadata) {
  return (
    <div key={props.slug} className='border border-slate-300 p-4 rounded-md shadow-md bg-white'>
    <p className='text-sm text-slate-400'>{props.date}</p>
    <Link href={`/posts/${props.slug}`}>
      <h2 className='font-bold text-violet-400 mb-4 hover:underline hover:text-violet-500'>{props.title}</h2>
    </Link>
    <p className='text-slate-700'>{props.subtitle}</p>
  </div>
  )
}
