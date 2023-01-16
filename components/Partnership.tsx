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
import {useTranslation} from "next-i18next";
import {toggleShowAuth} from "../store/Slices/Profile.slice";
import {removeAllProductFromBasket} from "../store/Slices/Basket.slice";

interface IPartnershipProps {
  show: boolean;
  setShow: (isShow: boolean) => void;
}

interface IPartnershipErrors {
  phone: string;
  name: string;
  email: string,
  message: string,
}

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const Partnership: React.FC<IPartnershipProps> = ({show, setShow}) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('coop')

  const {locale} = useRouter()
  const [countries, setCountries] = useState([
    {
      title: t('countries.russia'),
      img: Countries.russia.src,
      phone: '7'
    },
    {
      title: t('countries.usa'),
      img: Countries.usa.src,
      phone: '1'
    },
    {
      title: t('countries.uar'),
      img: Countries.uar.src,
      phone: '27'
    },
    {
      title: t('countries.korea'),
      img: Countries.korea.src,
      phone: '82'
    },
    {
      title: t('countries.bel'),
      img: Countries.bel.src,
      phone: '375'
    },
    {
      title: t('countries.azerb'),
      img: Countries.azerb.src,
      phone: '994'
    },
    {
      title: t('countries.england'),
      img: Countries.england.src,
      phone: '44'
    },
    {
      title: t('countries.oae'),
      img: Countries.oae.src,
      phone: '971'
    },
    {
      title: t('countries.india'),
      img: Countries.india.src,
      phone: '91'
    },
    {
      title: t('countries.turkey'),
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
  const [errors, setErrors] = useState<IPartnershipErrors>({
    phone: '',
    name: '',
    email: '',
    message: ''
  })
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(()=>{
    setPhone(`+${country.phone} `)
  },[country])

  useEffect(()=>{
    setCountries([
      {
        title: locale === 'ru' ? 'Россия' : 'Russia',
        img: Countries.russia.src,
        phone: '7'
      },
      {
        title: locale === 'ru' ? 'США' : 'USA',
        img: Countries.usa.src,
        phone: '1'
      },
      {
        title: locale === 'ru' ? 'ЮАР' : 'UAR',
        img: Countries.uar.src,
        phone: '27'
      },
      {
        title: locale === 'ru' ? 'Южная Корея' : 'South Korea',
        img: Countries.korea.src,
        phone: '82'
      },
      {
        title: locale === 'ru' ? 'Беларусь' : 'Belarus',
        img: Countries.bel.src,
        phone: '375'
      },
      {
        title: locale === 'ru' ? 'Азербайджан' : 'Azerbaijan',
        img: Countries.azerb.src,
        phone: '994'
      },
      {
        title: locale === 'ru' ? 'Великобритания' : 'United Kingdom',
        img: Countries.england.src,
        phone: '44'
      },
      {
        title: locale === 'ru' ? 'ОАЭ' : 'UAE',
        img: Countries.oae.src,
        phone: '971'
      },
      {
        title: locale === 'ru' ? 'Индия' : 'India',
        img: Countries.india.src,
        phone: '91'
      },
      {
        title: locale === 'ru' ? 'Турция' : 'Turkey',
        img: Countries.turkey.src,
        phone: '90'
      },
    ])
    setCountry(locale === 'ru'
      ? {
        title: locale === 'ru' ? 'Россия' : 'Russia',
        img: Countries.russia.src,
        phone: '7'
      } :
      {
        title: locale === 'ru' ? 'США' : 'USA',
        img: Countries.usa.src,
        phone: '1'
      })
  },[locale])

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
      setErrors(prev => Object.assign(prev, {phone: null}))
    }else{
      setErrors(prev => Object.assign(prev, {phone: locale === 'ru' ? 'Введите номер телефона' : 'Enter valid phone number'}))
    }
  }

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if(e.target.value.length <= 0){
      setErrors(prev => Object.assign(prev, {name: locale === 'ru' ? 'Введите имя' : 'Enter name'}))
    }else{
      setErrors(prev => Object.assign(prev, {name: null}))
    }
  }

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if(!validEmailRegex.test(e.target.value)){
      setErrors(prev => Object.assign(prev, {email: locale === 'ru' ? 'Введите почту' : 'Enter email'}))
    }else{
      setErrors(prev => Object.assign(prev, {email: null}))
    }
  }

  const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
    if(e.target.value.length <= 0){
      setErrors(prev => Object.assign(prev, {message: locale === 'ru' ? 'Введите сообщение' : 'Enter message'}))
    }else{
      setErrors(prev => Object.assign(prev, {message: null}))
    }
  }

  const outsideClickHandler = () => {
    setShow(false)
  }

  const insideClickHandler = (e: MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(()=>{
    setIsDisabled(true)
    if (errors.phone || phone.length <= 14) return
    if (errors.email || email.length <= 0) return
    if (errors.name || name.length <= 0) return
    if (errors.message || message.length <= 0) return
    console.log(errors)
    setIsDisabled(false)

  },[phone, name, email, message])

  const authHandler = () => {
    console.log(name, phone, email, message)
    const data = new FormData()

    data.append('Email', email);
    data.append('Phone', phone.replace(/\s/g, '').replace(/\+/, ''));
    data.append('Name', name);
    data.append('message', message);

    $api.post(`/opt/`, data)
      .then((res) => {
        setShow(false)
        window.scrollTo({ top: 200, behavior: 'smooth' });
        setPhone('+7 ')
        setName('')
        setEmail('')
        setMessage('')
        alert(locale === 'ru' ? 'Вы успешно отправили заявку на партнёрство!' : 'You have successfully submitted your partnership application!')
      })
      .catch((res)=>{
      })
  }

  return (
    <div onClick={outsideClickHandler} className={s.partnership + ' ' + (show ? s.partnership__active : '')}>
      <div onClick={insideClickHandler} className={s.partnership__form}>
        <svg className={s.partnership__form__close + ' ' + (show ? s.partnership__form__close__active : '')} onClick={() => {
          setShow(false)
        }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.14648 20.2635L20.4099 4" stroke="black"/>
          <path d="M4 4.14648L20.2635 20.4099" stroke="black"/>
        </svg>
        <div className={s.partnership__form__container}>
          <h1>{t('partnership.title')}</h1>
          <p>{t('partnership.paragraph_1')}</p>
          <Dropdown type={'counties'} handler={(e: MouseEvent, value: any)=>setCountry(value)} value={country} options={countries || []} />
          <div className={s.partnership__form__container__input}>
            <h2>{t('partnership.inputs.phone')}</h2>
            <input value={phone} onChange={onChangePhone} type="text"/>
            <h2>{t('partnership.inputs.name')}</h2>
            <input value={name} placeholder={t('partnership.inputs.name_pl')} onChange={onChangeName} type="text"/>
            <h2>Email</h2>
            <input value={email} placeholder={'info@tmshe.ru'} onChange={onChangeEmail} type="email"/>
            <h2>{t('partnership.inputs.message')}</h2>
            <input value={message} placeholder={t('partnership.inputs.message_pl')} onChange={onChangeMessage} type="text"/>
          </div>
          <div className={s.partnership__form__container__button}>
            <Button disabled={isDisabled} onClick={authHandler} text={t('partnership.button')} />
            <p>
              {errors.phone && <p>{errors.phone}</p>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;