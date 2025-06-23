"use client";
import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import YellowLayer from "./YellowLayer";

const Footer = () => {
  return (
    <>
      <YellowLayer />
      <footer className={styles.footer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/kvs-trust-logo.png"
            alt="KVS Trust emblem"
            fill
            priority
            className={styles.footerImage}
          />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore autem
          illo numquam!
        </p>

        <div className={styles.line}></div>
          <p className={styles.copyText}>
            Copyright &copy; 2025 KVS Charitable Trust. All Rights Reserved.
          </p>
      </footer>
    </>
  );
};

export default Footer;
