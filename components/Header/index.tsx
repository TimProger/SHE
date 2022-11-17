import styles from '../../styles/components/header.module.scss'
import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";
import {onToggleLanguageClick} from "../../utils/changeCurrentLanguage";

interface IHeaderProps {
  btns: string[];
}

const Header: React.FC<IHeaderProps> = ({btns}) => {

  const router = useRouter()

  return (
      <div className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__wrapper__top}>
            <div className={styles.header__wrapper__top__logo} />
            <div className={styles.header__wrapper__top__nav}>
              <p></p>
              <div className={styles.header__wrapper__top__btns}>
                <select onChange={(e)=>onToggleLanguageClick(e, router)} defaultValue={router.locale}>
                  <option value="en">en</option>
                  <option value="ru">ru</option>
                </select>
                {/*<div className={styles.header__btns__btn}>*/}
                {/*  <Link href="/" locale={router.locale}>{btns[0]}</Link>*/}
                {/*</div>*/}
                {/*<div className={styles.header__btns__btn}>*/}
                {/*  <Link href="/profile" locale={router.locale}>{btns[1]}</Link>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          <div className={styles.header__wrapper__bottom}>
            <div className={styles.header__wrapper__bottom__btns}>
              <div className={styles.header__wrapper__bottom__btns__btn}>
                <Link href="/" locale={router.locale}>{btns[0]}</Link>
              </div>
              <div className={styles.header__wrapper__bottom__btns__btn}>
                <Link href="/profile" locale={router.locale}>{btns[1]}</Link>
              </div>
              <div className={styles.header__wrapper__bottom__btns__btn}>
                <Link href="/profile" locale={router.locale}>{btns[2]}</Link>
              </div>
              <div className={styles.header__wrapper__bottom__btns__btn}>
                <Link href="/profile" locale={router.locale}>{btns[3]}</Link>
              </div>
              <div className={styles.header__wrapper__bottom__btns__btn}>
                <Link href="/profile" locale={router.locale}>{btns[4]}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header