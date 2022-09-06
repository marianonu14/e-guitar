const ProductCard = (props) => {
    return ( 
        <div className="flex justify-between items-center bg-slate-600 mb-5 p-10 rounded-xl">
            <h1 className="text-white">{props.name}</h1>
            <p className="text-white">USD {props.price}</p>
            <button className="btn">Add to the Cart</button>
        </div>
     );
}
 
export default ProductCard
