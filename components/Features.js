import Image from 'next/image'
import React from 'react'



const list_features = [
    {
        images: "/images/icon-online.svg",
        features: "Online Banking",
        description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
        images: "/images/icon-budgeting.svg",
        features: "Simple Budgeting",
        description: "See exactly where your money goes each month. Recieve notifications when you're close to hitting your limits."
    },
    {
        images: "/images/icon-onboarding.svg",
        features: "Fast Onboarding",
        description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
        images: "/images/icon-api.svg",
        features: "Open API",
        description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    },

]

const Features = () => {
    return (
        <div className='pt-24 pb-10 bg-[#f4f5f7]'>
            <div className=' max-w-xl md:max-w-7xl mx-auto'>
                <div className='flex flex-col items-center md:items-start'>
                    <h2 className='text-4xl md:text-7xl'>Why Choose Easybank ?</h2>
                    <h4 className='text-xl text-Grayish-Blue pt-5 w-3/4 md:w-1/2'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</h4>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-20'>
                    {list_features.map((item, idx) => (
                        <div key={idx} className='flex flex-col items-center gap-4 lg:items-start '>
                            <Image
                                src={item.images}
                                width={100}
                                height={100}
                                alt="features.svg"
                            />
                            <h3 className='text-2xl'>{item.features}</h3>
                            <p className='text-base md:w-full w-3/4 text-gray-400 text-center lg:text-start'>{item.description}</p>

                        </div>
                    ))}

                </div>

            </div>

        </div>

    )
}

export default Features