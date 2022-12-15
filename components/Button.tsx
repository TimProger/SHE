import React from 'react';
import Link from "next/link";
import s from "../styles/components/button.module.scss";

interface IButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: 'link' | 'btn';
  href?: string;
  disabled?: boolean;
  success?: boolean;
  style_type?: string
}

const Button: React.FC<IButtonProps> = (props) => {
  const className = s.button + ` ${props.className} ${props.success ? s.button__success : ''}  ${props.style_type === "outer" ? s.button__styles__outer : s.button__styles__inner}`
  switch (props.type){
    case 'link':
      return (
        <Link
          href={props.href || '/'}
          className={className}
        >
          {props.text}
        </Link>
      )
    case 'btn':
      return (
        <button
          disabled={props.disabled}
          onClick={props.onClick}
          className={className}
        >
          {props.text}
        </button>
      )
    default:
      return (
        <button
          disabled={props.disabled}
          onClick={props.onClick}
          className={className}
        >
          {props.text}
        </button>
      )
  }
};

export default Button;