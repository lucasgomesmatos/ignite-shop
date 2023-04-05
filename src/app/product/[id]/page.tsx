'use client';

import { usePathname } from 'next/navigation';

export default function ProductId() {
  const pathName = usePathname().slice(-1);
  const pathName = usePathname().slice(-1);

  return <div>{pathName}</div>;
}
