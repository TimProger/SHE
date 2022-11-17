import styles from '../../styles/components/container.module.scss'
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Header: React.FC<ContainerProps> = ({
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

export default Header