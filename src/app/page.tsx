'use client';
import { HomeContainer, Product } from '@/styles/pages/home';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

import { getData } from '@/lib/getDate';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Loading from './loading';

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

  if (isLoading) return <Loading />;

  return (
    <>
      {!isLoading && (
        <HomeContainer ref={sliderRef} className="keen-slider">
          {data?.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Product className="keen-slider__slide">
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
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          ))}
        </HomeContainer>
      )}
    </>
  );
}
