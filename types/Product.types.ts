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
  link: string;
}

export interface IProductMore {
  id: number;
  ml: number;
  price_currency: string;
  price: number;
}

export interface IBasketProductFull{
  article: string;
  buy_now: boolean;
  count: number;
  discount: number | null;
  more: number;
  id: number;
  image: string;
  is_hit: boolean;
  is_new: boolean;
  ml: number;
  name: string;
  price: number;
  price_currency: string;
  product_id: number;
  color: string;
}

export interface IProductImage{
  image: string;
  show: boolean
}

export interface IProduct {
  id: number;
  count?: number;
  name: string;
  buy_now: boolean;
  price: number;
  images: IProductImage[];
  product_more: IProductMore[];
  color_name: string;
  type: string;
  color: string;
  discount?: number | null;
  about: string | null;
  title: string;
  is_new: boolean;
  is_hit: boolean;
  article: string;
  product_type: string;
  category_id: number;
  about_text: string;
  about_title: string;
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
  details: string;
  id_user_id: number;
  order_id: string;
  bank_id: string | null;
  status_id: number;
  status: number;
  data_order: string;
  delivery_id: number;
  address: string;
  chek: string;
  pay: boolean;
  name: string;
  buy_now: boolean;
  price: number;
  sum: number;
  count_product: number;
  price_currency: string;
  pay_online: string;
  order_list: {
    id: number;
    order_id: number;
    product_id: number;
    name: string;
    ml: number;
    color: string;
    article: string;
    image: string;
    money: number;
    count: number;
  }[];
}

export interface IFilter {
  name: string;
  option: {
    id: number;
    name: string;
    color?: string;
    color_name?: string;
  }[];
  name_lang: string;
}
