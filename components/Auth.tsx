import React, {ChangeEvent, MouseEvent, useState} from 'react';
import AuthService from '../services/Auth'
import s from '../styles/components/auth.module.scss'
import Dropdown from "./Dropdown";
import Button from "./Button";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Storage} from "../utils/storage";
import {$api} from "../http/api";
import {getUser} from "../store/ActionCreators/Profile.ac";
import {useAppDispatch} from "../hooks/useTypedDispatch";

interface IAuthProps {
  show: boolean;
  setShow: (isShow: boolean) => void;
}

interface IAuthErrors {
  phone: string;
  code: string;
}

const Auth: React.FC<IAuthProps> = ({show, setShow}) => {
  const dispatch = useAppDispatch()

  const {isAuth, error, isLoading} = useTypedSelector(state => state.auth)

  const [country, setCountry] = useState<string>('Россия')
  const [phone, setPhone] = useState<string>('+7 ')
  const [code, setCode] = useState('')
  const [isError, setIsError] = useState<boolean>(false);
  const [errors, setErrors] = useState<IAuthErrors>({
    phone: '',
    code: '',
  })
  const [page, setPage] = useState<number>(0)
  const [isDisabled, setIsDisabled] = useState(true);

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    let phoneVal = e.target.value.replace(/\D/g, ""),
      formattedPhone = '+7 '

    if(!phoneVal){
      setPhone('');
    }

    if (phoneVal.length > 1) {
      formattedPhone += '' + phoneVal.substring(1, 4);
    }

    if (phoneVal.length >= 5) {
      formattedPhone += ' ' + phoneVal.substring(4, 7);
    }

    if (phoneVal.length >= 8) {
      formattedPhone += ' ' + phoneVal.substring(7, 9);
    }

    if (phoneVal.length >= 10) {
      formattedPhone += ' ' + phoneVal.substring(9, 11);
    }

    setPhone(prev => prev = formattedPhone);
    if(formattedPhone.length === 16){
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
          setErrors(prev => Object.assign(prev, {code: err.response.detail}))
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
        console.log('res1', res)
        Storage.set('accessToken', `Bearer ${res.data.access_token}`);
        Storage.set('refreshToken', `Bearer ${res.data.refresh_token}`)
        setErrors({phone: '', code: ''});
        setPhone('');
        setCode('');
        setPage(0);
        dispatch(getUser())
        setShow(false)
        window.location.replace('/profile')
      })
      .catch((err) => {
        if(err.response.data.detail == "Код не верный"){
          setErrors(prev => Object.assign(prev, {code: "Код не верный"}))
        }else{
          setErrors(prev => Object.assign(prev, {code: 'Произошла ошибка при проверке кода'}))
        }
        setIsError(true);
        setIsDisabled(false);
      })
  }

  const returnPage = () => {
    switch (page){
      case 0:
        return <>
          <p>Введите ваш номер телефона, чтобы войти или зарегестрироваться</p>
          <select defaultValue={'Россия'} name="" id="">
            <option value="Россия">Россия</option>
            <option value="Азия">Азия</option>
            <option value="Америка">Америка</option>
          </select>
          <div className={s.auth__form__container__input}>
            <h2>Телефон</h2>
            <input value={phone} onChange={onChangePhone} type="text"/>
          </div>
        </>
      case 1:
        return <>
          <p>На ваш телефон поступит звонок-сброс. Введите последние 4 цифры номера.</p>
          <div className={s.auth__form__container__input}>
            <h2>Последние 4 цифры номера</h2>
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
          <h1>Авторизация</h1>
          {returnPage()}
          <div className={s.auth__form__container__button}>
            <Button disabled={isDisabled} onClick={authHandler} text={'Авторизоваться'} />
            <p>
              {errors.phone && <p>{errors.phone}</p>}
              {errors.code && <p>{errors.code}</p>}
            </p>
          </div>
          <p>При регистрации вы соглашаетесь
            с политикой конфиденциальности</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;