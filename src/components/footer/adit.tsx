import {  Link, } from "react-router-dom"
export default function OtherLinks() {
    return (
        <div className="flex gap-2 flex-col">
            <p><Link to="/terms-and-service">Terms and service</Link></p>
            <p><Link to="/privacy-policy">Privacy policy</Link></p>
            <p><Link to="/refund-policy">refund policy</Link></p>
        </div>
    )
}
