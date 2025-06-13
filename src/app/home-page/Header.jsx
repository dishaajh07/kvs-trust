"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Hero from "./Hero";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>

{/* Skip link for accessibility */}
      <a href="#main" className={styles.skipLink}>Skip to main content</a>

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

 {/* Mobile Nav */}
        <div className={styles.mobileNav}>
          <a href="tel:+918867148889" className={styles.mobileTele} aria-label="Call KVS Trust">
  <Image
    src="/icons/phone-icon.svg"
    alt="Call"
    width={24}
    height={24}
    className={styles.icon}
  />
</a>

          <button
            className={styles.burger}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={toggleDropdown}
          >
            ☰
          </button>
</div>
      </nav>

    {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className={styles.mobileDropdown} role="menu">
          <ul className={styles.mobileMenu}>
            <li role="menuitem"><Link href="/" className={styles.navLink}>Our Home</Link></li>
            <li role="menuitem"><Link href="/" className={styles.navLink}>About Us</Link></li>
            <li role="menuitem"><Link href="/" className={styles.navLink}>Our Children</Link></li>
            <li role="menuitem"><Link href="/" className={styles.navLink}>Donate</Link></li>
            <li role="menuitem"><Link href="/" className={styles.navLink}>Join Us</Link></li>
            <li role="menuitem"><Link href="/" className={styles.navLink}>Contact Us</Link></li>
            <li><Link href="/donate" className={styles.tele}>Donate Now</Link></li>
          </ul>
        </div>
      )}

      <Hero />
    </header>
  );
};

export default Header;
