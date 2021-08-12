import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CardItem from './CardItem'
import category from '../styling/category.css'
const Category = (props) => {
  const [category,setCategory]=useState({})
  useEffect(() => {
    axios.get('http://localhost:8000/api/category'+props._id)
        .then(res => setCategory(res.data));
  }, [])
    return (
        <>
        <div className='cards'>
          <h1>{category.name}</h1>
          <div className='cards__container'>
              <ul className='cards__items'>
                {category.novels.map((novel,idx)=>
                <CardItem
                  src={novel.novelName}
                  path={'/novel/'+novel._id}
                  novel={novel}
                />
                )}
              </ul>
            </div>
          </div>

        </>
    )
}

export default Category
