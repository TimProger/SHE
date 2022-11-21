import styles from '../styles/components/footer.module.scss'
import React from "react";
import Link from "next/link";

interface IFooterProps {
  links: any;
  titles: any;
}

const Footer: React.FC<IFooterProps> = ({links, titles}) => {

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footer__img}></div>
        <table className={styles.footer__table}>
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
              <Link href={'/profile'}>{links.profile_link1}</Link>
            </td>
            <td>
              <Link href={'/info'}>{links.info_link1}</Link>
            </td>
            <td>
              <Link href={'/contacts'}>{links.contacts_link1}</Link>
            </td>
            <td>
              <Link href={'/video'}>{links.video_link1}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href={'/profile'}>{links.profile_link2}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links.info_link2}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links.contacts_link2}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links.video_link2}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href={'/profile'}>{links.profile_link3}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links.info_link3}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links.contacts_link3}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links.video_link3}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href={'/profile'}>{links.profile_link4}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links.info_link4}</Link>
            </td>
            <td>
            </td>
            <td>
              <Link href={'/profile'}>{links.video_link4}</Link>
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              <Link href={'/profile'}>{links.info_link5}</Link>
            </td>
            <td>
            </td>
            <td>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </footer>
  )
}

export default Footer