import Navbar from '@/components/navbar';
import { Laptop2, Maximize2, PlusCircle, Volume2 } from 'lucide-react';
import {HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, LayoutList, Mic2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Navbar />
        
        <main className="flex-1 pl-[20rem] pr-3 pt-6 pb-[10rem]">
          <div className='flex items-center gap-5'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-4 gap-4 mt-6'>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/X_cover.png" width={104} height={104} alt="Capa do álbum X do Ed Sheeran" />
              <strong>X</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black shadow-md shadow-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/hozier_cover.png" width={104} height={104} alt="Capa do álbum Hozier do Hozier" />
              <strong>Hozier</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black shadow-md shadow-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/simple-man_cover.png" width={104} height={104} alt="Capa da música Simple Man" />
              <strong className="max-w-[8rem]">Pronounced 'Lĕh-'nérd 'Skin-'nérd</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black shadow-md shadow-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/strange-trails_cover.png" width={104} height={104} alt="Capa do álbum Strange Trails do Lord huron" />
              <strong>Strange Trails</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black shadow-md shadow-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/use-your-ilusion-II_cover.png" width={104} height={104} alt="Capa do álbum Use Your Ilusion II do Guns N' Roses" />
              <strong>Use Your Ilusion II</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black shadow-md shadow-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/where-the-shadows-ends_cover.png" width={104} height={104} alt="Capa do álbum Where The Shadows Ends do Banners" />
              <strong className="max-w-[8rem]">Where The Shadows Ends</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black shadow-md shadow-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/this-is-acting_cover.png" width={104} height={104} alt="Capa do álbum This is Acting da Sia" />
              <strong>This is Acting</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black shadow-md shadow-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-6 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/lust-for-life_cover.png" width={104} height={104} alt="Capa do álbum Lust for Life da Lana del Rey" />
              <strong>Lust for Life</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black shadow-md shadow-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for you</h2>

          <div className='flex gap-5 mt-4'>
            <a href='' className='flex flex-col justify-items-center gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <div className='w-full h-full object-cover'>
                <Image src="/dailyMix1.png" width={500} height={500} alt="Capa DailyMix 1" />
              </div>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>De Spotify</span>
            </a>
            <a href='' className='flex flex-col gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <div className='w-full h-full object-cover'>
                <Image src="/dailyMix2.png" width={500} height={500} alt="Capa DailyMix 2" />
              </div>
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>De Spotify</span>
            </a>
            <a href='' className='flex flex-col gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <div className='w-full h-full object-cover'>
                <Image src="/dailyMix3.png" width={500} height={500} alt="Capa DailyMix 3" />
              </div>
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-500'>De Spotify</span>
            </a>
            <a href='' className='flex flex-col gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <div className='w-full h-full object-cover'>
                <Image src="/dailyMix4.png" width={500} height={500} alt="Capa DailyMix 4" />
              </div>
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-500'>De Spotify</span>
            </a>
            <a href='' className='flex flex-col gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <div className='w-full h-full object-cover'>
                <Image src="/dailyMix5.png" width={500} height={500} alt="Capa DailyMix 5" />
              </div>
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-500'>De Spotify</span>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Recently played</h2>

          <div className='flex gap-5 mt-4'>
            <a href='' className='flex flex-col justify-items-center gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <div className='w-full h-full object-cover'>
                <Image src="/X_cover.png" width={500} height={500} alt="Capa X" />
              </div>
              <strong className='font-semibold'>X</strong>
              <span className='text-sm text-zinc-500'>De Ed Sheeran</span>
            </a>
            <a href='' className='flex flex-col gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <div className='w-full h-full object-cover'>
                <Image src="/hozier_cover.png" width={500} height={500} alt="Capa Hozier" />
              </div>
              <strong className='font-semibold'>Hozier</strong>
              <span className='text-sm text-zinc-500'>De Hozier</span>
            </a>
            <a href='' className='flex flex-col gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <div className='w-full h-full object-cover'>
                <Image src="/dailyMix2.png" width={500} height={500} alt="Capa DailyMix 2" />
              </div>
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>De Spotify</span>
            </a>
            <a href='' className='flex flex-col gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <div className='w-full h-full object-cover'>
                <Image src="/lust-for-life_cover.png" width={500} height={500} alt="Capa Lust for Life" />
              </div>
              <strong className='font-semibold'>Lust for Life</strong>
              <span className='text-sm text-zinc-500'>De Lana del Rey</span>
            </a>
            <a href='' className='flex flex-col gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <div className='w-full h-full object-cover'>
                <Image src="/use-your-ilusion-II_cover.png" width={500} height={500} alt="Capa DailyMix 5" />
              </div>
              <strong className='font-semibold'>Use Your Ilusion II</strong>
              <span className='text-sm text-zinc-500'>De Guns N' Roses</span>
            </a>
          </div>
        </main>
      </div>
      
      <footer className="fixed inset-x-0 bottom-0 bg-zinc-800 border-t border-zinc-700 px-6 py-3 flex items-center justify-between">
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
    </div>
  );
}
