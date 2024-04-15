import { Heart, HomeIcon, Library, PlusCircle, Search } from "lucide-react";

export const Navbar = () => {
    return ( 
        <aside className="fixed top-0 w-72 h-full overflow-y-auto bg-zinc-950 p-6 pb-32">
          <nav className='space-y-5 mt-3'>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Library/>
              Your Library
            </a>
          </nav>
          
          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <div>
              <a href="" className='flex items-center mb-3 gap-2 text-sm font-semibold text-zinc-200'>
                <div className='bg-purple-700 p-1 rounded-sm'>
                  <Heart size={18} fill='var(--color-zinc-200)'/>
                </div>
                <span>Músicas curtidas</span>
              </a>
              <a href="" className='flex items-center mb-2 gap-2 text-sm font-semibold text-zinc-200'>
                <div className='bg-zinc-700 p-1 rounded-sm'>
                  <PlusCircle size={18} />
                </div>
                <span>Criar nova playlist</span>
              </a>
            </div>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Músicas que parecem ser a mesma</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Do tempo do Tamagoshi</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Pra ouvir lavando a louça</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Faxina nostalgia</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Enchanted Echoe</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sentimental Soundtracks</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Eu não sei como fazer uma playlist</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Daily Mix 2</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Radio de Simple Man</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Os melhores rocks dos 70&apos;s</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>me sinto uma Helena do Manuel Carlos</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>MPB</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Pagodinho</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Lofi Beats</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>nada faz sentido</a>
          </nav>
        </aside>
     );
}
 
export default Navbar;