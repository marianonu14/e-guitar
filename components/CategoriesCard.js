import Link from "next/link";
import Image from "next/image";

import { BiShoppingBag } from 'react-icons/bi';

const CategoriesCard = (props) => {
    return ( 
        <div className="relative flex cursor-pointer rounded-2xl overflow-hidden">
            <Link href={`/categories/${props.id}`}>
                <div className="absolute z-20 grid items-center text-center w-full h-full lg:text-3xl text-xl text-white">
                    <h1>{props.name}</h1>
                    <button className="btn flex justify-evenly w-4/5 m-auto text-sm bg-cyan-800"><span className="m-auto">Shop By Category</span><BiShoppingBag size={25} /></button>
                </div>
            </Link>
            <div className="absolute z-10 w-full h-full bg-black opacity-80" />
            <Image 
            src={props.img} 
            alt='Category Image' 
            objectFit="cover" 
            objectPosition='center'
            height={1250}
            />
        </div>
     );
}
 
export default CategoriesCard;