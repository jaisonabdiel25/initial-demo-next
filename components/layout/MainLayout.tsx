
import Head from "next/head";
import { FC, PropsWithChildren } from "react";

import { Navbar } from "../Navbar";
import styles from './MainLayout.module.css';

export const MainLayout: FC<PropsWithChildren> = ({ children}) => {
    return (
        <>
        <Navbar />
          <Head>
            <title>Jaison home app</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <div className={styles.description}>
              { children }
            </div>
          </main>
        </>
      );
}
