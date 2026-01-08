import { NavLink } from "react-router-dom"
export const Header = () =>{
    return (
        <>
        <div className="flex items-center justify-around bg-gray-500 p-3 shadow">
            <div>
                <NavLink to="/">
                    <h1 className="text-2xl text-amber-50 mr-70">WorldTour</h1>
                </NavLink>
            </div>
            <div>
                <ul className="flex gap-12 ">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="country">Country</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}