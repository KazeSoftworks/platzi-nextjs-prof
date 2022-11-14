const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const VERSION = process.env.NEXT_PUBLIC_API_VERSION || 'v1';

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id: number) => `${API}/api/${VERSION}/products/${id}`,
    allProducts: `${API}/api/${VERSION}/products/`,
    getListProducts: (limit: number, offset: number) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    postProducts: `${API}/api/${VERSION}/products`,
    putProducts: (id: number) => `${API}/api/${VERSION}/products/${id}`,
    deleteProducts: (id: number) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsersList: (limit: number) => `${API}/api/${VERSION}/users?limit=${limit}`,
    postUser: `${API}/api/${VERSION}/users`,
  },
  categories: {
    getListCategories: `${API}/api/${VERSION}/categories?limit=5`,
    postCategory: `${API}/api/${VERSION}/categories/`,
    getCategory: (id: number) => `${API}/api/${VERSION}/categories/${id}`,
    putCategory: (id: number) => `${API}/api/${VERSION}/categories/${id}`,
    getProductCategory: (id: number) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    postfile: `${API}/api/${VERSION}/files/upload/`,
    getFile: (filename: string) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
