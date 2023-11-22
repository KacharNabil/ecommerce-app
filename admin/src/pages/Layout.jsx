import React from 'react'
import { Outlet, Link } from "react-router-dom";
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';

export default function Layout() {
    return (
        <>
        <TopNav />
            <div className="flex">
                <SideNav />
                <Outlet />
            </div>
        </>
    )
}
