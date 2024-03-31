import React from 'react'
import Header from '../components/Header/Header'
import Routers from '../routes/Routers'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home'
import Usestate from '../pages/Usestate'

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Routers />
            </main>
            <Footer />
        </>
    )
}

export default Layout