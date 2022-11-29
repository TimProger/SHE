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
        <div className={s.footer__img}></div>
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
              <Link href={'/profile'}>{links.profile_link1}</Link><br/><br/>
              <Link href={'/profile'}>{links.profile_link2}</Link><br/><br/>
              <Link href={'/profile'}>{links.profile_link3}</Link><br/><br/>
              <Link href={'/profile'}>{links.profile_link4}</Link><br/><br/>
            </td>
            <td>
              <Link href={'/about'}>{links.info_link1}</Link><br/><br/>
              <Link href={'/about'}>{links.info_link2}</Link><br/><br/>
              <Link href={'/about'}>{links.info_link3}</Link><br/><br/>
              <Link href={'/about'}>{links.info_link4}</Link><br/><br/>
              <Link href={'/about'}>{links.info_link5}</Link><br/><br/>
            </td>
            <td>
              <Link href={'/contacts'}>{links.contacts_link1}</Link><br/><br/>
              <Link href={'/profile'}>{links.contacts_link2}</Link><br/><br/>
              <Link href={'/profile'}>{links.contacts_link3}</Link><br/><br/>
            </td>
            <td>
              <Link href={'/video'}>{links.video_link1}</Link><br/><br/>
              <Link href={'/coop'}>{links.video_link2}</Link><br/><br/>
              <Link href={'/video'}>{links.video_link3}</Link><br/><br/>
              <Link href={'/video'}>{links.video_link4}</Link><br/><br/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </footer>
  )
}

export default Footer