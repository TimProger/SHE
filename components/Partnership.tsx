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

interface IPartnershipProps {
  show: boolean;
  setShow: (isShow: boolean) => void;
}

interface IPartnershipErrors {
  phone: string;
  code: string;
}

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
      setCode('')
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }

    isError && setIsError(false);
  }

  const outsideClickHandler = () => {
    setShow(false)
  }

  const insideClickHandler = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const authHandler = () => {
    setIsDisabled(true)
  }

  return (
    <div onClick={outsideClickHandler} className={s.auth + ' ' + (show ? s.auth__active : '')}>
      <div onClick={insideClickHandler} className={s.auth__form}>
        <div className={s.auth__form__container}>
          <h1>{t('partnership.title')}</h1>
          <p>{t('partnership.paragraph_1')}</p>
          <Dropdown type={'counties'} handler={(e: MouseEvent, value: any)=>setCountry(value)} value={country} options={countries || []} />
          <div className={s.auth__form__container__input}>
            <h2>{t('partnership.inputs.phone')}</h2>
            <input value={phone} onChange={onChangePhone} type="text"/>
            <h2>{t('partnership.inputs.name')}</h2>
            <input value={name} placeholder={t('partnership.inputs.name_pl')} onChange={(e)=>{setName(e.currentTarget.value)}} type="text"/>
            <h2>Email</h2>
            <input value={email} placeholder={'info@tmshe.ru'} onChange={(e)=>{setEmail(e.currentTarget.value)}} type="email"/>
            <h2>{t('partnership.inputs.message')}</h2>
            <input value={message} placeholder={t('partnership.inputs.message_pl')} onChange={(e)=>{setMessage(e.currentTarget.value)}} type="text"/>
          </div>
          <div className={s.auth__form__container__button}>
            <Button disabled={isDisabled} onClick={authHandler} text={t('partnership.button')} />
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