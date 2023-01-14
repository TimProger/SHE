import React, {useEffect, useState} from 'react';
import s from '../styles/components/card.module.scss'
import Link from "next/link";
import {IProduct, IProductImage, IProductMore} from "../types/Product.types";
import {API_BASE_URL} from "../http/api";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {toggleFav} from "../store/Slices/Fav.slice";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import Stock from "../public/images/stock.png";
import {useRouter} from "next/router";

interface ICardProps {
  product: IProduct;
  className?: string;
}

const Card: React.FC<ICardProps> = ({product, className}) => {
  const dispatch = useAppDispatch()
  const {locale} = useRouter()
  const [more, setMore] = useState<IProductMore>(product.product_more[0])
  const [mainImage, setMainImage] = useState<IProductImage | null>(null)

  const [isFav, setIsFav] = useState<boolean>(false)

  const {products} = useTypedSelector(state => state.fav)

  const favHandler = () => {
    const obj = {
      id: product.id,
      more: more.id,
      product_id: product.id
    }
    dispatch(toggleFav(obj))
  }

  useEffect(()=>{
    const includes = products.filter((el)=>el.product_id === product.id)
    if(products.includes(includes[0])){
      setIsFav(true)
    }else{
      setIsFav(false)
    }
  }, [products])

  const {
    is_new,
    is_hit,
    discount,
    images,
    name,
    price,
    color,
    id
  } = product

  useEffect(()=>{
    const showed = images.filter((el)=>el.show)
    if(showed[0]){
      setMainImage(showed[0])
    }else{
      setMainImage(images[0])
    }
  },[])

  return (
    <div className={s.card + ` ${is_new ? s.card__new : ''} ${is_hit && s.card__hit} ${className ? className : ''}`}>
      <div className={s.card__container}>
        <div className={s.card__top__container}>
          <div className={s.card__top}>
            <div className={s.card__header}>
              <div className={s.card__header__fav + ` ${isFav ? s.card__header__fav__active : ''}`}>
                <svg onClick={()=>favHandler()} width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.1721 11.1855L12.0102 20L2.84826 11.1855M2.84826 11.1855C2.24395 10.6143 1.76794 9.9277 1.45021 9.16898C1.13248 8.41026 0.979915 7.59585 1.00212 6.77704C1.02432 5.95822 1.22081 5.15275 1.57922 4.41133C1.93763 3.66991 2.45019 3.0086 3.08462 2.46906C3.71905 1.92952 4.46162 1.52343 5.26555 1.27636C6.06949 1.02929 6.91738 0.94659 7.75583 1.03347C8.59429 1.12036 9.40514 1.37494 10.1373 1.78119C10.8695 2.18744 11.5072 2.73656 12.0102 3.39396C12.5153 2.74133 13.1538 2.19701 13.8854 1.79507C14.6171 1.39313 15.4263 1.14223 16.2624 1.05806C17.0985 0.973891 17.9435 1.05827 18.7445 1.30592C19.5455 1.55357 20.2853 1.95915 20.9175 2.49729C21.5497 3.03542 22.0607 3.69453 22.4186 4.43335C22.7766 5.17217 22.9736 5.9748 22.9975 6.79101C23.0214 7.60722 22.8716 8.41944 22.5575 9.17683C22.2434 9.93422 21.7718 10.6205 21.1721 11.1927" stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={s.card__header__new}>
                {is_new && <div className={s.card__new__block}>New</div>}
                {is_hit && <div className={s.card__hit__block}>Hit</div>}
                {!!discount && <div className={s.card__header__new__discount}>-{discount}%</div>}
              </div>
            </div>
            <Link draggable={false} href={'/product/'+id} className={s.card__image}>
              <img draggable={false} src={
                images.filter((el)=>el.show)[0]
                  ? `${API_BASE_URL}/${images.filter((el)=>el.show)[0].image}`
                  : images[0]
                    ? `${API_BASE_URL}/${images[0].image}`
                    : `${Stock.src}`} alt={name}/>
            </Link>
          </div>
          <Link className={s.card__name} draggable={false} href={'/product/'+id}>
            <h2>{name}</h2>
          </Link>
        </div>
        <div className={s.card__content}>
          <div className={s.card__content__footer}>
            <div className={s.card__content__footer__info}>
              <p>{product.product_more.map(el=>el.ml).join('/')} {locale === 'ru' ? 'мл' : 'ml'}</p>
              <span style={{background: product.color}} className={s.card__content__footer__color} />
            </div>
            <div>{locale === 'ru' ? 'от' : 'from'} {product.product_more[0].price} {product.product_more[0].price_currency === 'RUB' ? '₽' : '$'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;