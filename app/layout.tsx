import './globals.css'
import {Metadata} from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title : 'Adeh-blog 2.0 : Home Page',
  description: 'NextJS 13 Application',
}

function Header(){
  return  (
      <header>
       <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
        <Image src='/logo.png' alt='logo' width={40} height={40} className='mx-auto'/>
        <Link href='/'>
         <h1 className='text-2xl text-white font-bold mt-4'>AdeHenry's Blog</h1>
        </Link>
        <p className='text-slate-300'>👋 Welcome to my tech blog 💻</p>
       </div>
      </header>)
}

function Footer() {
    return (
      <footer>
        <div className='border-t border-slate-400 mt-12 py-6 text-center text-slate-400'>
         <p>Developed by AdeHenry</p>
        </div>
      </footer>)
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <head />
      <body className='mx-auto px-4'>
        <div className='mx-auto max-w-2xl'>
         <Header />
         <main>
           {children}
         </main>
         <Footer />
        </div>
      </body>
    </html>
  )
}
