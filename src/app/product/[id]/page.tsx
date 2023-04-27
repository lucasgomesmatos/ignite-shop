'use client';

import { getDataProduct } from '@/lib/getDate';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function ProductId() {
  const pathName = usePathname().replace('/product/', '');

  console.log(pathName);

  const { data: product, isLoading } = useQuery({
    queryKey: ['productId', pathName],
    queryFn: () => getDataProduct(pathName),
  });

  return (
    <ProductContainer>
      <ImageContainer>
        {product?.imageUrl && (
          <Image
            placeholder="blur"
            blurDataURL={product.imageUrl}
            src={product.imageUrl}
            alt=""
            width={520}
            height={480}
          />
        )}
      </ImageContainer>
      <ProductDetails>
        <h1>{product?.name}</h1>
        <span>{product?.price}</span>
        <p>{product?.description}</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
