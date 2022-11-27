import s from '../styles/components/header.module.scss'
import Link from "next/link";
import React, {useState, MouseEvent, useEffect, ChangeEvent} from "react";
import {useRouter} from "next/router";
import {onToggleLanguageClick} from "../utils/changeCurrentLanguage";
import {getSearch} from "../store/ActionCreators/Product.ac";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import Dropdown from "./Dropdown";
import Auth from "./Auth";
import {API_BASE_URL} from "../http/api";
import ProfileImg from '../public/images/profile_mock.png'

interface IHeaderProps {
  btns: any;
  auth: any;
}

const Header: React.FC<IHeaderProps> = ({btns, auth}) => {
  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const router = useRouter()

  const {isLoading, error, products} = useTypedSelector(state => state.product)
  const {isAuth, user} = useTypedSelector(state => state.profile)
  const fav = useTypedSelector(state => state.fav)
  const basket = useTypedSelector(state => state.basket)

  const handleSearchClick = (e: MouseEvent) => {
    setShowSearch(prev => !prev)
  }

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement> ) => {
    setSearchValue(e.target.value)
  }

  let typingTimer: string | number | NodeJS.Timeout | undefined
  let doneTypingInterval = 1000;

  function doneTyping(){
    const obj = {
      name: searchValue,
      locale: router.locale
    }
    dispatch(getSearch(obj))
  }

  const [popupState, setPopupState] = useState(false);
  const [popupPage, setPopupPage] = useState(0)

  return (
    <>
      {/* @ts-ignore */}
      <Auth translates={auth} show={showAuth} setShow={setShowAuth}/>
      <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.top}>
            <Link href={'/'}>
              <div className={s.top__logo} />
            </Link>
            <div className={s.top__nav}>
              <Dropdown handler={(e: MouseEvent, value: string)=>onToggleLanguageClick(e, router, value)} value={router.locale || 'ru'} options={router.locales || []} />
              <div className={s.top__btns}>
                <div className={`${s.top__btns__btn} ${s.top__btns__btn__search}`}>
                  <div className={s.top__btns__btn__container}>
                    <input
                      onChange={(e)=>handleSearchInput(e)}
                      onKeyUp={(e)=>{
                        clearTimeout(typingTimer);
                        typingTimer = setTimeout(doneTyping, doneTypingInterval);
                      }}
                      onKeyDown={(e)=>{
                        clearTimeout(typingTimer);
                      }}
                      className={!showSearch ? s.top__btns__btn__search__unactive : s.top__btns__btn__search__active}
                      placeholder={btns.search} type="text" value={searchValue}
                    />
                    {
                      showSearch && isLoading
                        ? <div className={s.top__btns__btn__results}>
                            <div className={s.top__btns__btn__results__notfound}>
                              Loading
                            </div>
                          </div>
                        : products && (products.length > 0 ? <div className={s.top__btns__btn__results}>
                            {products.map((el, index)=>{
                              if(index === products.length-1){
                                return (
                                  <div className={s.top__btns__btn__results__result}>
                                    {el.name}
                                  </div>
                                )
                              }
                            return (
                                <>
                                  <div className={s.top__btns__btn__results__result}>
                                    {el.name}
                                  </div>
                                  <p className={'line'} />
                                </>
                              )
                            })}
                        </div> : <div className={s.top__btns__btn__results}>
                          <div className={s.top__btns__btn__results__notfound}>
                            Ничего не найдено
                          </div>
                        </div>)}
                  </div>
                  <svg onClick={(e: MouseEvent)=>handleSearchClick(e)} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 20L15.514 15.506M18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" stroke="#A0A0A0" strokeLinecap="round"/>
                  </svg>
                </div>
                <Link href="/favorites" className={s.top__btns__btn}>
                  <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1721 11.1855L12.0102 20L2.84826 11.1855M2.84826 11.1855C2.24395 10.6143 1.76794 9.9277 1.45021 9.16898C1.13248 8.41026 0.979915 7.59585 1.00212 6.77704C1.02432 5.95822 1.22081 5.15275 1.57922 4.41133C1.93763 3.66991 2.45019 3.0086 3.08462 2.46906C3.71905 1.92952 4.46162 1.52343 5.26555 1.27636C6.06949 1.02929 6.91738 0.94659 7.75583 1.03347C8.59429 1.12036 9.40514 1.37494 10.1373 1.78119C10.8695 2.18744 11.5072 2.73656 12.0102 3.39396C12.5153 2.74133 13.1538 2.19701 13.8854 1.79507C14.6171 1.39313 15.4263 1.14223 16.2624 1.05806C17.0985 0.973891 17.9435 1.05827 18.7445 1.30592C19.5455 1.55357 20.2853 1.95915 20.9175 2.49729C21.5497 3.03542 22.0607 3.69453 22.4186 4.43335C22.7766 5.17217 22.9736 5.9748 22.9975 6.79101C23.0214 7.60722 22.8716 8.41944 22.5575 9.17683C22.2434 9.93422 21.7718 10.6205 21.1721 11.1927" stroke="#A0A0A0" strokeLinecap='round' strokeLinejoin="round"/>
                  </svg>
                  {fav.products.length > 0 && <div className={s.top__btns__btn__count}>{fav.products.length}</div>}
                </Link>
                <Link href="/basket" className={s.top__btns__btn}>
                  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9V5C5 2.79 6.795 1 9 1C11.21 1 13 2.795 13 5V9M1 7H17V23H1V7Z" stroke="#A0A0A0" strokeLinecap="round"/>
                  </svg>
                  {basket.products.length > 0 && <div className={s.top__btns__btn__count}>{basket.products.length}</div>}
                </Link>
                {isAuth
                  ? <Link href="/profile" className={s.top__btns__btn + ' ' + s.top__btns__image}>
                      <img src={user?.user_image ? `${API_BASE_URL}${user?.user_image}` : ProfileImg.src} alt='user'/>
                    </Link>
                  : <div onClick={()=>setShowAuth(true)} className={s.top__btns__test}>
                    <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_413_3)">
                        <circle cx="250.5" cy="182.5" r="88.5" stroke="black" strokeWidth="16"/>
                        <path d="M465 442C465 468.607 443.577 494.776 404.209 514.77C365.284 534.539 310.952 547 250.5 547C190.048 547 135.716 534.539 96.7913 514.77C57.4228 494.776 36 468.607 36 442C36 415.393 57.4228 389.224 96.7913 369.23C135.716 349.461 190.048 337 250.5 337C310.952 337 365.284 349.461 404.209 369.23C443.577 389.224 465 415.393 465 442Z" stroke="black" strokeWidth="16"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_413_3">
                          <rect width="500" height="500" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className={s.bottom}>
            <div className={s.bottom__btns}>
              <div className={s.bottom__btns__btn}>
                <Link href="/" locale={router.locale}>{btns.home}</Link>
              </div>
              <div className={s.bottom__btns__btn}>
                <Link onMouseOver={()=>setPopupState(true)} onMouseLeave={()=>setPopupState(false)} href="/profile" locale={router.locale}>{btns.catalogue}</Link>
              </div>
              <div className={s.bottom__btns__btn}>
                <Link href="/coop" locale={router.locale}>{btns.coop}</Link>
              </div>
              <div className={s.bottom__btns__btn}>
                <Link href="/profile" locale={router.locale}>{btns.about}</Link>
              </div>
              <div className={s.bottom__btns__btn}>
                <Link href="/profile" locale={router.locale}>{btns.contacts}</Link>
              </div>
            </div>
          </div>
          <div className={popupState ? s.popup_active : s.popup} onMouseOver={()=>setPopupState(true)} onMouseLeave={()=>setPopupState(false)}>
            <ul className={s.popup_active__list}>
              <li className={popupPage == 0 ? s.popup_active__list__link : s.popup_active__list__linkDisabel} onMouseOver={()=>setPopupPage(1)}><Link href="/profile">Гель-лаки</Link>
                <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.39001 0.877758L5.53133 5.60599C5.58048 5.66228 5.61522 5.72326 5.63554 5.78893C5.65618 5.8546 5.6665 5.92496 5.6665 6.00001C5.6665 6.07506 5.65618 6.14542 5.63554 6.21109C5.61522 6.27676 5.58048 6.33774 5.53133 6.39403L1.39001 11.1363C1.27531 11.2677 1.13194 11.3333 0.959899 11.3333C0.787856 11.3333 0.64039 11.263 0.517503 11.1223C0.394615 10.9815 0.333171 10.8174 0.333171 10.6297C0.333171 10.4421 0.394615 10.2779 0.517503 10.1372L4.13041 6.00001L0.517502 1.86281C0.402806 1.73147 0.345459 1.56973 0.345459 1.3776C0.345459 1.18509 0.406902 1.01848 0.52979 0.877758C0.652678 0.737037 0.796047 0.666676 0.959898 0.666676C1.12375 0.666676 1.26712 0.737037 1.39001 0.877758Z" fill="black"/>
                </svg>
              </li>
              <li className={popupPage == 0 ? s.popup_active__list__link : s.popup_active__list__linkDisabel} onMouseOver={()=>setPopupPage(2)}><Link href="/profile">Базовые покрытия</Link>
              <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.39001 0.877758L5.53133 5.60599C5.58048 5.66228 5.61522 5.72326 5.63554 5.78893C5.65618 5.8546 5.6665 5.92496 5.6665 6.00001C5.6665 6.07506 5.65618 6.14542 5.63554 6.21109C5.61522 6.27676 5.58048 6.33774 5.53133 6.39403L1.39001 11.1363C1.27531 11.2677 1.13194 11.3333 0.959899 11.3333C0.787856 11.3333 0.64039 11.263 0.517503 11.1223C0.394615 10.9815 0.333171 10.8174 0.333171 10.6297C0.333171 10.4421 0.394615 10.2779 0.517503 10.1372L4.13041 6.00001L0.517502 1.86281C0.402806 1.73147 0.345459 1.56973 0.345459 1.3776C0.345459 1.18509 0.406902 1.01848 0.52979 0.877758C0.652678 0.737037 0.796047 0.666676 0.959898 0.666676C1.12375 0.666676 1.26712 0.737037 1.39001 0.877758Z" fill="black"/>
                </svg>
              </li>
              <li className={popupPage == 0 ? s.popup_active__list__link : s.popup_active__list__linkDisabel} onMouseOver={()=>setPopupPage(3)}><Link href="/profile">Финишные покрытия</Link>
              <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.39001 0.877758L5.53133 5.60599C5.58048 5.66228 5.61522 5.72326 5.63554 5.78893C5.65618 5.8546 5.6665 5.92496 5.6665 6.00001C5.6665 6.07506 5.65618 6.14542 5.63554 6.21109C5.61522 6.27676 5.58048 6.33774 5.53133 6.39403L1.39001 11.1363C1.27531 11.2677 1.13194 11.3333 0.959899 11.3333C0.787856 11.3333 0.64039 11.263 0.517503 11.1223C0.394615 10.9815 0.333171 10.8174 0.333171 10.6297C0.333171 10.4421 0.394615 10.2779 0.517503 10.1372L4.13041 6.00001L0.517502 1.86281C0.402806 1.73147 0.345459 1.56973 0.345459 1.3776C0.345459 1.18509 0.406902 1.01848 0.52979 0.877758C0.652678 0.737037 0.796047 0.666676 0.959898 0.666676C1.12375 0.666676 1.26712 0.737037 1.39001 0.877758Z" fill="black"/>
                </svg>
              </li>
              <li className={popupPage == 0 ? s.popup_active__list__link : s.popup_active__list__linkDisabel} onMouseOver={()=>setPopupPage(0)}><Link href="/profile">Конструирующие гели</Link></li>
              <li className={popupPage == 0 ? s.popup_active__list__link : s.popup_active__list__linkDisabel} onMouseOver={()=>setPopupPage(0)}><Link href="/profile">Жидкие полигели</Link></li>
              <li className={popupPage == 0 ? s.popup_active__list__link : s.popup_active__list__linkDisabel} onMouseOver={()=>setPopupPage(0)}><Link href="/profile">Праймеры дегидраторы</Link></li>
              <li className={popupPage == 0 ? s.popup_active__list__link : s.popup_active__list__linkDisabel} onMouseOver={()=>setPopupPage(0)}><Link href="/profile">Сопутств. жидк.</Link></li>
              <li className={popupPage == 0 ? s.popup_active__list__link : s.popup_active__list__linkDisabel} onMouseOver={()=>setPopupPage(0)}><Link href="/profile">Уход</Link></li>
              <li className={popupPage == 0 ? s.popup_active__list__link : s.popup_active__list__linkDisabel} onMouseOver={()=>setPopupPage(0)}><Link href="/profile">Пилочный маникюр</Link></li>
              <li className={popupPage == 0 ? s.popup_active__list__link : s.popup_active__list__linkDisabel} onMouseOver={()=>setPopupPage(0)}><Link href="/profile">Расходные материалы</Link></li>
              <li className={popupPage == 0 ? s.popup_active__list__link : s.popup_active__list__linkDisabel} onMouseOver={()=>setPopupPage(0)}><Link href="/profile">Слайдеры</Link></li>
            </ul>
            {popupPage == 1 ? 
              <ul onMouseLeave={()=>setPopupPage(0)} className={popupPage == 1 ? s.popup_semilist_active :  s.popup_semilist}>
                <li><Link href='/profile'>Основная коллекция</Link></li>
                <li><Link href='/profile'>«ELIZABETH»</Link></li>
                <li><Link href='/profile'>«NEON»</Link></li>
                <li><Link href='/profile'>«SKY»</Link></li>
                <li><Link href='/profile'>«NUNA»</Link></li>
                <li><Link href='/profile'>«TATI»</Link></li>
              </ul> : <></>}
            {popupPage == 2 ? 
              <ul style={{paddingTop : '51px'}} onMouseLeave={()=>setPopupPage(0)} className={popupPage == 2 ? s.popup_semilist_active : s.popup_semilist }>
              <li><Link href='/profile'>Прозрачные</Link></li>
              <li><Link href='/profile'>Камуфлирующие</Link></li>
              </ul> : <></>}
            {popupPage == 3 ? 
              <ul style={{paddingTop : '102px'}} onMouseLeave={()=>setPopupPage(0)} className={popupPage == 3 ? s.popup_semilist_active : s.popup_semilist}>
                <li><Link href='/profile'>С эффектом</Link></li>
                <li><Link href='/profile'>Без эффекта</Link></li>
                <li><Link href='/profile'>Матовый</Link></li>
            </ul> : <></>}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header