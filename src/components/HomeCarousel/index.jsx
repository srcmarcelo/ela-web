import React from 'react';
import { Image } from 'antd';
import { CarouselContainer, Item } from './styles';
import image1 from '../../assets/images/img1.jpg';
import image2 from '../../assets/images/img2.jpg';
import image3 from '../../assets/images/img3.jpg';

const HomeCarousel = () => (
  <CarouselContainer autoplay>
    <Item>
      <Image
        src={image1}
        preview={false}
        className='image'
        alt='Venha voar alto no Educandário Ler e Aprender!'
      />
    </Item>
    <Item>
      <Image
        src={image2}
        preview={false}
        className='image'
        alt='Há mais de 20 anos transformando vidas através da educação!'
      />
    </Item>
    <Item>
      <Image
        src={image3}
        preview={false}
        className='image'
        alt='Impactar a educação da futura geração: esse é o nosso proósito!'
      />
    </Item>
  </CarouselContainer>
);

export default HomeCarousel;
