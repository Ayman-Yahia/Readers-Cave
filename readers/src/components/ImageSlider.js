import React from 'react'
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
    const image1="https://www.thoughtco.com/thmb/AZVMBV3hQxX5Epf4zWgkpLV5ooY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-942494908-06ddf35dd0dc476fbf73f11b5e978e74.jpg"
    const image2="data:image/jpeg;base64,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"
    const image3="https://jerichowriters.com/wp-content/uploads/2020/11/stock-image-13-1000x408.png"
    return (
      <div >
           <Carousel fade={true} pause={false}>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{height:400+"px",width:"100%"}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          style={{height:400+"px",width:"100%"}}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={{height:400+"px",width:"100%"}}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </div>
       
    )
}

export default ImageSlider
