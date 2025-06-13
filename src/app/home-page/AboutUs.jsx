import React from 'react'
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles.aboutUs} aria-labelledby="about-us-heading">
<div className={styles.aboutUsContent}>
<h2 id="about-title" className={styles.title}>
          About KVS Trust
        </h2>
<p className={styles.text}>
          At KVS Trust, we believe in spreading the joy of giving by providing support, shelter, and education to underprivileged children across the region.
        </p>
<button
          className={styles.knowButton}
          aria-label="Learn more about KVS Trust"
        >
          Learn More 
        </button>
</div>
</section>
  )
}

export default AboutUs