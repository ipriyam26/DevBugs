import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
document.body.style.background = '#FBEAEB';
  }, []);
  return (
    <>
      <nav className="bg-bkdblue-500 shadow-slate-700 drop-shadow-md">
        <ul className="flex justify-center space-x-20 font-sans font-medium py-2 text-2xl text-bkpink-100 ">
          <li>
            <Link  href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogpost">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

  <Component {...pageProps} />

  </>
    );
}

export default MyApp
