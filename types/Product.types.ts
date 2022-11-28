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

export interface IProductMore {
  id: number;
  product_id: number;
  ml: number;
  price_currency: string;
  price: number;
  image_id__image?: string | null
}

interface IProductType {
  id: number;
}

export interface IBasketProductFull{
  id: number,
  count: number,
  name: string,
  buy_now: boolean,
  product_id: number,
  price: number,
  price_currency: string,
  color: string,
  discount: number | null,
  image: string,
  is_hit: boolean,
  is_new: boolean,
  article: string,
  ml: number
}

export interface IProduct {
  id: number;
  count?: number;
  name: string;
  buy_now: boolean;
  price: number;
  image?: string | null;
  product_more: IProductMore[];
  type: IProductType;
  color: string;
  discount?: number | null;
  about: string | null;
  title: string;
  is_new: boolean;
  is_hit: boolean;
  article: string;
  ml: number;
}

export interface IBasketProduct {
  id: number;
  more: number
  count: number;
  product?: number;
}

export interface IFavProduct {
  id: number;
  more: number
}
