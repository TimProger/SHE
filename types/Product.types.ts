export interface IProductShort {
  title: string;
  id: number;
}

export interface ISlide {
  id: number;
  title: string;
  image: null | string;
  data_start: Date | string;
  data_finish: Date | string;
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
