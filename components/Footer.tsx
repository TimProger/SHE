import s from '../styles/components/footer.module.scss'
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface IFooterProps {
}

const Footer: React.FC<IFooterProps> = ({}) => {

  const { t } = useTranslation('common')
  const {isAuth} = useTypedSelector(state => state.profile)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const resize = (e: any) => {
    if(window){
      let currentHideNav = (window.innerWidth <= 700);
      currentHideNav ? setIsMobile(true) : setIsMobile(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', resize)
    resize(null)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.wrapper__imgs}>
          <div className={s.footer__img1}></div>
          <Link href={'https://export31.ru'}>
            <div className={s.footer__img2}></div>
          </Link>
        </div>
        {!isMobile ? <table className={s.footer__table}>
          <thead>
          <tr>
            <th>{t('footer.titles.profile')}</th>
            <th>{t('footer.titles.info')}</th>
            <th>{t('footer.titles.contacts')}</th>
            <th>{t('footer.titles.video')}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <Link href={'/profile'}>{t('footer.links.profile_link1')}</Link><br/><br/> {/* Профиль */}
              <Link href={'/profile?page=2'}>{t('footer.links.profile_link2')}</Link><br/><br/> {/* Мои заказы */}
            </td>
            <td>
              <Link href={'/about'}>{t('footer.links.info_link1')}</Link><br/><br/> {/* О нас */}
              <Link href={'/documents'}>{t('footer.links.info_link2')}</Link><br/><br/> {/* Документы */}
              <Link href={'/coop'}>{t('footer.links.info_link3')}</Link><br/><br/> {/* Сотрудничество */}
              <Link href={'/policy'}>{t('footer.links.info_link4')}</Link><br/><br/> {/* Политика конфиденциальности */}
            </td>
            <td>
              <Link style={{textDecoration: 'underline'}} href={'tel:8-915-565-2027'}>{t('footer.links.contacts_link1')}</Link><br/><br/>
              <Link style={{textDecoration: 'underline'}} href={'mailto:tm-she@yandex.ru'}>{t('footer.links.contacts_link2')}</Link><br/><br/>
              <Link style={{textDecoration: 'underline'}} href={'https://yandex.ru/maps/-/CCUjULH9GB'} passHref>{t('footer.links.contacts_link3')}</Link><br/><br/>
            </td>
            <td>
              <Link
                href={'https://rutube.ru/channel/27054689/'}>{t('footer.links.video_link1')}</Link><br/><br/> {/* Наш канал */}
              <Link
                href={'https://rutube.ru/video/33b7749d5677c7bbed20d7f23a13586d/'}>{t('footer.links.video_link2')}</Link><br/><br/> {/* Работа с Aqua base */}
              <Link
                href={'https://rutube.ru/plst/207013/'}>{t('footer.links.video_link3')}</Link><br/><br/> {/* Обзор прочных баз */}
              <Link
                href={'https://rutube.ru/video/715c2ecb343286db32df95ac8150038b/?playlist=207007'}>{t('footer.links.video_link4')}</Link><br/><br/> {/* Дизайны */}
            </td>
          </tr>
          </tbody>
        </table> : <div className={s.footer__mobile}>
          <div>
            <h3>{t('footer.titles.profile')}</h3>
            <Link href={isAuth ? '/profile' : ''}>{t('footer.links.profile_link1')}</Link>
            <Link href={isAuth ? '/profile?page=2' : ''}>{t('footer.links.profile_link2')}</Link>
          </div>
          <div>
            <h3>{t('footer.titles.info')}</h3>
            <Link href={'/about'}>{t('footer.links.info_link1')}</Link>
            <Link href={'/documents'}>{t('footer.links.info_link2')}</Link>
            <Link href={'/coop'}>{t('footer.links.info_link3')}</Link>
            <Link href={'/policy'}>{t('footer.links.info_link4')}</Link>
          </div>
          <div>
            <h3>{t('footer.titles.contacts')}</h3>
            <Link style={{textDecoration: 'underline'}} href={'tel:8-915-565-2027'}>{t('footer.links.contacts_link1')}</Link>
            <Link style={{textDecoration: 'underline'}} href={'mailto:tm-she@yandex.ru'}>{t('footer.links.contacts_link2')}</Link>
            <Link style={{textDecoration: 'underline'}} href={'https://yandex.ru/maps/-/CCUjULH9GB'}>{t('footer.links.contacts_link3')}</Link>
          </div>
          <div>
            <h3>{t('footer.titles.video')}</h3>
            <Link href={'https://rutube.ru/channel/27054689/'}>{t('footer.links.video_link1')}</Link>
            <Link href={'https://rutube.ru/video/33b7749d5677c7bbed20d7f23a13586d/'}>{t('footer.links.video_link2')}</Link>
            <Link href={'https://rutube.ru/plst/207013/'}>{t('footer.links.video_link3')}</Link>
            <Link href={'https://rutube.ru/video/715c2ecb343286db32df95ac8150038b/?playlist=207007'}>{t('footer.links.video_link4')}</Link>
          </div>
        </div>}
      </div>
    </footer>
  )
}

export default Footer