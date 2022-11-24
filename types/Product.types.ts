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
  type: string;
  discount?: number | null;
  about: string | null;
  image?: string | null;
  name: string;
  color: string;
  price: number;
  id: number;
}

export interface IBasketProduct extends IProduct {
  count: number;
}

export interface IFavProduct extends IProduct {
}
