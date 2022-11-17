import styles from '../../styles/components/header.module.scss'
import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";
import {onToggleLanguageClick} from "../../utils/changeCurrentLanguage";

const Header: React.FC<any> = ({btns}: any) => {

  const router = useRouter()

  return (
      <div className={styles.header}>
          <div className={styles.header__wrapper}>
              <h1 className={styles.header__logo}>SHEEEEEEEEEEEE</h1>
              <div className={styles.header__btns}>
                  <select onChange={(e)=>onToggleLanguageClick(e, router)} defaultValue={router.locale}>
                    <option value="en">en</option>
                    <option value="ru">ru</option>
                  </select>
                  <div className={styles.header__btns__btn}>
                      <Link href="/" locale={router.locale}>{btns[0]}</Link>
                  </div>
                  <div className={styles.header__btns__btn}>
                      <Link href="/profile" locale={router.locale}>{btns[1]}</Link>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Header