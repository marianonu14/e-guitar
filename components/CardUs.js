import Image from "next/image";

const CardUs = (props) => {
    return ( 
        <div className="grid gap-5 p-5">
            <Image 
            src={props.img} 
            alt='Guitar Image' 
            objectFit="contain" 
            objectPosition='center' 
            width={200} 
            height={250}
            />
            <h2 className="text-lg text-cyan-600">{props.title}</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, velit. Voluptatum dignissimos</p>
        </div>
     );
}
 
export default CardUs;