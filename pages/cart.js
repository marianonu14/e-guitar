import CardCart from "../components/CardCart";
import { useCart } from "../context/cartContext";

const Cart = () => {
    const {cart} = useCart()

    console.log(cart);

    return ( 
        <div className="min-h-[50vh]">
            <h1 className="text-2xl md:text-5xl md:p-14 px-6 pt-6">Cart</h1>
            {!cart.length && <p className="text-center text-xl p-10">Your Cart is Empty</p>}
            {cart.map(elem => <CardCart key={Math.random()} name={elem.name} price={elem.price} image={elem.image}/>)}
        </div>
     );
}
 
export default Cart;