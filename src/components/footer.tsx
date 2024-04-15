import { Laptop2, Maximize2, PlusCircle, Volume2 } from 'lucide-react';
import { HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, LayoutList, Mic2 } from 'lucide-react'
import Image from 'next/image'

export const Footer = () => {
    return (
        <footer className="fixed z-[99999] inset-x-0 bottom-0 bg-zinc-800 border-t border-zinc-700 px-6 py-3 flex items-center justify-between">
        <div className='flex items-center gap-4'>
        <Image src="/X_cover.png" className='w-full' width={56} height={56} alt="Capa do álbum X do Ed Sheeran" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Photograph</strong>
            <span className='text-xs text-zinc-400'>Ed Sheeran</span>
          </div>
          <div className='ml-16'>
            <Heart strokeWidth={1.5} />
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-8'>
          <Shuffle size={20} className='text-zinc-200' />
          <SkipBack fill="var(--color-zinc-200)" size={20} className='text-zinc-200' />
          <button className='w-10 h-10 flex items-center justify-center p-2 rounded-full bg-white text-black'>
                <Play fill="black" />
          </button>
          <SkipForward fill="var(--color-zinc-200)" size={20} className='text-zinc-200' />
          <Repeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-500'>
              0:31
            </span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1'></div>
            </div>
            <span className='text-xs text-zinc-500'>
              3:10
            </span>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <Mic2 size={18} />
          <LayoutList size={18} />
          <Laptop2 size={18} />
          <div className='flex items-center gap-2'>
            <Volume2 size={18} />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-16 h-1'></div>
            </div>
          </div>
          <div>
            <Maximize2 size={18} />
          </div>
        </div>
      </footer>
    )
}