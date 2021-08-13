import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Chapter from '../components/Chapter';
const ChapterPage = () => {
    const { id } = useParams();
    console.log("mmm");
    console.log(id);
    return (
        <div>
        <Header />
        <Chapter chapterId={id}/>
        <Footer />
            
        </div>
    )
}

export default ChapterPage
