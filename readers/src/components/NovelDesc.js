import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import {Link} from "react-router-dom"
const NovelDesc = (props) => {
  const[novel,setNovel]=useState({})
  const[chapters,setChapters]=useState([])
  const[comments,setComments]=useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/novels'+props.id)
        .then(res => {setNovel(res.data)
        setChapters(novel.chapters)})
        setComments(novel.commentsToNovel)
  }, [])

  
    return (
        <>
    <div style={{backgroundColor:"#4c4c4c"}} className="single-product">
        <div className="container">
          <div style={{display:"flex"}} className="row">
            
            <div style={{backgroundColor:"#7c7c7c",margin:30+"px"}} className="col-md-4">
              <div className="product-slider">
                <div id="slider" class="flexslider">
                      <image src={novel.image}/>
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
                chapters.map((chapter,idx)=>
                 <li key={idx}>{chapter.name}  ||  <Link to={"/chapters/"+chapter._id}>View</Link></li>
                
                )}
            </ol>
          </div>
          <div>
          <ol>
              {
                comments.map((comment,idx)=>
                 <li key={idx}>{comment.user}: {comment.commentText}  </li>
                
                )}
            </ol>
          </div>
        </div>
    </div>
        </>
    )
}

export default NovelDesc
