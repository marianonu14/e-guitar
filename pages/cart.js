import CardCart from "../components/CardCart";
import { useCart } from "../context/cartContext";

const Cart = () => {
    const {cart} = useCart()

    const arrayTotal = cart.map(elem => elem.quantity * elem.price)

    const sumTotal = arrayTotal.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0)

    return ( 
        <div className="min-h-[50vh]">
            <h1 className="text-2xl md:text-5xl md:p-14 px-6 pt-6">Cart</h1>
            {!cart.length && <p className="text-center text-xl p-10">Your Cart is Empty</p>}
            {cart.map(elem => <CardCart key={Math.random()} name={elem.name} price={elem.price} image={elem.image} quantity={elem.quantity} />)}
            <div className="flex flex-col items-center gap-5 md:flex-row bg-orange-500 w-3/4 m-auto p-4 rounded-md my-10 text-white text-xl"><span className="font-bold text-gray-300">Total Amount:</span> USD {sumTotal} .-</div>
        </div>
     );
}
 
export default Cart;