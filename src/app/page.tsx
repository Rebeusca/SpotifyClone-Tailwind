'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { madeForYouData } from '@/lib/data';
import { recentlyPlayedData } from '@/lib/data';
import Image from 'next/image'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Navbar />
        
        <main className="flex-1 pl-[20rem] pt-6 pb-32 w-64">
          <div className='flex items-center gap-5'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-3 mt-3 pr-8 w-full'>
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
              <strong className="max-w-[8rem]">Pronounced Lĕh-nérd Skin-nérd</strong>
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
              <Image src="/strange-trails_cover.png" width={104} height={104} alt="Capa do álbum Strange Trails do Lord huron" />
              <strong>Strange Trails</strong>
              <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-400 text-black shadow-md shadow-black ml-auto mr-8 invisible group-hover:visible'>
                <Play fill="black" />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for you</h2>
          <div className='container mt-3'>
            <Swiper
              spaceBetween={-375}
              slidesPerView={3}
              navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
              pagination={{ clickable: true }}
              className='mySwiper'
            >
              {madeForYouData.map((data, index) => (
                <SwiperSlide key={index}>
                  <a href='' className='flex flex-col justify-items-center gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
                    <div className='w-full h-full object-cover'>
                      <Image src={data.image} width={500} height={500} alt="Capa DailyMix 1" />
                    </div>
                  <strong className='font-semibold'>{data.title}</strong>
                  <span className='text-sm text-zinc-500'>{data.description}</span>
                </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        
          <h2 className='font-semibold text-2xl mt-10'>Recently played</h2>
          <div className='container mt-3'>
            <Swiper
              spaceBetween={-375}
              slidesPerView={3}
              navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
              pagination={{ clickable: true }}
              className='mySwiper'
            >
              {recentlyPlayedData.map((data, index) => (
                <SwiperSlide key={index}>
                  <a href='' className='flex flex-col justify-items-center gap-1 w-64 h-80 bg-white/5 p-3 rounded-md hover:bg-white/10'>
                    <div className='w-full h-full object-cover'>
                      <Image src={data.image} width={500} height={500} alt="Capa DailyMix 1" />
                    </div>
                  <strong className='font-semibold'>{data.title}</strong>
                  <span className='text-sm text-zinc-500'>{data.description}</span>
                </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
