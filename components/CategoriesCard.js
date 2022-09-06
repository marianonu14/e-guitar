import Link from "next/link";
import Image from "next/image";

const CategoriesCard = (props) => {
    return ( 
        <div className="bg-white cursor-pointer m-auto">
            <Link href={`/categories/${props.id}`}>
                <Image 
                src={props.img} 
                alt='Category Image' 
                objectFit="cover" 
                objectPosition='center'
                height={1000}
                />
            </Link>
        </div>
     );
}
 
export default CategoriesCard;