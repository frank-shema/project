import {  Link, } from "react-router-dom"
export default function Quick() {
    return (
        <div className="flex gap-2 flex-col">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about-us">About Us</Link></p>
            <p><Link to="/evaluations">Evaluations</Link></p>
            <p><Link to="/affiliates">Affiliates</Link></p>
            <p><Link to="/faqs">faq</Link></p>
            <p><Link to="/contact">contact us</Link></p>
            <p><Link to="/client-area">client area</Link></p>
        </div>
    )
}

