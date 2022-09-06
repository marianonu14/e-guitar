import { useRouter } from 'next/router'

const Product = () => {
    const router = useRouter();

    console.log(router.pathname);
    return ( 
        <div>
            <h1 className="text-2xl md:text-5xl p-14">Categories - {router.query.product}</h1>
        </div>
     );
}
 
export default Product;
