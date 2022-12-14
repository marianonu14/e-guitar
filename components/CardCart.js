
import Image from "next/image";

const CardCart = (props) => {
    return ( 
    <div className="flex flex-col md:flex-row gap-10 justify-between items-center bg-slate-700 mb-5 p-5 rounded-2xl shadow-xl w-3/4 m-auto">
        <div className="bg-white flex rounded-2xl overflow-hidden">
            <Image src={`/../public/${props.image}`} alt='Product Image' width={100} height={100} objectFit='contain' objectPosition='center'  />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-5">
            <h1 className="text-white text-xl">{props.name}</h1>
            <p className="text-white text-xl"><span className="text-cyan-600">Unitary Price -</span> USD {props.price.toFixed(2)}</p>
            <p className="text-white text-xl"><span className="text-cyan-600">Quantity - </span>{props.quantity}</p>
        </div>
        <button 
        className="btn flex justify-center w-full md:w-1/6 bg-red-500 hover:text-red-500 border-white rounded-xl text-white gap-3"
        onClick={props.delete}
        value={props.name}
        >
            Delete
        </button>
    </div>
     );
}


export default CardCart;