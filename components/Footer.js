import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button/Button'

const Footer = () => {
    return (
        <div className='py-16 bg-Dark-Blue text-white px-5 md:px-0'>
            <div className=' max-w-xl  md:max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-3 items-start'>
                <div className='flex flex-col items-center md:items-start justify-between h-full'>
                    <Image
                        src="images/logo-dark.svg"
                        width={200}
                        height={200}
                        alt="logo.svg"
                        className=''
                    />
                    <div className='flex flex-row gap-12 md:gap-4 justify-center pt-10'>
                        <Image
                            src="images/icon-facebook.svg"
                            width={30}
                            height={30}
                            alt="facebook.svg"
                        />
                        <Image
                            src="images/icon-youtube.svg"
                            width={30}
                            height={30}
                            alt="youtube.svg"
                        />
                        <Image
                            src="images/icon-twitter.svg"
                            width={30}
                            height={30}
                            alt="twitter.svg"
                        />
                        <Image
                            src="images/icon-pinterest.svg"
                            width={30}
                            height={30}
                            alt="pinterest.svg"
                        />
                        <Image
                            src="images/icon-instagram.svg"
                            width={30}
                            height={30}
                            alt="instagram.svg"
                        />

                    </div>
                </div>
                <div className='flex justify-between pt-10 md:pt-0'>
                    <div>
                        <ul className='flex flex-col gap-3 text-gray-300 h-full'>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/'>Pricing</Link></li>
                            <li><Link href='/'>Products</Link></li>
                            <li><Link href='/'>About Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-3 text-gray-300 h-full'>
                            <li><Link href='/'>Career</Link></li>
                            <li><Link href='/'>Community</Link></li>
                            <li><Link href='/'>Privacy Policy</Link></li>

                        </ul>
                    </div>

                </div>

                <div className='flex flex-col gap-5 items-center md:items-end justify-between h-full pt-10 md:pt-0'>
                    <div>
                        <Button>
                            Request Invite
                        </Button>
                    </div>
                    <p className='text-gray-400 text-base'>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
                </div>

            </div>

        </div>
    )
}

export default Footer