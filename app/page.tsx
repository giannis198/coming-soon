import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <section className='h-screen w-screen bg-gradient-to-r from-[rgb(17,6,111)] to-[rgb(38,195,204)] py-32'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center text-indigo-50 md:flex-row'>
          <div className='space-y-5 text-center md:w-1/2'>
            <div className='flex items-center justify-center gap-5'>
              <Image
                src='/image2.png'
                alt=''
                width={40}
                height={40}
                className='h-auto w-auto'
              />
              <h1 className='text-4xl font-semibold uppercase'>Next3d.gr</h1>
            </div>

            <h2 className='text-2xl font-bold uppercase md:text-6xl'>
              Coming Soon
            </h2>
            <h3 className='text-lg font-bold md:text-3xl '>
              Our website is under construction
            </h3>
          </div>

          <div className='items-center justify-center md:flex md:w-1/2'>
            <div className='relative h-[15rem] w-[15rem] md:h-[30rem] md:w-[30rem]'>
              <Image
                src='/image.png'
                alt=''
                fill
                className='h-auto w-auto object-contain'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
