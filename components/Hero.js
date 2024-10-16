import Image from 'next/image'
import React from 'react'
import Button from './Button/Button'


const DesktopImage = () => {

    return (
        <div className='hidden md:block absolute w-full min-h-[calc(100vh-10rem)]  '>
            <div className='absolute  w-full top-[-110px] right-[-180px] '>
                <Image
                    src='/images/image-mockups.png'
                    width={800}
                    height={800}
                    objectFit='cover'
                    className='absolute z-10'
                />
            </div>
            <div className='absolute w-full'>
                <Image
                    src='/images/bg-intro-desktop.svg'
                    width={1500}
                    height={1200}
                    className='absolute  -top-64 -left-24'
                />
            </div>

        </div>

    )
}

const MobileImage = () => {

    return (
        <div className='md:hidden block w-full min-h-[calc(100vh-10rem)] '>
            <div className='absolute  w-full top-5 right-[0px] '>
                <Image
                    src='/images/image-mockups.png'
                    width={700}
                    height={0}
                    objectFit='cover'
                    className='absolute z-10 h-[700px]'
                />
            </div>
            <div className='absolute w-full  '>
                <Image
                    src='/images/bg-intro-desktop.svg'
                    width={1200}
                    height={1200}
                    className='absolute'
                />
            </div>

        </div>

    )
}

const Hero = () => {

    return (
        <div className='bg-Very-Light-Gray max-w-[100vw] pb-10 md:pb-0  '>
            <div className=' max-w-xl md:max-w-7xl mx-auto  md:min-h-[calc(100vh-6rem)]  flex flex-col-reverse md:flex-row relative  '>
                <div className='flex flex-col pt-32 md:pt-0 w-full md:w-1/2 items-center md:items-start md:justify-center gap-8 '>
                    <h1 className='text-4xl  md:text-7xl '>Next Generation Digital Banking</h1>
                    <h4 className='w-9/12 text-xl text-Grayish-Blue '>Take your financial life online. Your EasyBank account will be
                        one-stop shop for spending, saving, budgeting, investing and much
                        more.</h4>
                    <div className=''>
                        <Button>
                            requested invited
                        </Button>
                    </div>

                </div>
                <div className=' w-full md:w-1/2'>
                    <DesktopImage />
                    <MobileImage />
                </div>





            </div>




        </div >
    )
}

export default Hero