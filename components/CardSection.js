import Image from "next/image";

const CardSection = (props) => {
    const classSection = 'bg-white text-slate-900 font-bold tracking-wide text-center rounded-2xl p-5 grid gap-2 mb-10 m-auto lg:m-0 w-3/4 lg:w-auto'
    return ( 
        <div className={classSection}>
            <Image 
            src={props.img} 
            alt='Guitar Image' 
            objectFit="contain" 
            objectPosition='center' 
            width={200} 
            height={250}
            />
            <h2 className="text-lg">{props.title}</h2>
            <p className="text-lg">$ {props.price}</p>
        </div>
     );
}
 
export default CardSection;