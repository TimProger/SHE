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

export interface IProduct {
  is_new: boolean;
  is_hit: boolean;
  product_more: IProductMore[];
  article: string;
  type: IProductType;
  discount?: number | null;
  about: string | null;
  image?: string | null;
  name: string;
  title: string;
  color: string;
  price: number;
  id: number;
  count?: number;
}

export interface IBasketProduct {
  id: number;
  more: number
  count: number;
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
  discount: number,
  image: string,
  is_hit: boolean,
  is_new: boolean,
  article: string
}

export interface IFavProduct {
  id: number;
  more: number
}
