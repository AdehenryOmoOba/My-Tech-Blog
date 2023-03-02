import { getPostsMetada } from '../utils/generatePostMetada'
import PostPreview from './components/PostPreview'


const postPreview = getPostsMetada().map((post) => (
   <PostPreview key={post.slug} {...post} />  
))

export default function Home() {

  return (
    <section className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {postPreview}
    </section>
  )
}
