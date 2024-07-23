import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'
import CustomCursor from '../components/cursor'
// import Header from '../common/header'

export default function DefaultLayout() {
    return (
        <div>
            {/* <Header/> */}
            <CustomCursor />
            <Outlet />
            <Footer />
        </div>
    )
}
