import React from "react";
import { Image } from "antd";
import { CarouselContainer, Item} from './styles'
import image1 from "../../assets/images/img1.jpg"
import image2 from "../../assets/images/img2.jpg"
import image3 from "../../assets/images/img3.jpg"

const HomeCarousel = () => (
        <CarouselContainer autoplay>
          <Item>
            <Image src={image1} preview={false} className="image" />
          </Item>
          <Item>
            <Image src={image2} preview={false} className="image" />
          </Item>
          <Item>
            <Image src={image3} preview={false} className="image" />
          </Item>
        </CarouselContainer>
  );
  
  export default HomeCarousel;
  