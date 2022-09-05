import Link from "next/link";
import { useRouter } from "next/router";

import { BsCart2 } from 'react-icons/bs';

const Header = () => {
    const router = useRouter();
    const route = router.pathname;

    const showCart = () => {
        console.log('Show Cart');
    }

    return ( 
        <header>
          <nav className="flex justify-between bg-slate-900 text-white px-10 py-5">
            <Link href="/">Logo</Link>
            <ul className="flex gap-10">
                <li className={route === '/aboutus' ? 'text-cyan-600' : ''}>
                    <Link href="/aboutus">About Us</Link>
                </li>
                <li className={route === '/categories' ? 'text-cyan-600' : ''}>
                    <Link href="/categories">Categories</Link>
                </li>
                <li className={route === '/contact' ? 'text-cyan-600' : ''}>
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