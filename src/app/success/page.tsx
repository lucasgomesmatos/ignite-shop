'use client';

import { getQuerySession } from '@/lib/getDate';
import { ImageContainer, SuccessContainer } from '@/styles/pages/success';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Loading from '../loading';

export default function Success() {
  const searchParams = useSearchParams();
  const query = searchParams.get('session_id');

  const { data: success, isLoading } = useQuery({
    queryKey: ['session', query],
    queryFn: () => getQuerySession(query),
  });

  if (isLoading) return <Loading />;

  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer>
        <Image
          src={success?.product.imageUrl ?? ''}
          alt=""
          width={120}
          height={110}
        />
      </ImageContainer>
      <p>
        Uhuuul <strong>{success?.customerName}</strong>, sua{' '}
        <strong>{success?.product.name} </strong>
        já está a caminho da sua casa
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
