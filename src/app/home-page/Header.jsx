"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav aria-label="Primary navigation" className={styles.nav}>
        <Link href="/" aria-label="KVS Trust Home">
          <Image
            src="/kvs-trust-logo.png"
            alt="KVS Trust Logo"
            height={100}
            width={100}
            unoptimized
            priority
            className={styles.logo}
          />
        </Link>
        {/* Desktop Nav */}
        <ul className={styles.navBar}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Our Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              About Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Our children
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Donate
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Join Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className={styles.navButtons}>
          <a className={styles.tele} href="tel:+918867148889">
            +91 8867 148 889
          </a>
          <a className={styles.donate}>Donate Now</a>
        </div>
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
