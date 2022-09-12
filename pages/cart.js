import CardCart from "../components/CardCart";
import { useCart } from "../context/cartContext";

const Cart = () => {
    const {cart, deleteCart} = useCart()

    const arrayTotal = cart.map(elem => elem.quantity * elem.price)

    const sumTotal = arrayTotal.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

    const handleDelete = (e) => {
        const name = e.target.value

        const itemSelected = cart.find(elem => elem.name === name);
        const arrayFilter = cart.filter(elem => elem.name !== name);
        
        if(itemSelected.quantity === 1){ 
            deleteCart(arrayFilter) 
            return;
        }

        itemSelected.quantity--
        const newArray = [...arrayFilter, itemSelected]
        deleteCart(newArray)
    }
    return ( 
        <div className="min-h-[50vh]">
            <h1 className="text-2xl md:text-5xl md:p-14 px-6 pt-6">Cart</h1>
            {!cart.length && <p className="text-center text-xl p-10">Your Cart is Empty</p>}
            {cart.map(elem => <CardCart key={Math.random()} name={elem.name} price={elem.price} image={elem.image} quantity={elem.quantity} delete={handleDelete} />)}
            <div className="flex flex-col items-center gap-5 md:flex-row bg-orange-500 w-3/4 m-auto p-4 rounded-md my-10 text-white text-xl"><span className="font-bold text-gray-200">Total Amount:</span> USD {sumTotal.toFixed(2)} .-</div>
        </div>
     );
}
 
export default Cart;