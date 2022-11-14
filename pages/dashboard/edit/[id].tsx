import FormProduct from '@components/FormProduct';
import endPoints from '@services/api';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Edit = (): JSX.Element => {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    async function getProduct(id: number): Promise<void> {
      await axios
        .get<ProductInterface>(endPoints.products.getProduct(id))
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error: Error | AxiosError) => {
          console.log(error);
          if (axios.isAxiosError(error) && error.response?.status === 404) {
            setError('404 Product not found');
          } else {
            setError('500 Internal Server Error');
          }
        });
    }
    const numberId = parseInt(id as string);
    if (id && !isNaN(numberId)) {
      getProduct(numberId);
    }
  }, [router.query, router.isReady]);

  if (error) return <>{error}</>;
  if (product) return <>{<FormProduct product={product} />}</>;

  return <h1>Loading product</h1>;
};
export default Edit;
