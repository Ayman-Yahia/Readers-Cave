import React from 'react'
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
    const image1="../images/slide1.png"
    const image2="../images/slide2.png"
    const image3="../images/slide3.png"
    return (
      <div >
           <Carousel fade={true} pause={false}>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{height:600+"px",width:"100%"}}
        />
        <Carousel.Caption>
          <h3>Most read</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          style={{height:600+"px",width:"100%"}}
        />
        <Carousel.Caption>
          <h3>Suggested</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={{height:600+"px",width:"100%"}}
        />
        <Carousel.Caption>
          <h3>Worth your time</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </div>
       
    )
}

export default ImageSlider
