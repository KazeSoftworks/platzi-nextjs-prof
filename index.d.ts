interface ProfileInterface {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  categoryId: number;
}

type AddProductInterface = Omit<ProductInterface, 'category' | 'id'>;

interface InputProductInterface extends Omit<ProductInterface, 'category' | 'id'> {
  images: FileList;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategoryDataset {
  [key: string]: number;
}

interface AlertOptions {
  active: boolean;
  message: string;
  type: 'none' | 'success' | 'warning' | 'error';
  autoClose: boolean;
}
