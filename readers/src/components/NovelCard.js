import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const NovelCard = (props) => {
  const[nov,setNov]=useState({})
    const{novel}=props
    console.log("category iiiiii");
    console.log(novel);
    useEffect(()=>{
      axios.get('http://localhost:8000/api/novel/'+novel)
        .then(res => {setNov(res.data)
        })

    },[])
    console.log(nov);
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={nov.image} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{nov.novelName}</h4>
        <Link to={"/novel/"+nov._id}>
            View Novel
        </Link>
      </div>
    </div>
    )
}

export default NovelCard