import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from './Card'
const Categories = () => {
    const [categories,setCategories]=useState([])
    const [load,setLoad]=useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/categories')
        .then(res => {setCategories(res.data)
            console.log(categories);
            setLoad(true)
        })
        .catch(err=>console.log(err))
    },[])
    console.log(categories);
    return (
        <>
        {load && 
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                    {categories.map((category,id) => (
                    <div className="col-md-4" key={id}>
                        <Card category={category} />
                    </div>
                    ))}
            </div>
        </div>
        }
    </>
    )
}

export default Categories
