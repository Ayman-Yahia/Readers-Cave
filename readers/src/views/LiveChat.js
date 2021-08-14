import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Chat from '../components/Chat'
const LiveChat = () => {
    return (
        <>
		<div className='background'>
        <Header />
        <Chat /><br/>
        <Footer />
		</div>
        </>
    )
}

export default LiveChat
