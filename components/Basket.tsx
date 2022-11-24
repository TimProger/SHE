import React from 'react';
import styles from '../styles/components/card.module.scss'
import Link from "next/link";
import {IProduct} from "../types/Product.types";
import {API_BASE_URL} from "../http/api";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Basket: React.FC = () => {

  const {products} = useTypedSelector(state => state.basket)

  return (
    <div className={styles.basket}>

    </div>
  );
};

export default Basket;