import styles from '../styles/components/footer.module.scss'
import React from "react";
import {useRouter} from "next/router";

interface IFooterProps {
  links: string[];
  titles: string[];
}

const Footer: React.FC<IFooterProps> = ({links, titles}) => {

  const router = useRouter()

  return (
    <footer className={styles.footer}>

      <table>
        <thead>
        <tr>
          <th>{titles[0]}</th>
          <th>{titles[1]}</th>
          <th>{titles[2]}</th>
          <th>{titles[3]}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{links[0]}</td>
          <td>{links[4]}</td>
          <td>{links[9]}</td>
          <td>{links[12]}</td>
        </tr>
        <tr>
          <td>{links[1]}</td>
          <td>{links[5]}</td>
          <td>{links[10]}</td>
          <td>{links[13]}</td>
        </tr>
        <tr>
          <td>{links[2]}</td>
          <td>{links[6]}</td>
          <td>{links[11]}</td>
          <td>{links[14]}</td>
        </tr>
        <tr>
          <td>{links[3]}</td>
          <td>{links[7]}</td>
          <td></td>
          <td>{links[15]}</td>
        </tr>
        <tr>
          <td></td>
          <td>{links[8]}</td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </footer>
  )
}

export default Footer