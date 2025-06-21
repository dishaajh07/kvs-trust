"use client";
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import ChalkLine from "./ChalkLine";

const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.imageWrapper}>
        <Image
          src="/hero-image.webp"
          alt="Children under the care of KVS Trust"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.blackOverlay} aria-hidden="true"></div>
        <div className={styles.textOverlay}>
          <p id="hero-heading" className={styles.heroTitle}>
            Your Humble Act Will Make{" "}
          </p>
          <p className={styles.span}>Smiles look better!</p>
          <ChalkLine />

          <p className={styles.heroText}>
            Every child deserves love, dignity and a chance to dream. Help us
            transform lives.
          </p>
          <a
            href="/about"
            className={styles.donate}
            aria-label="Learn more about KVS Trust"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
