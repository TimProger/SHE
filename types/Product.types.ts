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
  images: IProductImage[]
  count: number,
}

export interface IBasketProductFull{
  id: number,
  name: string,
  buy_now: boolean,
  product_id: number,
  price: number,
  product_more: IProductMore[];
  price_currency: string,
  color: string,
  discount: number | null,
  images: IProductImage[],
  is_hit: boolean,
  is_new: boolean,
  article: string,
  ml: number
  count: number;
  basket_id: number;
}

interface IProductImage{
  image: string
}

export interface IProduct {
  id: number;
  count?: number;
  name: string;
  buy_now: boolean;
  price: number;
  images: IProductImage[];
  product_more: IProductMore[];
  type: string;
  color: string;
  discount?: number | null;
  about: string | null;
  title: string;
  is_new: boolean;
  is_hit: boolean;
  article: string;
  type_product: string;
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

export interface IOrder {
  id: number;
  id_user_id: number;
  order_id: string
  status_id: number
  data_order: string
  address: string
  chek: string
  pay: boolean;
  name: string;
  buy_now: boolean;
  price: number;
  sum: number
}
