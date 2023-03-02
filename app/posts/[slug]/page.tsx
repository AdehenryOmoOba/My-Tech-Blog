import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter' 
import { getPostsMetada } from '@/utils/generatePostMetada'

export async function generateMetadata({params}: any): Promise<{title: string, description: string}>{
  const slug = params.slug
  const postPath = `posts/${slug}.md`
  const file = fs.readFileSync(postPath, 'utf-8')
  const data = matter(file).data

  return {
    title: data.title,
    description: data.subtitle,
  }
}

function SinglePostContent(slug: string) {
  const postPath = `posts/${slug}.md`
  const file = fs.readFileSync(postPath, 'utf-8')
  return matter(file)
}

export async function generateStaticParams() {
   const slugs = getPostsMetada()
   return slugs.map((post) => ({slug: post.slug}))
}

export default function SinglePost(prop: any) {
  const slug = prop.params.slug
  const post = SinglePostContent(slug)
    return (
      <section>
        <div className='my-12 text-center'>
          <h1 className='text-2xl font-semibold text-slate-600'>{post.data.title}</h1>
          <p className='text-slate-400 mt-2'>{post.data.date}</p> 
        </div>
        <article className='prose'>
          <Markdown>{post.content}</Markdown>
        </article>
      </section>
    )
}