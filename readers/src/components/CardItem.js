import React from 'react';
import { Link } from 'react-router-dom';
const CardItem = (props) => {
    const {novel}=props
    return (
        <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={'/novel/'+novel._id}>
          <figure className='cards__item__pic-wrap' data-category={novel.name}>
            <image
              className='cards__item__img'
              src={novel.image}
            />
          </figure>
        </Link>
      </li>
    </>
    )
}

export default CardItem
