import styles from '../styles/components/container.module.scss'
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children
}) => {
  return (
    <main className={styles.container}>
      <div className={styles.container__wrapper}>
        {children}
      </div>
    </main>
  )
}

export default Container