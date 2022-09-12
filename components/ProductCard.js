import Image from "next/image";
import { useCart } from "../context/cartContext"

import { BsCartPlus } from 'react-icons/bs';


const ProductCard = (props) => {
    const {image, name, price} = props

    const item = {name, price, image, quantity: 1}
    
    const {addCart, cart} = useCart()
    
    const addToCart = () => {
        const validation = cart.some(elem => item.name === elem.name);
        
        if(validation){
            const find = cart.find(elem => item.name === elem.name);
            const filter = cart.filter(elem => item.name !== elem.name)

            find.quantity++
            
            const newItem = [...filter, find]
            return
        }

        addCart(item)
    }

    return ( 
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center bg-slate-700 mb-5 p-5 rounded-2xl shadow-xl">
            <div className="bg-white flex rounded-2xl overflow-hidden">
                <Image src={`/../public/${image}`} alt='Product Image' width={250} height={250} objectFit='contain' objectPosition='center'  />
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-white text-xl">{name}</h1>
                <p className="text-white text-xl"><span className="text-cyan-600">Price -</span> USD {price.toFixed(2)}</p>
                <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga id adipisci nisi officia impedit dolorum, quia accusantium voluptatibus</p>
            </div>
            <button onClick={addToCart} className="btn flex justify-center w-full md:w-1/3 bg-slate-900 rounded-xl text-white gap-3">
                Add to Cart<BsCartPlus size={20} />
            </button>
        </div>
     );
}
 
export default ProductCard
