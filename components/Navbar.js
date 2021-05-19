import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { MenuIcon, ChevronDownIcon } from '@heroicons/react/outline';

export function Navbar() {
  let listener = null;
  const [navBackground, setNavBackground] = useState('nav-inactive');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 80;
      if (show) {
        setNavBackground('nav-active');
        console.log('Black bg');
      } else {
        setNavBackground('nav-inactive');
        console.log('Tranparent bg');
      }
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${navBackground} fixed inset-x-0`}>
      <div className="xl:px-48 md:pl-24 px-6 items-center mx-auto py-4 flex justify-between">
        <Link href="/">
          <img src="logo.png" alt="logo" className="w-32 md:w-48" />
        </Link>

        <div className="hidden ipad:flex justify-evenly w-1/3 items-baseline">
          <Link href="/contact">
            <a
              className={
                router.pathname === '/contact'
                  ? 'border-b-4 border-bnc-yellow rounded-sm text-white'
                  : 'text-white'
              }
            >
              Contact Us
            </a>
          </Link>

          <button className="border border-white w-20 h-8 rounded-sm bg-transparent text-white ml-5">
            <div className="flex justify-center">
              <span className="text-center">Thai</span>

              <ChevronDownIcon className="text-white h-3 w-3 mt-2 ml-1" />
            </div>
          </button>
        </div>

        <div className="sm:hidden flex space-x-8">
          <button className="border border-white w-20 h-8 rounded-sm bg-transparent text-white ml-5">
            <div className="flex justify-center">
              <span className="text-center">Thai</span>

              <ChevronDownIcon className="text-white h-3 w-3 mt-2 ml-1" />
            </div>
          </button>
          <MenuIcon className="block h-6 w-6 text-white" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}
