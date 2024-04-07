import { Laptop2, Maximize2, Volume2 } from 'lucide-react';
import {HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, LayoutList, Mic2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>
          
          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 1</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 2</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 3</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 4</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 5</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 6</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 7</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 8</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 9</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 10</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 11</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 12</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 13</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 14</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 15</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-5'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-6'>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/X_cover.png" width={104} height={104} alt="Capa do álbum X do Ed Sheeran" />
              <strong>X</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/X_cover.png" width={104} height={104} alt="Capa do álbum X do Ed Sheeran" />
              <strong>X</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/X_cover.png" width={104} height={104} alt="Capa do álbum X do Ed Sheeran" />
              <strong>X</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/X_cover.png" width={104} height={104} alt="Capa do álbum X do Ed Sheeran" />
              <strong>X</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/X_cover.png" width={104} height={104} alt="Capa do álbum X do Ed Sheeran" />
              <strong>X</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/X_cover.png" width={104} height={104} alt="Capa do álbum X do Ed Sheeran" />
              <strong>X</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for you</h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href='' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/X_cover.png" className='w-full' width={120} height={120} alt="Capa do álbum X do Ed Sheeran" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Ed Sheeran and more</span>
            </a>
            <a href='' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/X_cover.png" className='w-full' width={120} height={120} alt="Capa do álbum X do Ed Sheeran" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Ed Sheeran and more</span>
            </a>
            <a href='' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/X_cover.png" className='w-full' width={120} height={120} alt="Capa do álbum X do Ed Sheeran" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Ed Sheeran and more</span>
            </a>
            <a href='' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/X_cover.png" className='w-full' width={120} height={120} alt="Capa do álbum X do Ed Sheeran" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Ed Sheeran and more</span>
            </a>
            <a href='' className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src="/X_cover.png" className='w-full' width={120} height={120} alt="Capa do álbum X do Ed Sheeran" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Ed Sheeran and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-850 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
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
          <SkipBack size={20} className='text-zinc-200' />
          <button className='w-10 h-10 flex items-center justify-center p-2 rounded-full bg-white text-black'>
                <Play fill="black" />
          </button>
          <SkipForward size={20} className='text-zinc-200' />
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
    </div>
  );
}
