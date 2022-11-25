import s from '../styles/components/container.module.scss'
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children
}) => {
  return (
    <main className={s.container}>
      <div className={s.container__wrapper}>
        {children}
      </div>
    </main>
  )
}

export default Container