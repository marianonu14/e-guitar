import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import Data from '../../services/db.json'
import ProductCard from '../../components/ProductCard';

const Product = () => {
    const [data, setData] = useState();
    const router = useRouter();

    useEffect(()=>{
        setData(Data[router.query.product])
    })

    let titleCategory = '';

    if(router.query.product){
        titleCategory = router.query.product.charAt(0).toUpperCase() + router.query.product.slice(1)
    }

    return ( 
        <>
            <h1 className="text-2xl md:text-5xl p-14">Category - {titleCategory}</h1>
            <div className='w-3/4 m-auto'>
                {data && data.map(elem => <ProductCard key={elem.id} name={elem.nameProduct} price={elem.price} image={elem.img} />)}
            </div>
        </>
     );
}
 
export default Product;
