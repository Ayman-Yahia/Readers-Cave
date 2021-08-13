import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Category from '../components/Category'
const CategoryPage = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
        <Header />
        <Category categoryId={id}/>
        <Footer />
            
        </div>
    )
}

export default CategoryPage
