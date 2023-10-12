import Image from 'next/image'
import { Metadata } from 'next'
import Rectangle from './components/Rectangle/rectangle';
import mermaidImage from '../../public/mermaid.png';
import ScrollSection from './components/ScrollSection/scrollsection';

export const metadata: Metadata = {
  title: 'Ece | Created a Next App',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden items-center justify-between">
      <div className='h-screen'>
        <Rectangle />
      </div>
      <div className='h-screen'>
        <Image src={mermaidImage} width={150} height={300} alt='mermaid' />
      </div>
        <ScrollSection />
    </main>
  )
}
