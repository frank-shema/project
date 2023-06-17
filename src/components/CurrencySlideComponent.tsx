import React from 'react'

interface CurrencySlideComponentProps{
        image:string;
        name:string;
        det1:string;
        det2:string;
        inb:string;
}

const CurrencySlideComponent:React.FC<CurrencySlideComponentProps> = ({image,name,det1,det2,inb}) => {
        return (
                <div className="border-r-2 border-gray-600 flex flex-row gap-2 px-2 max-h-5 slideshow-text text-center justify-center min-w-[360px] items-center">
                        <img src={image} alt="" className=" h-5" />
                        <p className='text-xs md:text-base'>{name}</p>
                        <span className="text-gray-500 text-4xl">{'\u00B7'}</span>
                        <span className='text-xs md:text-sm'>{det1}</span>
                        <span className="text-green-500 text-xs md:text-sm">{det2} ( {inb} )</span>
                </div>
        )
}

export default CurrencySlideComponent