import styles from '../../styles/components/header.module.scss'
import Link from "next/link";
import React from "react";
import {useTranslation, WithTranslation, withTranslation} from "next-i18next";
import {useRouter} from "next/router";

const Header: React.FC = () => {

  const { locale, locales, push } = useRouter()
  // const [t, i18n] = useTranslation('header');

  // console.log(t('header:home'))

  return (
      <div className={styles.header}>
          <div className={styles.header__wrapper}>
              <h1 className={styles.header__logo}>SHE</h1>
              <div className={styles.header__btns}>
                  <div className={styles.header__btns__btn}>
                      <Link href="/" locale={locale}>{'home'}</Link>
                  </div>
                  <div className={styles.header__btns__btn}>
                      <Link href="/profile" locale={locale}>{'profile'}</Link>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Header