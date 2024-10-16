import Image from 'next/image'
import React, { useState } from 'react'
import Button from './Button/Button'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import Link from 'next/link'

const NAV_ITEMS = [
    {
        label: "Home",
        // page: "",
    },
    {
        label: "About",
        // page: "about",
    },
    {
        label: "Contact",
        // page: "projects",
    },
    {
        label: "Blog",
        // page: "projects",
    },
    {
        label: "Career",
        // page: "projects",
    },
]

const Header = () => {

    const [mobile, setmobile] = useState(false);

    return (
        <div className='py-10  sticky top-0  items-center z-50  bg-white'>
            <div className=' max-w-xl md:max-w-7xl items-center mx-auto flex justify-between relative'>
                <div >
                    <Image
                        src="images/logo.svg"
                        width={200}
                        height={200}
                        alt="logo.svg"
                    />
                </div>
                <div className={`space-y-8 md:flex md:block hidden  md:space-x-6 md:space-y-0`}>
                    {NAV_ITEMS.map((item, idx) => (
                        <a
                            href={`/${item.page}`}
                            key={idx}
                            className=" text-xl self-center block lg:inline-block text-Grayish-Blue hover:text-Dark-Blue animation-hover relative"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className={` py-6 bg-white w-full rounded-md absolute top-36 md:hidden ${mobile ? 'block' : 'hidden'}  `}>
                    <div className=' flex flex-col gap-6 items-center'>
                        {NAV_ITEMS.map((item, idx) => (
                            <Link
                                href={`/`}
                                key={idx}
                                className=" text-xl  text-Grayish-Blue hover:text-Dark-Blue "
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                </div>
                <div>
                    <div className='hidden md:block'>
                        <Button className=''>
                            Request invite
                        </Button>
                    </div>
                    <div className='md:hidden justify-self-end'>
                        <button
                            className='p-3 border border-gray-300 rounded-lg text-neutral-900 dark:bg-neutral-100'
                            onClick={() => { setmobile(!mobile) }}
                        >
                            {mobile ? <IoMdClose size={30} /> : <IoMdMenu size={25} />}
                        </button>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Header