import Image from "next/image";

const CardUs = (props) => {
    return ( 
        <div className="bg-white grid gap-5 p-5 mb-5 md:m-0 rounded-2xl h-full">
            <Image 
            src={props.img} 
            alt='Guitar Image' 
            objectFit="contain" 
            objectPosition='center' 
            width={150} 
            height={150}
            />
            <h2 className="text-lg text-cyan-600">{props.title}</h2>
            <p className="text-slate-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
     );
}
 
export default CardUs;