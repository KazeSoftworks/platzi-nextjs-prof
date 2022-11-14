import axios, { AxiosRequestConfig } from 'axios';
import endPoints from '@services/api';

const addProduct = async (body: InputProductInterface): Promise<ProductInterface> => {
  const config: AxiosRequestConfig = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  // The api cant handle FileList for images, only string[]!
  const standardBody: AddProductInterface = {
    ...body,
    // images: [body.images[0].name], //realistic
    images: ['https://api.lorem.space/image/watch?w=640&h=480&r=8957'], //with mock img
  };

  const response = await axios.post<ProductInterface>(endPoints.products.postProducts, standardBody, config);
  return response.data;
};

const deleteProduct = async (id: number): Promise<unknown> => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};

export { addProduct, deleteProduct };
