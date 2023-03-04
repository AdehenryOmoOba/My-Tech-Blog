import React from 'react'
import Link from 'next/link'


export default function PostPreview(props: PostMetadata) {
  return (
    <div key={props.slug} className='border border-slate-300 p-4 rounded-md shadow-md bg-white'>
    <p className='text-sm text-slate-400'>{props.date}</p>
    <Link href={`/posts/${props.slug}`}>
      <h2 className='bg-slate-800 font-bold border text-white mb-4 py-1 px-2 rounded-md w-max hover:bg-transparent hover:text-slate-800 hover:border-slate-800'>
        {props.title}
      </h2>
    </Link>
    <p className='text-slate-700'>{props.subtitle}</p>
  </div>
  )
}
