import s from '../styles/components/footer.module.scss'
import React from "react";
import Link from "next/link";
import {useTranslation} from "next-i18next";

interface IFooterProps {
}

const Footer: React.FC<IFooterProps> = ({}) => {

  const { t } = useTranslation('common')

  const titles = {
    profile: t('footer.titles.profile'),
    info:  t('footer.titles.info'),
    contacts:  t('footer.titles.contacts'),
    video:  t('footer.titles.video'),
  }

  const links = {
    profile_link1: t('footer.links.profile_link1'),
    profile_link2: t('footer.links.profile_link2'),
    info_link1: t('footer.links.info_link1'),
    info_link2: t('footer.links.info_link2'),
    info_link3: t('footer.links.info_link3'),
    contacts_link1: t('footer.links.contacts_link1'),
    contacts_link2: t('footer.links.contacts_link2'),
    contacts_link3: t('footer.links.contacts_link3'),
    video_link1: t('footer.links.video_link1'),
    video_link2: t('footer.links.video_link2'),
    video_link3: t('footer.links.video_link3'),
    video_link4: t('footer.links.video_link4'),
  }

  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.wrapper__imgs}>
          <div className={s.footer__img1}></div>
          <Link href={'https://export31.ru'}>
            <div className={s.footer__img2}></div>
          </Link>
        </div>
        <table className={s.footer__table}>
          <thead>
          <tr>
            <th>{titles.profile}</th>
            <th>{titles.info}</th>
            <th>{titles.contacts}</th>
            <th>{titles.video}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <Link href={'/profile'}>{links.profile_link1}</Link><br/><br/> {/* Профиль */}
              <Link href={'/profile?page=2'}>{links.profile_link2}</Link><br/><br/> {/* Мои заказы */}
            </td>
            <td>
              <Link href={'/about'}>{links.info_link1}</Link><br/><br/> {/* О нас */}
              <Link href={'/documents'}>{links.info_link2}</Link><br/><br/> {/* Документы */}
              <Link href={'/coop'}>{links.info_link3}</Link><br/><br/> {/* Сотрудничество */}
            </td>
            <td>
              <Link href={'/contacts'}>{links.contacts_link1}</Link><br/><br/>
              <Link href={'/contacts'}>{links.contacts_link2}</Link><br/><br/>
              <Link href={'https://yandex.ru/maps/-/CCUjULH9GB'} passHref>{links.contacts_link3}</Link><br/><br/>
            </td>
            <td>
              <Link href={'https://rutube.ru/channel/27054689/'}>{links.video_link1}</Link><br/><br/> {/* Наш канал */}
              <Link href={'https://rutube.ru/video/33b7749d5677c7bbed20d7f23a13586d/'}>{links.video_link2}</Link><br/><br/> {/* Работа с Aqua base */}
              <Link href={'https://rutube.ru/plst/207013/'}>{links.video_link3}</Link><br/><br/> {/* Обзор прочных баз */}
              <Link href={'https://rutube.ru/video/715c2ecb343286db32df95ac8150038b/?playlist=207007'}>{links.video_link4}</Link><br/><br/> {/* Дизайны */}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </footer>
  )
}

export default Footer