import CurrencySlideComponent from "./CurrencySlideComponent"

const CurrencySlideshow = () => {
        const currencies = [
                {
                        name:"CADCHF",
                        image:"/images/cadchf.png",
                        det1:"0.67670",
                        det2:"+0.00375",
                        inb:"+0.56%"
                },
                {
                        name:"EURAUD",
                        image:"/images/euraud.png",
                        det1:"1.59345",
                        det2:"+0.01163",
                        inb:"-0.72%"
                },
                {
                        name:"EURCAD",
                        image:"/images/eurcad.png",
                        det1:"1.43255",
                        det2:"+0.00705",
                        inb:"+0.49%"
                },
                {
                        name:"EURCHAF",
                        image:"/images/eurchf.png",
                        det1:"0.97081",
                        det2:"+0.00126",
                        inb:"+0.13%"
                },
                {
                        name:"CADCHF",
                        image:"/images/cadchf.png",
                        det1:"0.67670",
                        det2:"+0.00375",
                        inb:"+0.56%"
                },
                {
                        name:"EURAUD",
                        image:"/images/euraud.png",
                        det1:"1.59345",
                        det2:"+0.01163",
                        inb:"-0.72%"
                },
                {
                        name:"EURCAD",
                        image:"/images/eurcad.png",
                        det1:"1.43255",
                        det2:"+0.00705",
                        inb:"+0.49%"
                },
                {
                        name:"EURCHAF",
                        image:"/images/eurchf.png",
                        det1:"0.97081",
                        det2:"+0.00126",
                        inb:"+0.13%"
                },
                {
                        name:"CADCHF",
                        image:"/images/cadchf.png",
                        det1:"0.67670",
                        det2:"+0.00375",
                        inb:"+0.56%"
                },
                {
                        name:"EURAUD",
                        image:"/images/euraud.png",
                        det1:"1.59345",
                        det2:"+0.01163",
                        inb:"-0.72%"
                },
                {
                        name:"EURCAD",
                        image:"/images/eurcad.png",
                        det1:"1.43255",
                        det2:"+0.00705",
                        inb:"+0.49%"
                },
                {
                        name:"EURCHAF",
                        image:"/images/eurchf.png",
                        det1:"0.97081",
                        det2:"+0.00126",
                        inb:"+0.13%"
                },
                
        ]
        return (
                <div className="w-[1000vw] flex flex-row gap-2 overflow-hidden border-y-[2px] border-gray-600 py-1 text-sm">
                       {currencies.map((currency,index)=>{
                        return <CurrencySlideComponent key={index} name={currency.name} det1={currency.det1} det2={currency.det2} inb={currency.inb} image={currency.image} />
                       })}
                </div>
        )
}

export default CurrencySlideshow