interface AffiliatesFeatureProps {
        label: string;
}

const AffiliatesFeature: React.FC<AffiliatesFeatureProps> = ({ label }) => {
        return (
                <div className="flex flex-row w-[50%] gap-2 my-1 md:my-2">
                        <img src="/images/checkhover.png" alt="" className="w-5 h-5  md:w-10 md:h-10"/>
                        <p className="text-[#252525] leading-6 text-[10px] md:text-sm font-medium">{label}</p>
                </div>
        )
}

export default AffiliatesFeature