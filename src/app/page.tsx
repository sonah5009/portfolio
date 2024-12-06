/** @jsxImportSource @emotion/react */
"use client"
import styles from "../styles/page.module.css";
import { css } from '@emotion/react'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div
          css={{
            backgroundColor: 'pink',
            '&:hover': {
              color: 'lightgreen'
            }
          }}
        >
          Object Styles
        </div>
         <div
          css={css`
            background-color: hotpink;
            &:hover {
              color: lightgreen;
            }
        `}
        >
          String Styles
        </div>

      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
