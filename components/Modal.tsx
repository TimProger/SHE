import React, {ChangeEvent, MouseEvent, useEffect, useState} from 'react';
import s from '../styles/components/modal.module.scss'
import Button from "./Button";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import Link from "next/link";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {toggleShowAuth, toggleShowModal} from "../store/Slices/Profile.slice";

interface IModalProps {
}

const Modal: React.FC<IModalProps> = () => {
  const dispatch = useAppDispatch()
  const {push,  locale} = useRouter()

  const { t } = useTranslation('common')

  const {showModal, modal} = useTypedSelector(state => state.profile)

  const outsideClickHandler = () => {
    dispatch(toggleShowModal(false))
  }

  const insideClickHandler = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const handleClick = () => {
    push(`${modal.link}`)
  }

  return (
    <div onClick={outsideClickHandler} className={s.modal + ' ' + (showModal ? s.modal__active : '')}>
      <div onClick={insideClickHandler} className={s.modal__block}>
        <div className={s.modal__block__container}>
          <svg className={s.modal__block__close + ' ' + (showModal ? s.modal__block__close__active : '')}
               onClick={() => {
                 dispatch(toggleShowModal(false))
               }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.14648 20.2635L20.4099 4" stroke="black"/>
            <path d="M4 4.14648L20.2635 20.4099" stroke="black"/>
          </svg>
          <h1>{modal.title}</h1>
          <p className={s.modal__block__container__desc}>{modal.desc.split(/\r?\n/).map((el, index)=>{
            return el && <><p key={index}>{el}</p></>
          })}</p>
          <div className={s.modal__block__container__button}>
            <Button onClick={handleClick} text={t('modal.button_1')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;