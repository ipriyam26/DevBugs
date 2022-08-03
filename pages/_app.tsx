import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';





function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
document.body.style.background = '#FBEAEB';
  }, []);
  return (
    <>
<Navbar></Navbar>

  <Component {...pageProps} />

  </>
    );
}

export default MyApp
