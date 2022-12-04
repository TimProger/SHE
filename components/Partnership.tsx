import React, {ChangeEvent, MouseEvent, useEffect, useState} from 'react';
import AuthService from '../services/Auth'
import s from '../styles/components/partnership.module.scss'
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

interface IPartnershipProps {
  translates: any;
  show: boolean;
  setShow: (isShow: boolean) => void;
}

interface IPartnershipErrors {
  phone: string;
  code: string;
}

const Partnership: React.FC<IPartnershipProps> = ({translates, show, setShow}) => {
  const dispatch = useAppDispatch()

  const {locale} = useRouter()
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
  const [country, setCountry] = useState(countries[0])
  const [phone, setPhone] = useState<string>(`+${country.phone} `)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [code, setCode] = useState('')
  const [isError, setIsError] = useState<boolean>(false);
  const [errors, setErrors] = useState<IPartnershipErrors>({
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
        window.location.replace(`/${locale}/profile`)
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
          <h1>{translates.title}</h1>
          <p>{translates.paragraph_1}</p>
          <Dropdown type={'counties'} handler={(e: MouseEvent, value: any)=>setCountry(value)} value={country} options={countries || []} />
          <div className={s.auth__form__container__input}>
            <h2>{translates.phone}</h2>
            <input value={phone} onChange={onChangePhone} type="text"/>
            <h2>{translates.name}</h2>
            <input value={name} placeholder={translates.name_pl} onChange={(e)=>{setName(e.currentTarget.value)}} type="text"/>
            <h2>Email</h2>
            <input value={email} placeholder={'info@tmshe.ru'} onChange={(e)=>{setEmail(e.currentTarget.value)}} type="email"/>
            <h2>{translates.message}</h2>
            <input value={message} placeholder={translates.message_pl} onChange={(e)=>{setMessage(e.currentTarget.value)}} type="text"/>
          </div>
          <div className={s.auth__form__container__button}>
            <Button disabled={isDisabled} onClick={authHandler} text={translates.button} />
            <p>
              {errors.phone && <p>{errors.phone}</p>}
              {errors.code && <p>{errors.code}</p>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;