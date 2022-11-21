export interface IProductShort {
  title: string;
  id: number;
}

export interface ISlide {
  title: string;
  date: string;
  image: null;
  id: number;
}

export interface IProduct {
  is_new: boolean;
  is_hit: boolean;
  is_fav: boolean;
  discount?: number | null;
  about: string | null;
  image?: string | null;
  name: string;
  colors?: string[] | null;
  price: number;
  id: number;
}
