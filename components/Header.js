import Link from "next/link";
import { BsCart2 } from 'react-icons/bs';

const Header = () => {
    const showCart = () => {
        console.log('Show Cart');
    }

    return ( 
        <header>
          <nav className="flex justify-between bg-slate-900 text-white px-10 py-5">
            <Link href="/">Logo</Link>
            <ul className="flex gap-10">
                <li>
                    <Link href="/aboutus">About Us</Link>
                </li>
                <li>
                    <Link href="/categories">Categories</Link>
                </li>
                <li>
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