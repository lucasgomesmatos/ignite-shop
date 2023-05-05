'use client';

import { getDataProduct } from '@/lib/getDate';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function ProductId() {
  const pathName = usePathname().replace('/product/', '');

  const { data: product, isLoading } = useQuery({
    queryKey: ['productId', pathName],
    queryFn: () => getDataProduct(pathName),
  });

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const handleBuyProduct = async () => {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('http://localhost:3000/api/checkout', {
        priceId: product?.defaultPriceId,
      });

      console.log(response.data);

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      alert('Falha ao redirecionar ao checkout');
      setIsCreatingCheckoutSession(false);
    }
  };

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
        <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}
