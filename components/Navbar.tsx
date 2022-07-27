import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../public/logo.png';
import menuIcon from '../public/menu.png';
import { useState } from 'react';

export function Navbar() {

  let router = useRouter();
  const [expanded, setExpanded] = useState(false);
  function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  const title = router.pathname === '/' ? 'Home' : capitalizeFirstLetter( router.pathname.slice(1));

 const handleClick = () => {
setExpanded(!expanded);
 }

  return (
  <>
  <nav className="lg:visible lg:bg-bkdblue-500 lg:shadow-slate-700 lg:drop-shadow-md ">
    <ul className="flex justify-center space-x-20 font-sans font-medium py-2 text-2xl text-bkpink-100 ">
      <li>
        <Link href="/">Home</Link>
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
  
  <nav className=' bg-bkdblue-500 text-center text-xl font-semibold text-bkpink-100 py-1 lg:hidden' >
    <div className='flex justify-between mx-4'>
      <div className='ml-4' ></div>
      {/* <Image src={logo} height={30} width={30} alt="logo"></Image> */}
      <h4 >{title}</h4>
    <div className="">
      <Image src={menuIcon} height={20} width={20} alt="menu" onClick={handleClick} ></Image>
    </div>
    </div>
{  expanded ?  <ul className="font-sans font-thin   text-xl text-bkpink-100 ">
      {
        title !== 'Home' ?
      <li>
        <Link href="/">Home</Link>
      </li>:null
      }

      {
        title !== 'About' ?

      <li>
        <Link href="/about">About</Link>
      </li>:null
      }
      {
        title !== 'Blog' ?
      <li>
        <Link href="/blogpost">Blog</Link>
      </li>:null
      }
{
        title !== 'Contact' ?
      <li>
        <Link href="/contact">Contact</Link>
      </li>:null
}

    </ul>
    : null}

  </nav>
  
  </>

  );
}
