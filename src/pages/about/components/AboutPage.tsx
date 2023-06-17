
const AboutPage = () => {
    return (
        <div className="relative   w-[100vw] bg-[#F2F4F7] px-5 md:px-20 lg:px-40 pb-20 about">
            <div className="pt-[30%] sm:pt-[17.3%]  md:pt-[13%] relative">
                <p className="text-[10px] md:text-[14px] lg:text-[18px] font-bold bg-gradient">Here to assist your every needs</p>
                <p className="font-bold text-2xl md:text-[36px] lg:text-5xl" >Ox Trade Funding <br /><span className="bg-gradient">About Us</span> </p>
                <p className="mt-6 font-normal text-[9px] md:text-sm lg:text-lg text-[#101828]">Feel free to contact us for further assistance during our business hours.</p>
                <button className="bg-[#2D66EE] rounded-lg text-white py-1 px-2 md:py-3 md:px-6 text-xs md:text-base lg:text-base">Contact Us</button>
            </div>
        </div>
    );
}

export default AboutPage;
