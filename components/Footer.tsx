import styles from '../styles/components/header.module.scss'
import Link from "next/link";
import React, {useState, MouseEvent, useEffect, ChangeEvent} from "react";
import {useRouter} from "next/router";
import {onToggleLanguageClick} from "../utils/changeCurrentLanguage";
import {getSearch} from "../store/ActionCreators/Product.ac";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import Dropdown from "./Dropdown";

interface IFooterProps {
  links: string[];
}

const Footer: React.FC<IFooterProps> = ({links}) => {

  const router = useRouter()

  return (
    <footer className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.bottom__btns__btn}>
          <Link href="/" locale={router.locale}>{links[0]}</Link>
        </div>
        <div className={styles.bottom__btns__btn}>
          <Link href="/profile" locale={router.locale}>{links[1]}</Link>
        </div>
        <div className={styles.bottom__btns__btn}>
          <Link href="/profile" locale={router.locale}>{links[2]}</Link>
        </div>
        <div className={styles.bottom__btns__btn}>
          <Link href="/profile" locale={router.locale}>{links[3]}</Link>
        </div>
        <div className={styles.bottom__btns__btn}>
          <Link href="/profile" locale={router.locale}>{links[4]}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer