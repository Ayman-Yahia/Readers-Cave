import React from 'react'
import {Link} from 'react-router-dom'
const Card = (props) => {
    const{category}=props
    return (
      <>
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={category.image} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{category.categoryName}</h4>
        <Link to={"/category/"+category._id}>
            View Novels
        </Link>
      </div>
    </div>
    </>
    )
}

export default Card
