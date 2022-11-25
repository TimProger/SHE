import React, {useState} from 'react';
import AuthService from '../services/Auth'
import s from '../styles/components/auth.module.scss'

interface IAuthProps {

}

const Auth: React.FC<IAuthProps> = () => {

  const [country, setCountry] = useState(null)

  return (
    <div className={s.auth}>
      <div className={s.auth__container}>
        <h1>Авторизация</h1>
        <p>Введите ваш номер телефона, чтобы войти или зарегестрироваться</p>
      </div>
    </div>
  );
};

export default Auth;