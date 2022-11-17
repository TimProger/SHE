import styles from '../../styles/components/header.module.scss'
import Link from "next/link";
import React from "react";
import {useTranslation, WithTranslation, withTranslation} from "next-i18next";
import {useRouter} from "next/router";

const Header: React.FC<any> = ({btns}: any) => {

  const { locale, locales, push } = useRouter()
  // const [t, i18n] = useTranslation('header');

  console.log(btns)

  return (
      <div className={styles.header}>
          <div className={styles.header__wrapper}>
              <h1 className={styles.header__logo}>SHEEEEEEEEEEEE</h1>
              <div className={styles.header__btns}>
                  <div className={styles.header__btns__btn}>
                      <Link href="/" locale={locale}>{btns[0]}</Link>
                  </div>
                  <div className={styles.header__btns__btn}>
                      <Link href="/profile" locale={locale}>{btns[1]}</Link>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Header