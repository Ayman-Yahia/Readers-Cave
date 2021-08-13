import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const NovelCard = (props) => {
  const[nov,setNov]=useState({})
  const [se,setSe]=useState(false)
    const{novel}=props
    console.log("mmm");
    console.log(novel);
    useEffect(()=>{
      axios.get('http://localhost:8000/api/novels/'+novel)
        .then(res => {setNov(res.data)
          setSe(true)
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