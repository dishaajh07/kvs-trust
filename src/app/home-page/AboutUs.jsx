"use client";
import React from 'react'
import styles from './AboutUs.module.css';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className={styles.aboutUs} aria-labelledby="about-us-heading">

<div className={styles.gridContainer}>
        {/* Left Side: Text */}
<div className={styles.aboutUsContent}>
<h2 id="about-title" className={styles.title}>
          About KVS Trust
        </h2>
<p className={styles.text}>
          At KVS Trust, we believe in spreading the joy of giving by providing support, shelter, and education to underprivileged children across the region.
        </p>
<button
          className={styles.donate}
          aria-label="Learn more about KVS Trust"
        >
          Learn More 
        </button>
</div>

{/* Right Side: Image */}
<div className={styles.imageWrapper}>
<div className={styles.yellowLayer}></div>
 <Image
    src="/hero-image.webp"
    alt="Children supported by KVS Trust"
    fill
    priority
    className={styles.aboutImage}
  />

</div>
</div>
</section>
  )
}

export default AboutUs