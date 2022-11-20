import styles from '../styles/components/footer.module.scss'
import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";

interface IFooterProps {
  links: string[];
  titles: string[];
}

const Footer: React.FC<IFooterProps> = ({links, titles}) => {

  const router = useRouter()

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footer__img}></div>
        <table className={styles.footer__table}>
          <thead>
          <tr>
            <th>{titles[0]}</th>
            <th>{titles[1]}</th>
            <th>{titles[2]}</th>
            <th>{titles[3]}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <Link href={'/profile'}>{links[0]}</Link>
            </td>
            <td>
              <Link href={'/info'}>{links[4]}</Link>
            </td>
            <td>
              <Link href={'/contacts'}>{links[9]}</Link>
            </td>
            <td>
              <Link href={'/video'}>{links[12]}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href={'/profile'}>{links[1]}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links[5]}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links[10]}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links[13]}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href={'/profile'}>{links[2]}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links[6]}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links[11]}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links[14]}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href={'/profile'}>{links[3]}</Link>
            </td>
            <td>
              <Link href={'/profile'}>{links[7]}</Link>
            </td>
            <td>
              <Link href={'/profile'}></Link>
            </td>
            <td>
              <Link href={'/profile'}>{links[15]}</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href={'/profile'}></Link>
            </td>
            <td>
              <Link href={'/profile'}>{links[8]}</Link>
            </td>
            <td>
              <Link href={'/profile'}></Link>
            </td>
            <td>
              <Link href={'/profile'}></Link>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </footer>
  )
}

export default Footer