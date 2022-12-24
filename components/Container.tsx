import s from '../styles/components/container.module.scss'
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  no_margin?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  no_margin
}) => {
  return (
    <main className={s.container}>
      <div className={s.container__wrapper + ` ${className ? className : ''} ${no_margin ? s.container__no_margin : ''}`}>
        {children}
      </div>
    </main>
  )
}

export default Container