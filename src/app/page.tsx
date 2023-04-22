'use client';
import { HomeContainer, Product } from '@/styles/pages/home';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

import { getData } from '@/lib/getDate';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getData,
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {data?.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image
            placeholder="blur"
            blurDataURL={product.imageUrl}
            src={product.imageUrl}
            alt=""
            width={520}
            height={480}
          />
          <footer>
            <strong>{product.name}</strong>
            <span>R$ {product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}
