import Image from "next/image";

const CardCarousel = (props) => {
    return ( 
        <div className="p-8">
            <p className="md:w-1/2 m-auto text-slate-600 text-lg">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.”</p>
            <div className="rounded-full overflow-hidden w-32 my-5 mx-auto">
                <Image 
                src={props.img} 
                alt='Guitar Image' 
                objectFit="contain" 
                objectPosition='center' 
                layout="responsive"
                />
            </div>
            <p className="mb-5">{props.name}</p>
        </div>
     );
}
 
export default CardCarousel;