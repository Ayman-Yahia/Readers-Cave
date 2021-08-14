import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import RisingNovels from '../components/RisingNovels'
const HomePage = () => {
    const userId = localStorage.getItem("user_id");
    console.log(userId)
    return (
        <>
        <div style={{backgroundColor:"#4c4c4c"}}>
        <Header />
        <ImageSlider   />
        <br></br>
        <RisingNovels />
        <Footer />

        </div>
        
            
        </>
    )
}

export default HomePage
