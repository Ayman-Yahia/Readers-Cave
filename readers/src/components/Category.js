import React,{useEffect,useState} from 'react'
import axios from 'axios'
import NovelCard from './NovelCard'
const Category = (props) => {
    const[category,setCategory]=useState({})
    const[loade,setLoade]=useState(false)
    const{categoryId}=props
    useEffect(()=>{
        axios.get('http://localhost:8000/api/categories/'+categoryId)
        .then(res => {setCategory(res.data)
            setLoade(true)
        })
    },[])
    return (
        <>
        {loade &&
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                    {category.novels.map(( novel, idx ) => (
                    <div className="col-md-4" key={idx}>
                        <NovelCard novel={novel} />
                    </div>
                    ))}
            </div>
        </div>
        }
        </>
    )
}

export default Category
