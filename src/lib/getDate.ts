import Stripe from 'stripe';
import { stripe } from './stripe';

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number | string | null;
  description?: string | null;
}

export const getData = async (): Promise<ProductProps[]> => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    };
  });

  return products;
};

export const getDataProduct = async (id: string): Promise<ProductProps> => {
  const product = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount! / 100),
    description: product.description,
  };
};
