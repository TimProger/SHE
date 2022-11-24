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

interface IMoreImage {
  id: number;
  image: string | null;
}

interface IProductMore {
  id: number;
  ml: number;
  price: 100;
  image?: IMoreImage | null
}

interface IProductType {
  id: number;
}

export interface IProduct {
  is_new: boolean;
  is_hit: boolean;
  is_fav: boolean;
  product_more: IProductMore;
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
}

export interface IBasketProduct extends IProduct {
  count: number;
}

export interface IFavProduct extends IProduct {
}
