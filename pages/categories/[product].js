import { useRouter } from 'next/router'

const Product = () => {
    const router = useRouter();

    console.log(router.pathname);
    return ( 
        <div>
            <h1>Categoria Producto {router.query.product}</h1>
        </div>
     );
}
 
export default Product;
