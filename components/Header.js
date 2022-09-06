import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import LogoImg from "../public/logo.png"

import { BsCart2 } from 'react-icons/bs';

const Header = () => {
    const router = useRouter();
    const route = router.pathname;

    const showCart = () => {
        console.log('Show Cart');
    }

    return ( 
        <header>
          <nav className="flex justify-between items-center bg-slate-900 text-white text-lg px-10 py-3">
            <Link href="/">
                <a className="grid">
                    <Image src={LogoImg} alt='Logo Image' objectFit="contain" objectPosition="center" width={120} height={60} />
                </a>
            </Link>
            <ul className="flex gap-14">
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
            <button onClick={showCart}>
                <BsCart2 size={25} />
            </button>
          </nav>
        </header>
     );
}
 
export default Header;