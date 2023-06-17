import React from 'react'
interface OneFaqProps {
        title: string;
        body: string;
}

const OneFaq: React.FC<OneFaqProps> = ({ title, body }) => {
        return (
                <a href="" className='flex flex-row items-center border-[2px] border-gray-200 p-5 rounded-lg afaq'>
                        <div className='w-[15%]'>
                                <svg className='w-[50%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none" />
                                        <polyline points="176 32 176 128 144 104 112 128 112 32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" /><path d="M48,216a23.9,23.9,0,0,1,24-24H208V32H72A23.9,23.9,0,0,0,48,56Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" /><polyline points="48 216 48 224 192 224" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" />
                                </svg>
                        </div>
                        <div>
                                <h2 className='text-base font-poppins font-bold'>{title}</h2>
                                <p>{body}</p>
                                <div className="flex flex-row">
                                        <p>By TopTier 1 author</p>
                                        <svg width="4" height="4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="m-2">
                                                <path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8Z"></path>
                                        </svg>
                                        <p>21 articles</p>
                                </div>
                        </div>
                </a>
        )
}

export default OneFaq