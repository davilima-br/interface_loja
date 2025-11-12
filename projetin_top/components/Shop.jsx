/*
'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";


export default function Home() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    async function loadProdutos() {
      try {
        const res = await fetch('http://localhost:8000/products')
        const data = await res.json()
        setProdutos(data)
      } catch(err) {
        return []
      }
      
    }
    loadProdutos()
  }, [])


  return (
    <div className={styles.container}>
      {produtos.map((e) => (
        <div className={styles.card} key={e.id}>
          <div className={styles.image}>
            <img src={e.image_url} alt="" className={styles.img}/>
          </div>
          <div className={styles.description}>
            <div className={styles.name}>
              <span>{e.name}</span>
            </div>
            <div className={styles.price}>
              <span>R$ {e.price}</span>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
*/