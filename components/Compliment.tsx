import s from '../styles/components/compliment.module.scss'
import React, {useState} from "react";
import {useRouter} from "next/router";
import {Storage} from "../utils/storage";
import {useTranslation} from "next-i18next";

interface ComplimentProps {
  type: string;
}

const Compliment: React.FC<ComplimentProps> = ({
                                             type
                                          }) => {
  const [open, setOpen] = useState(true)
  const { locale } = useRouter()
  const {t} = useTranslation('common')

  const showOptions = () => {
    setOpen(prev => !prev)
    switch (type){
      case 'profile':
        Storage.set('profile_compliment', true)
        break
      case 'contacts':
        Storage.set('contacts_compliment', true)
        break
      case 'favs':
        Storage.set('favs_compliment', true)
        break
      case 'about':
        Storage.set('about_compliment', true)
        break
    }
  }

  switch (type){
    case 'profile':
      return (
        open ? <div onClick={showOptions} className={s.compliment}>
          <div className={s.compliment__container}>
            <svg width="92" height="80" viewBox="0 0 92 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M84.2174 42.9397L46.0427 79.6667L7.86807 42.9397M7.86807 42.9397C5.3501 40.5596 3.36674 37.6987 2.04287 34.5374C0.718996 31.3761 0.0833033 27.9827 0.175818 24.571C0.268332 21.1593 1.08705 17.8031 2.58041 14.7139C4.07378 11.6246 6.20944 8.86918 8.85291 6.62109C11.4964 4.373 14.5904 2.68095 17.9401 1.65149C21.2899 0.622028 24.8227 0.277459 28.3163 0.639475C31.8099 1.00149 35.1884 2.06225 38.2392 3.75496C41.29 5.44767 43.9469 7.73566 46.0427 10.4749C48.1476 7.75555 50.8076 5.48755 53.8563 3.8128C56.905 2.13806 60.2768 1.09262 63.7605 0.741916C67.2443 0.391213 70.7651 0.742796 74.1025 1.77466C77.4399 2.80652 80.5222 4.49646 83.1564 6.73869C85.7906 8.98092 87.92 11.7272 89.4113 14.8056C90.9026 17.884 91.7238 21.2283 91.8234 24.6292C91.923 28.0301 91.2989 31.4143 89.9901 34.5701C88.6813 37.7259 86.7161 40.5853 84.2174 42.9694" fill="#FFCBCC"/>
            </svg>
            <div>
              <h1 className={s.compliment__title}>{t('compliments.profile.title')}</h1>
              <p className={s.compliment__desc}>{t('compliments.profile.description')}</p>
            </div>
          </div>
        </div> : <></>
      )
    case 'contacts':
      return (
        open ? <div onClick={showOptions} className={s.compliment}>
          <div className={s.compliment__container}>
            <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5833 32.9583C21.5833 44.75 31.25 54.4167 43.0417 60.4167L52.2083 51.25C53.375 50.0833 55 49.75 56.4583 50.2083C61.125 51.75 66.125 52.5833 71.3333 52.5833C72.4384 52.5833 73.4982 53.0223 74.2796 53.8037C75.061 54.5851 75.5 55.6449 75.5 56.75V71.3333C75.5 72.4384 75.061 73.4982 74.2796 74.2796C73.4982 75.061 72.4384 75.5 71.3333 75.5C52.5472 75.5 34.5304 68.0372 21.2466 54.7534C7.96278 41.4696 0.5 23.4528 0.5 4.66667C0.5 3.5616 0.938987 2.50179 1.72039 1.72039C2.50179 0.938987 3.5616 0.5 4.66667 0.5H19.25C20.3551 0.5 21.4149 0.938987 22.1963 1.72039C22.9777 2.50179 23.4167 3.5616 23.4167 4.66667C23.4167 9.875 24.25 14.875 25.7917 19.5417C26.25 21 25.9167 22.625 24.75 23.7917L15.5833 32.9583Z" fill="#FFCBCC"/>
            </svg>
            <div>
              <h1 className={s.compliment__title}>{t('compliments.contacts.title')}</h1>
              <p className={s.compliment__desc}>{t('compliments.contacts.description')}</p>
            </div>
          </div>
        </div> : <></>
      )
    case 'favs':
      return (
        open ? <div onClick={showOptions} className={s.compliment}>
          <div className={s.compliment__container}>
            <svg width="92" height="80" viewBox="0 0 92 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M84.2174 42.9397L46.0427 79.6667L7.86807 42.9397M7.86807 42.9397C5.3501 40.5596 3.36674 37.6987 2.04287 34.5374C0.718996 31.3761 0.0833033 27.9827 0.175818 24.571C0.268332 21.1593 1.08705 17.8031 2.58041 14.7139C4.07378 11.6246 6.20944 8.86918 8.85291 6.62109C11.4964 4.373 14.5904 2.68095 17.9401 1.65149C21.2899 0.622028 24.8227 0.277459 28.3163 0.639475C31.8099 1.00149 35.1884 2.06225 38.2392 3.75496C41.29 5.44767 43.9469 7.73566 46.0427 10.4749C48.1476 7.75555 50.8076 5.48755 53.8563 3.8128C56.905 2.13806 60.2768 1.09262 63.7605 0.741916C67.2443 0.391213 70.7651 0.742796 74.1025 1.77466C77.4399 2.80652 80.5222 4.49646 83.1564 6.73869C85.7906 8.98092 87.92 11.7272 89.4113 14.8056C90.9026 17.884 91.7238 21.2283 91.8234 24.6292C91.923 28.0301 91.2989 31.4143 89.9901 34.5701C88.6813 37.7259 86.7161 40.5853 84.2174 42.9694" fill="#FFCBCC"/>
            </svg>
            <div>
              <h1 className={s.compliment__title}>{t('compliments.favs.title')}</h1>
              <p className={s.compliment__desc}>{t('compliments.favs.description')}</p>
            </div>
          </div>
        </div> : <></>
      )
    case 'about':
      return (
        open ? <div onClick={showOptions} className={s.compliment}>
          <div className={s.compliment__container}>
            <svg width="92" height="80" viewBox="0 0 92 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M84.2174 42.9397L46.0427 79.6667L7.86807 42.9397M7.86807 42.9397C5.3501 40.5596 3.36674 37.6987 2.04287 34.5374C0.718996 31.3761 0.0833033 27.9827 0.175818 24.571C0.268332 21.1593 1.08705 17.8031 2.58041 14.7139C4.07378 11.6246 6.20944 8.86918 8.85291 6.62109C11.4964 4.373 14.5904 2.68095 17.9401 1.65149C21.2899 0.622028 24.8227 0.277459 28.3163 0.639475C31.8099 1.00149 35.1884 2.06225 38.2392 3.75496C41.29 5.44767 43.9469 7.73566 46.0427 10.4749C48.1476 7.75555 50.8076 5.48755 53.8563 3.8128C56.905 2.13806 60.2768 1.09262 63.7605 0.741916C67.2443 0.391213 70.7651 0.742796 74.1025 1.77466C77.4399 2.80652 80.5222 4.49646 83.1564 6.73869C85.7906 8.98092 87.92 11.7272 89.4113 14.8056C90.9026 17.884 91.7238 21.2283 91.8234 24.6292C91.923 28.0301 91.2989 31.4143 89.9901 34.5701C88.6813 37.7259 86.7161 40.5853 84.2174 42.9694" fill="#FFCBCC"/>
            </svg>
            <div>
              <h1 className={s.compliment__title}>{t('compliments.about.title')}</h1>
              <p className={s.compliment__desc}>{t('compliments.about.description')}</p>
            </div>
          </div>
        </div> : <></>
      )
    default:
      return (
        <div></div>
      )
  }
}

export default Compliment