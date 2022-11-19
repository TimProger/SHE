import styles from '../styles/components/dropdown.module.scss'
import React, {ChangeEvent, MouseEvent, useEffect, useState} from "react";

interface DropdownProps {
  value: string;
  options: string[];
  handler: (e: MouseEvent, value: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({
                                             value,
                                           options=[],
                                           handler
                                          }) => {
  const [open, setOpen] = useState(false)

  const showOptions = () => {
    setOpen(prev => !prev)
  }

  return (
    <div onClick={showOptions} className={styles.dropdown}>
      <div className={styles.dropdown__container}>
        <div className={styles.dropdown__selected}>{value}</div>
        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6834 1.58525L8.59103 7.79723C8.5066 7.87097 8.41513 7.92307 8.31662 7.95355C8.21812 7.98452 8.11258 8 8 8C7.88742 8 7.78188 7.98452 7.68338 7.95355C7.58487 7.92307 7.4934 7.87097 7.40897 7.79723L0.295514 1.58525C0.0985045 1.41321 -2.97318e-07 1.19816 -3.08598e-07 0.940093C-3.19879e-07 0.682028 0.105541 0.46083 0.316622 0.276498C0.527704 0.0921664 0.773966 9.19843e-07 1.05541 9.07541e-07C1.33685 8.95239e-07 1.58311 0.0921664 1.79419 0.276498L8 5.69585L14.2058 0.276498C14.4028 0.104455 14.6454 0.0184329 14.9336 0.0184329C15.2224 0.0184329 15.4723 0.110599 15.6834 0.294931C15.8945 0.479263 16 0.694316 16 0.940092C16 1.18587 15.8945 1.40092 15.6834 1.58525Z" fill="#A0A0A0"/>
        </svg>
      </div>
      <div className={styles.dropdown__options + ' ' + (open && styles.dropdown__open)}>
        {options.map((el, index)=>{
          if(el !== value){
            return <div
              onClick={(e: MouseEvent)=>handler(e, el)}
              className={styles.dropdown__options__option} key={index}>
              {el}
            </div>
          }
        })}
      </div>
    </div>
  )
}

export default Dropdown