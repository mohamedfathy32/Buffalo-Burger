import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="size-full flex justify-center items-center gap-3">
            <Link to={'/AboutUs'}>About Us</Link>
            <Link to={'/CartDetails'}>CartDetails</Link>
            <Link to={'/FranchiseRequest'}>FranchiseRequest</Link>
            <Link to={'/Menu'}>Menu</Link>
            <Link to={'/'}>Home</Link>
        </div>
    )
}