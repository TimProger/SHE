import React from 'react';
import Link from "next/link";
import s from "../styles/components/button.module.scss";

interface IButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: 'link' | 'btn';
  href?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  switch (props.type){
    case 'link':
      return (
        <Link href={props.href || '/'} className={s.button + ` ${props.className}`}>
          {props.text}
        </Link>
      )
    case 'btn':
      return (
        <div onClick={props.onClick} className={s.button + ` ${props.className}`}>
          {props.text}
        </div>
      )
    default:
      return (
        <div onClick={props.onClick} className={s.button + ` ${props.className}`}>
          {props.text}
        </div>
      )
  }
};

export default Button;