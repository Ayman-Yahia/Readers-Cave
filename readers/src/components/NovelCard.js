import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const NovelCard = (props) => {
  const[nov,setNov]=useState({})
  const[lo,setLo]=useState(false)
    const{novel}=props
    console.log("category iiiiii");
    console.log("this is the novel "+novel);
    console.log("sss");
    useEffect(()=>{
      axios.get('http://localhost:8000/api/novel/get/'+novel)
        .then(res => {
          setNov(res.data)
          setLo(true)
        })
        .catch(err=>{console.log(err)
        console.log("error");})

    },[])

    return (
      
        <>
        {lo &&
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
    }
    </>
      
    )
}

export default NovelCard