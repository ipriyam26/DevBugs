import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className=" bg-slate-200 shadow-slate-700 drop-shadow-md">
        <ul className="flex justify-center space-x-20 font-sans font-medium py-2 text-2xl text-zinc-500 ">
          <li>
            <Link  href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blog</Link>
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
