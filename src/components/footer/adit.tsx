import Footer from "./Footer"
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom"
export default function OtherLinks() {
    return (
        <div className="flex gap-2 flex-col">
            <p><Link to="/dlskjaf;">Terms and service</Link></p>
            <p><Link to="/dlskjaf;">Privacy policy</Link></p>
            <p><Link to="/dlskjaf;">refund policy</Link></p>
        </div>
    )
}
