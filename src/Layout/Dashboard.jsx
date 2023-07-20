import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendar, FaHome, FaCalendarAlt } from 'react-icons/fa'

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}

                <Outlet></Outlet>

                <label htmlFor="my-drawer " className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-black">
                    {/* Sidebar content here */}
                    <li><NavLink to='dashboard/home'><FaHome /> User Home</ NavLink></li>
                    <li><NavLink to='dashboard/reservation'><FaCalendarAlt /> Reservation</NavLink></li>
                    <li><NavLink to='dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/myCart'><FaShoppingCart /> My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/menu'>Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order</NavLink></li>


                </ul>
            </div>
        </div>
    );
};

export default Dashboard;