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

interface Category {
  id: number;
  name: string;
  image: string;
}
