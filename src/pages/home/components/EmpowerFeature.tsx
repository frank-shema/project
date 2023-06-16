interface EmpowerFeatureProps {
        label: string;
}

const EmpowerFeature: React.FC<EmpowerFeatureProps> = ({ label }) => {
        return (
                <div className="flex flex-row w-[50%] gap-2 my-1 md:my-2">
                        <img src="/images/checkhover.png" alt="" className="w-5 h-5  md:w-7 md:h-7 lg:w-9 lg:h-9"/>
                        <p className="text-[#252525] leading-6 text-[8px] sm:text-[10px] md:text-xs font-medium">{label}</p>
                </div>
        )
}

export default EmpowerFeature