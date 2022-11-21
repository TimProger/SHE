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
  isNew: boolean;
  isHit: boolean;
  isFav: boolean;
  discount?: number | null;
  image?: string | null;
  title: string;
  colors?: string[] | null;
  price: number;
  id: number;
}
