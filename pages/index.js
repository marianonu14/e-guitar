import Head from 'next/head'
import Link from 'next/link'

import Hero from '../components/Hero'
import CardSection from '../components/CardSection'
import CardUs from '../components/CardUs'
import Carousel from '../components/Carousel'

import BanjoImg from '../public/bass_1.png'
import AcousticImg from '../public/acoustic_1.png'
import ElextricImg from '../public/electric_1.png'
import WhyUsImg1 from '../public/whyus_1.png'
import WhyUsImg2 from '../public/whyus_2.png'
import WhyUsImg3 from '../public/whyus_3.png'
import WhyUsImg4 from '../public/whyus_4.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>E-guitar</title>
        <meta name="description" content="A e-commerce for music instruments, accessories and equipment" />
      </Head>
      <main>
        <Hero />
        <section className='lg:flex lg:justify-evenly items-center gap-5 p-10 '>
          <div className='lg:w-1/4 p-10'>
            <h2 className='font-bold text-3xl mb-5 text-slate-900'>The Best Guitars For Newcomers to Pro Players</h2>
            <p className='text-slate-600 mb-5'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <Link href="/categories"><button className='btn'>Explore</button></Link>
          </div>
          <CardSection img={BanjoImg} title={'Realtik Bass - Cod. 12345'} price={'500.00'} />
          <CardSection img={AcousticImg} title={'Atkin Acoustic - Cod. 12345'} price={'290.00'} />
          <CardSection img={ElextricImg} title={'Koa Electric - Cod. 12345'} price={'720.00'} />
        </section>
        <section className='bg-slate-300 p-10 shadow-xl'>
          <div>
            <h2 className='font-bold text-3xl mb-5 text-slate-900'>Why Choose Us</h2>
            <p className='text-gray-700 mb-5 md:w-1/3'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor.</p>
          </div>
          <div className='md:flex justify-evenly gap-5'>
            <CardUs img={WhyUsImg2} title={'Free Shipping'} />
            <CardUs img={WhyUsImg1} title={'Easy to Shop'} />
            <CardUs img={WhyUsImg3} title={'24/7 Support'} />
            <CardUs img={WhyUsImg4} title={'Hassle FreeReturns'} />
          </div>
        </section>
        <section className='p-5'>
          <div>
              <h2 className='font-bold text-3xl text-center mt-10 text-slate-900'>Testimonials</h2>
          </div>
          <Carousel />
        </section>
      </main>
    </>
  )
}
