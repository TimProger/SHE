import styles from '../styles/components/container.module.scss'
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        {children}
      </div>
    </div>
  )
}

export default Container