import Image from "next/image";

import ImgAbout from "../public/aboutus.jpg"

const AboutUs = () => {
    return ( 
        <div>
            <h1 className="text-2xl md:text-5xl md:p-14 px-6 pt-6">About Us</h1>
            <div className="lg:flex justify-evenly mx-4 mb-20 gap-8">
                <div className="imgabout flex justify-center items-center overflow-hidden md:w-1/2 lg:w-1/3 m-auto">
                    <Image 
                    src={ImgAbout} 
                    alt='Guitar Image' 
                    objectFit="cover" 
                    objectPosition='center' 
                    width={450} 
                    height={450}
                    />
                </div>
                <div className="flex flex-col gap-10 lg:w-1/2 my-10 mx-auto text-slate-800 tracking-wide">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque nemo sint aut? Voluptas tempore iste in eius alias! Ipsam reiciendis nisi temporibus iusto nulla quos quam eum doloremque molestias! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda placeat, adipisci quaerat sequi atque quam qui ab voluptatem iusto iste, voluptatum suscipit aliquam recusandae incidunt. At reprehenderit nesciunt quibusdam dignissimos?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque nemo sint aut? Voluptas tempore iste in eius alias! Ipsam reiciendis nisi temporibus iusto nulla quos quam eum doloremque molestias! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda placeat, adipisci quaerat sequi atque quam qui ab voluptatem iusto iste, voluptatum suscipit aliquam recusandae incidunt. At reprehenderit nesciunt quibusdam dignissimos?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque nemo sint aut? Voluptas tempore iste in eius alias! Ipsam reiciendis nisi temporibus iusto nulla quos quam eum doloremque molestias! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda placeat, adipisci quaerat sequi atque quam qui ab voluptatem iusto iste, voluptatum suscipit aliquam recusandae incidunt. At reprehenderit nesciunt quibusdam dignissimos?</p>
                </div>
            </div>
        </div>
     );
}
 
export default AboutUs;