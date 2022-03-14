import React from "react";
import { Image } from "antd";
import { CarouselContainer, Item} from './styles'

const HomeCarousel = () => (
        <CarouselContainer autoplay>
          <Item>
            <Image src="/images/img1.jpg" preview={false} className="image" />
          </Item>
          <Item>
            <Image src="/images/img2.jpg" preview={false} className="image" />
          </Item>
          <Item>
            <Image src="/images/img3.jpg" preview={false} className="image" />
          </Item>
        </CarouselContainer>
  );
  
  export default HomeCarousel;
  