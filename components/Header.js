import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCart } from "../context/cartContext";

import LogoImg from "../public/logo.png"

import { BsCart2 } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [navState , setNavState] = useState(false); 
    const {cart} = useCart()

    const router = useRouter();
    const route = router.pathname;

    const handleNav = () => {
        setNavState(!navState);
    }

    return ( 
        <header>
          <nav className="flex justify-between items-center bg-slate-900 text-white text-lg px-10 py-3">
            <Link href="/">
                <a className="grid">
                    <Image src={LogoImg} alt='Logo Image' objectFit="contain" objectPosition="center" width={120} height={60} />
                </a>
            </Link>
            <ul className="hidden md:flex gap-14">
                <li className={route === '/categories' ? 'text-cyan-600' : 'hover:text-cyan-600'}>
                    <Link href="/categories">Categories</Link>
                </li>
                <li className={route === '/aboutus' ? 'text-cyan-600' : 'hover:text-cyan-600'}>
                    <Link href="/aboutus">About Us</Link>
                </li>
                <li className={route === '/contact' ? 'text-cyan-600' : 'hover:text-cyan-600'}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <Link href="/cart">                            
                <button className="hidden md:flex items-center gap-5">
                    <BsCart2 size={25} />
                    <span className="bg-slate-700 px-3 rounded-full text-cyan-500">{cart.length}</span>
                </button>
            </Link>
            <button className="md:hidden cursor-pointer" onClick={handleNav}>
                <AiOutlineMenu size={25}/>
            </button>
          </nav>
          <div className={navState ? "md:hidden z-30 fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300" : undefined}>
                <div className={navState ? 
                                "md:hidden fixed z-30 left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-slate-900 p-10 ease-in duration-700" : 
                                "md:hidden fixed z-30 left-[-100%] top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-slate-900 p-10 ease-in duration-700"}>
                    <div className="flex justify-between item-center mb-10">
                    <Link href="/">
                        <a className="cursor-pointer" onClick={() => {setNavState(false)}}>
                            <Image 
                            src={LogoImg}
                            alt="Website Logo"
                            width="120" 
                            height="60"/>
                        </a>
                    </Link>
                        <div className="text-white cursor-pointer my-auto" onClick={handleNav}>
                            <AiOutlineClose size={25}/>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-10 text-white">
                        <li onClick={()=>{setNavState(false)}} className={route === '/categories' ? 'text-cyan-600' : 'hover:text-cyan-600'}>
                            <Link href="/categories">Categories</Link>
                        </li>
                        <li onClick={()=>{setNavState(false)}} className={route === '/aboutus' ? 'text-cyan-600' : 'hover:text-cyan-600'}>
                            <Link href="/aboutus">About Us</Link>
                        </li>
                        <li onClick={()=>{setNavState(false)}} className={route === '/contact' ? 'text-cyan-600' : 'hover:text-cyan-600'}>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                        <Link href="/cart">                            
                            <button className="flex gap-5 items-center hover:text-cyan-600" onClick={() => {setNavState(false)}}>
                                    Show Cart <BsCart2 size={25} />
                            </button>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
     );
}
 
export default Header;