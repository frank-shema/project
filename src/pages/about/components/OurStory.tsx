// import React from 'react';

const OurStory = () => {
    return (
        <div className='pt-20 text-center pb-20'>
            <div className="block md:flex flex-row justify-center gap-10 mx-5 md:mx-10 lg:mx-20">
                <div className=' md:w-[35%] h-[100%]'>
                    <p className='bg-gradient text-[16px] md:text-[32px] lg:text-[64px]'>Get in Touch</p>
                    <p className="text-[10px] md:text-[16px] lg:text-[20px]">In 2023, Romanian trader Roland Pelea founded OX Trade Funding after witnessing the harsh competition and challenges faced by traders in the industry. Determined to address issues like delayed payouts and a lack of technology, Roland built a prop trading firm that revolutionized the trading landscape. OX Trade Funding became known for its transparent and fair compensation system, cutting-edge technology, and supportive community, empowering traders to thrive and create lasting careers in the world of trading.</p>
                </div>
                <img src="/images/about-person1.png" alt="" className='h-[40vh] mx-auto md:h-fit my-2' />
            </div>
            <p className='mt-10 mb-6  text-[16px] md:text-[32px] lg:text-[64px] text-[#101828] font-bold'>Some Of Our Team Members</p>
            <div className="flex flex-row justify-center gap-10 mx-2.5 md:mx-5 lg:mx-10">
                <div className='relative w-fit '>
                    <img src="/images/about-person1-smal.png" alt="" />
                    <div className='absolute -bottom-6 py-2 md:py-3 lg:py-5 left-[10px] w-[90%]  about-person-card '>
                        <p className='font-bold text-[9px] md:text-[14px] lg:text-lg'>Roland Pelea</p>
                        <p className="text-[9px] md:text-[14px] lg:text-lg">Founder/CEO</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/images/about-person2.png" alt="" className='' />
                    <div className='absolute -bottom-6 py-2 md:py-3 lg:py-5 left-[10px] w-[90%]  about-person-card '>
                        <p className='font-bold text-[9px] md:text-[14px] lg:text-lg'>Zahid Memon</p>
                        <p className="text-[9px] md:text-[14px] lg:text-lg"> Head Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStory;
