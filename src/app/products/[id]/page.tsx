import { getProduct } from '@/lib/api';
import ProductDisplay from '@/components/ProductDisplay';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDisplay product={product} />;
}

export async function generateStaticParams() {
  const products = await getFeaturedProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}