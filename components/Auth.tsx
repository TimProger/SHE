import React, {ChangeEvent, MouseEvent, useEffect, useState} from 'react';
import AuthService from '../services/Auth'
import s from '../styles/components/auth.module.scss'
import Dropdown from "./Dropdown";
import Button from "./Button";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Storage} from "../utils/storage";
import {$api} from "../http/api";
import {getUser} from "../store/ActionCreators/Profile.ac";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import Countries from '../public/images/countries/countries'
import {onToggleLanguageClick} from "../utils/changeCurrentLanguage";
import Link from "next/link";
import {useRouter} from "next/router";

interface IAuthProps {
  translates: any;
  show: boolean;
  setShow: (isShow: boolean) => void;
}

interface IAuthErrors {
  phone: string;
  code: string;
}

const Auth: React.FC<IAuthProps> = ({translates, show, setShow}) => {
  const dispatch = useAppDispatch()

  const {isAuth, error, isLoading} = useTypedSelector(state => state.auth)
  const [countries, setCountries] = useState([
    {
      title: translates.countries.russia,
      img: Countries.russia.src,
      phone: '7'
    },
    {
      title: translates.countries.usa,
      img: Countries.usa.src,
      phone: '1'
    },
    {
      title: translates.countries.uar,
      img: Countries.uar.src,
      phone: '27'
    },
    {
      title: translates.countries.korea,
      img: Countries.korea.src,
      phone: '82'
    },
    {
      title: translates.countries.bel,
      img: Countries.bel.src,
      phone: '375'
    },
    {
      title: translates.countries.azerb,
      img: Countries.azerb.src,
      phone: '994'
    },
    {
      title: translates.countries.england,
      img: Countries.england.src,
      phone: '44'
    },
    {
      title: translates.countries.oae,
      img: Countries.oae.src,
      phone: '971'
    },
    {
      title: translates.countries.india,
      img: Countries.india.src,
      phone: '91'
    },
    {
      title: translates.countries.turkey,
      img: Countries.turkey.src,
      phone: '90'
    },
  ])
  const {locale} = useRouter()
  const [country, setCountry] = useState(countries[0])
  const [phone, setPhone] = useState<string>(`+${country.phone} `)
  const [code, setCode] = useState('')
  const [isError, setIsError] = useState<boolean>(false);
  const [errors, setErrors] = useState<IAuthErrors>({
    phone: '',
    code: '',
  })
  const [page, setPage] = useState<number>(0)
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(()=>{
    setPhone(`+${country.phone} `)
  },[country])

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    let phoneVal = e.target.value.replace(/\D/g, ""),
      formattedPhone = `+${country.phone} `

    if(!phoneVal){
      setPhone('');
    }

    const phoneLen = country.phone.length

    if (phoneVal.length > phoneLen) {
      formattedPhone += '' + phoneVal.substring(phoneLen, phoneLen+3);
    }

    if (phoneVal.length >= phoneLen+4) {
      formattedPhone += ' ' + phoneVal.substring(phoneLen+3, phoneLen+6);
    }

    if (phoneVal.length >= phoneLen+7) {
      formattedPhone += ' ' + phoneVal.substring(phoneLen+6, phoneLen+8);
    }

    if (phoneVal.length >= phoneLen+9) {
      formattedPhone += ' ' + phoneVal.substring(phoneLen+8, phoneLen+10);
    }

    setPhone(prev => prev = formattedPhone);
    if(formattedPhone.length === phoneLen+15){
      setCode('')
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }

    isError && setIsError(false);
  }

  const onChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
    let codeVal = e.target.value.replace(/\D/g, "")
    setCode(prev => codeVal.length > 4 ? prev : codeVal.split('').join(' '))

    if(codeVal.length === 4){
      setIsDisabled(false)
    }else if(codeVal.length <= 3){
      setIsDisabled(true)
    }
  }

  const outsideClickHandler = () => {
    setShow(false)
  }

  const insideClickHandler = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const sendCode = () => {
    let phoneUpd = phone.replace(/\s/g, '').replace(/\+/, '')

    AuthService.confirm_phone(+phoneUpd)
      .then((res) => {
        setPage(1)
      })
      .catch((err) => {
        if(err.response.detail === "Код не верный"){
          setErrors(prev => Object.assign(prev, {code: translates.error_code_1}))
        }
        setIsError(true);
        setIsDisabled(false);
      })
  }

  const confirmCode = () => {
    let codeUpd = code.replace(/\s/g, '')
    let phoneUpd = phone.replace(/\s/g, '').replace(/\+/, '')

    AuthService.confirm_code(+phoneUpd, +codeUpd)
      .then((res) => {
        Storage.set('accessToken', `Bearer ${res.data.access_token}`);
        Storage.set('refreshToken', `Bearer ${res.data.refresh_token}`)
        setErrors({phone: '', code: ''});
        setPhone('');
        setCode('');
        setPage(0);
        dispatch(getUser())
        setShow(false)
        window.location.replace(`/${locale === 'ru' ? '' : 'en'}/profile`)
      })
      .catch((err) => {
        if(err.response.data.detail == "Код не верный"){
          setErrors(prev => Object.assign(prev, {code: translates.error_code_1}))
        }else{
          setErrors(prev => Object.assign(prev, {code: 'Произошла ошибка при проверке кода'}))
        }
        setIsError(true);
        setIsDisabled(false);
      })
  }

  const handleClick = () => {
    setIsDisabled(false)
    setPage(0)
  }

  const returnPage = () => {
    switch (page){
      case 0:
        return <>
          <p>{translates.paragraph_1}</p>
          <Dropdown type={'counties'} handler={(e: MouseEvent, value: any)=>setCountry(value)} value={country} options={countries || []} />
          <div className={s.auth__form__container__input}>
            <h2>{translates.input_1}</h2>
            <input value={phone} onChange={onChangePhone} type="text"/>
          </div>
        </>
      case 1:
        return <>
          <p>{translates.paragraph_2}</p>
          <div className={s.auth__form__container__input}>
            <h2>{translates.input_2}</h2>
            <input value={code} onChange={onChangeCode} type="text" placeholder={'* * * *'}/>
          </div>
        </>
    }
  }

  const authHandler = () => {
    setIsDisabled(true)

    switch (page){
      case 0:
        sendCode()
        break;
      case 1:
        confirmCode()
        break;
    }
  }

  return (
    <div onClick={outsideClickHandler} className={s.auth + ' ' + (show ? s.auth__active : '')}>
      <div onClick={insideClickHandler} className={s.auth__form}>
        <div className={s.auth__form__container}>
          {page === 1 && <p className={s.auth__form__container__back} onClick={() => handleClick()}>
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.41475 0.316623L0.202765 7.40897C0.129032 7.4934 0.0769276 7.58487 0.0464514 7.68338C0.0154837 7.78188 0 7.88742 0 8C0 8.11258 0.0154837 8.21812 0.0464514 8.31662C0.0769276 8.41513 0.129032 8.5066 0.202765 8.59103L6.41475 15.7045C6.58679 15.9015 6.80184 16 7.05991 16C7.31797 16 7.53917 15.8945 7.7235 15.6834C7.90783 15.4723 8 15.226 8 14.9446C8 14.6631 7.90783 14.4169 7.7235 14.2058L2.30415 8L7.7235 1.7942C7.89554 1.59719 7.98157 1.35458 7.98157 1.06639C7.98157 0.777625 7.8894 0.527704 7.70507 0.316623C7.52074 0.10554 7.30568 0 7.05991 0C6.81413 0 6.59908 0.10554 6.41475 0.316623Z"
                fill="#A0A0A0"/>
            </svg>
            {translates.back}
          </p>}
          <h1>{translates.title}</h1>
          {returnPage()}
          <div className={s.auth__form__container__button}>
            <Button disabled={isDisabled} onClick={authHandler} text={translates.button} />
            <p>
              {errors.phone && <p>{errors.phone}</p>}
              {errors.code && <p>{errors.code}</p>}
            </p>
          </div>
          <p>{translates.text} <Link href="/policy" passHref>
              {translates.link}
            </Link></p>
        </div>
      </div>
    </div>
  );
};

export default Auth;