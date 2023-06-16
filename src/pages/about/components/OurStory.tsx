import React from 'react';

const OurStory = () => {
    return (
        <div className='pt-20 text-center pb-20'>
            <div className="flex flex-row justify-center gap-10 h-[60vh]">
                <div className='w-[35%] h-[100%]'>
                    <p className='bg-gradient text-[16px] md:text-[32px] lg:text-[64px]'>Get in Touch</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia similique reiciendis rerum repellat architecto minus? Ut tempora quis ea corporis animi odio quos eveniet minus vero molestias? Voluptatem, omnis nesciunt</p>
                </div>
                <img src="/images/about-person1.png" alt="" className='' />
            </div>
            <p className='mt-10 mb-6 text-[64px] text-[#101828] font-bold'>Some Of Our Team Members</p>
            <div className="flex flex-row justify-center gap-10 ">
                <div className='relative w-fit '>
                    <img src="/images/about-person1-smal.png" alt="" />
                    <div className='absolute -bottom-6 py-5 left-[10px] w-[90%]  about-person-card '>
                        <p className='font-bold text-lg'>Roland Pelea</p>
                        <p>Founder/CEO</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/images/about-person2.png" alt="" className='' />
                    <div className='absolute -bottom-6 py-5 left-[10px] w-[90%]  about-person-card '>
                        <p className='font-bold text-lg'>Zahid Memon</p>
                        <p>Head Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStory;
