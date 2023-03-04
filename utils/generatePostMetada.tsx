import fs from 'fs'
import matter from 'gray-matter'


export function getPostsMetada(): PostMetadata[] {
    return fs.readdirSync('posts/')
    .filter((file) => file.endsWith('.md'))
    .map((filePath) => {
     const result = fs.readFileSync(`posts/${filePath}`, 'utf-8')
     const matterResult = matter(result)
     return {
       title: matterResult.data.title,
       subtitle: matterResult.data.subtitle,
       date: matterResult.data.date,
       slug: filePath.replace('.md', '')
     }
    })
   }