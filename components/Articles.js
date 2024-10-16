import Image from 'next/image'
import React from 'react'


const list_features = [

    {
        images: "/images/image-currency.jpg",
        name: "claire Robinson",
        article: "Receive money in any currency with no fees",
        description: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
    },
    {
        images: "/images/image-restaurant.jpg",
        name: "Wilson Hutton",
        article: "Treat yourself without worrying about money",
        description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
        images: "/images/image-plane.jpg",
        name: "Wilson Hutton",
        article: "Take your EasyBank card wherever you go",
        description: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
    },
    {
        images: "/images/image-confetti.jpg",
        name: "claire Robinson",
        article: "Our invite-only Beta accounts are now live!",
        description: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
    }

]
const Articles = () => {
    return (
        <div className='py-24 bg-Very-Light-Gray'>
            <div className=' max-w-xl lg:max-w-7xl mx-auto'>
                <h2 className='text-4xl text-center lg:text-start'>Latest Articles</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-20'>
                    {list_features.map((item, idx) => (
                        <div key={idx} className='flex flex-col items-center gap-4 lg:items-start bg-White '>
                            <div className='w-full '>
                                <Image
                                    src={item.images}
                                    width={300}
                                    height={300}
                                    className='w-full object-cover h-48'
                                    alt="articles.svg"
                                />

                            </div>
                            <div className='flex flex-col rounded-md gap-4 p-3'>
                                <p>{item.name}</p>
                                <h3 className='text-2xl'>{item.article}</h3>
                                <p className='text-base text-gray-400 text-center lg:text-start'>{item.description}</p>

                            </div>


                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Articles