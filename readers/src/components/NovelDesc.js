import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import {Link} from "react-router-dom"
import CommentForm from './CommentForm';
const NovelDesc = (props) => {
  const[novel,setNovel]=useState({})
  // const[comments,setComments]=useState([])
  const[loaded,setLoaded]=useState(false)
  const{novelId}=props

  useEffect(() => {
    axios.get('http://localhost:8000/api/novels/'+novelId)
        .then(res => {setNovel(res.data)
          // setComments(novel.commentsToNovel)
        setLoaded(true)
        })
  }, [novel.commentsToNovel])
  console.log("hihihi");
  console.log(novel.image);
    return (
        <>
        {loaded &&
    <div style={{backgroundColor:"#4c4c4c"}} className="single-product">
        <div className="container">
          <div style={{display:"flex"}} className="row">
            
            <div style={{backgroundColor:"#7c7c7c",margin:30+"px"}} className="col-md-4">
              <div className="product-slider">
                <div id="slider" class="flexslider">
                      <img src={novel.image}/>
                </div>
              </div>
            </div>
            <div style={{backgroundColor:"#7c7c7c",margin:30+"px"}} className="col-md-6">
              <div claclassNamess="right-content">
                <h4>{novel.novelName}</h4>
                <h5>Description:</h5>
                <p>{novel.desc}. </p>

                <div className="down-content">
                  <div className="categories">
                    <h6>Category: {novel.category}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ol>
              {
                novel.chapters.map((chapter,idx)=>{
                  
                  return(
                 <li key={idx}>Chapter {idx}  ||  <Link to={"/chapters/"+chapter}>View</Link></li>)
                
              })}
            </ol>
          </div>
          <CommentForm novel={novel._id} />
          <div>
          <ol>
              {
                novel.commentsToNovel.map((comment,idx)=>
                 <li key={idx}>{comment.user}: {comment.commentText}  </li>
                
                )}
            </ol>
          </div>
        </div>
    </div>
}
        </>
    )
}

export default NovelDesc
