'use client';
import { Logo } from '@/assets/logo';
import { LoadingContainer } from '@/styles/pages/loading';
import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <LoadingContainer>
      <Logo />
      <ReactLoading type="spin" color="#00b37e" height={40} width={40} />
    </LoadingContainer>
  );
}
