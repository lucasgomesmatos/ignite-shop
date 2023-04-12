'use client';
import { HomeContainer, Product } from '@/styles/pages/home';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import camiseta1 from '../assets/camisetas1.png';
import camiseta2 from '../assets/camisetas2.png';
import camiseta3 from '../assets/camisetas3.png';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const [list, setList] = useState<number[]>();

  useEffect(() => {
    setTimeout(() => {
      setList([1, 2, 3]);
    }, 2000);
  }, []);

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <pre>{JSON.stringify(list)}</pre>
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
