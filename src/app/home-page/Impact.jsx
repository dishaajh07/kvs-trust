'use client'
import React from 'react'
import Image from "next/image";
import styles from './Impact.module.css';

const Impact = () => {

const impactData = [
  {
    icon: '/impact-1.png',
    number: '1,000+',
    label: 'Children Supported',
    alt: 'Children Icon',
  },
  {
    icon: '/impact-2.png',
    number: '50+',
    label: 'Blood Donation Camps',
    alt: 'Blood Donation Icon',
  },
  {
    icon: '/impact-3.png',
    number: '30+',
    label: 'Eye Camps',
    alt: 'Eye Camp Icon',
  },
  {
    icon: '/impact-4.png',
    number: '200+',
    label: 'Children Sheltered',
    alt: 'Shelter Icon',
  },
];

  return (
    <section className={styles.impact} aria-labelledby="impact-heading">
      <h2 id="impact-heading" className={styles.heading}>Our Impact</h2>

      <ul className={styles.statsContainer} role="list">
        {impactData.map((item, index) => (
          <li className={styles.statBlock} key={index}>
            <figure className={styles.iconWrapper} aria-label={item.label}>
              <Image
                src={item.icon}
                alt={item.alt}
                fill
                className={styles.icon}
              />
              <figcaption>
                <p className={styles.number}>{item.number}</p>
                <p className={styles.label}>{item.label}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className={styles.buttonContainer}>
        <button
          className={styles.donate}
          aria-label="Learn more about the KVS Trust's impact"
        >
          Read more
        </button>
      </div>
    </section>
  );
};

export default Impact;