import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NovelDesc from '../components/NovelDesc'
import { useParams } from 'react-router-dom';
const Novel = (props) => {
    const { id } = useParams();
    return (
        <>
        <Header />
        <NovelDesc novelId={id}/>
        <Footer />
            
        </>
    )
}

export default Novel
