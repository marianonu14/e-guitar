import Image from 'next/image'
import HeroImg from '../public/hero_image.jpg'

const Hero = () => {
    return ( 
        <div className='relative bg-slate-900  w-full h-96 drop-shadow-2xl'>
            <div className='absolute h-full w-full z-10 flex flex-col md:flex-row justify-evenly items-center p-5'>
                <h1 className='text-white text-center text-6xl'>Guitar Store</h1>
                <p className='text-white text-2xl'>Music Instruments, Accessories and Equipment</p>
            </div>
            <div className='relative h-[100%] opacity-25'>
                <Image src={HeroImg} alt='Banner Image' objectPosition='center' objectFit='cover' layout='fill' />
            </div>
        </div>
     );
}
 
export default Hero;