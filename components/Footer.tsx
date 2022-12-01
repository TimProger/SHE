import s from '../styles/components/footer.module.scss'
import React from "react";
import Link from "next/link";

interface IFooterProps {
  links: any;
  titles: any;
}

const Footer: React.FC<IFooterProps> = ({links, titles}) => {

  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.wrapper__imgs}>
          <div className={s.footer__img1}></div>
          <div className={s.footer__img2}></div>
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
              <Link href={'/contacts'}>{links.contacts_link3}</Link><br/><br/>
            </td>
            <td>
              <Link href={'/video'}>{links.video_link1}</Link><br/><br/> {/* Наш канал */}
              <Link href={'/coop'}>{links.video_link2}</Link><br/><br/> {/* Работа с Aqua base */}
              <Link href={'/video'}>{links.video_link3}</Link><br/><br/> {/* Обзор прочных баз */}
              <Link href={'/video'}>{links.video_link4}</Link><br/><br/> {/* Дизайны */}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </footer>
  )
}

export default Footer