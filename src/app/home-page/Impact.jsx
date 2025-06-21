'use client'
import React from 'react'
import Image from 'next/Image'
import styles from './Impact.module.css';

const Impact = () => {

const impactData = [
  {
    icon: '/icons/children.svg',
    number: '1,000+',
    label: 'Children Supported',
    alt: 'Children Icon',
  },
  {
    icon: '/icons/blood.svg',
    number: '50+',
    label: 'Blood Donation Camps',
    alt: 'Blood Donation Icon',
  },
  {
    icon: '/icons/eye.svg',
    number: '30+',
    label: 'Eye Camps',
    alt: 'Eye Camp Icon',
  },
  {
    icon: '/icons/shelter.svg',
    number: '200+',
    label: 'Children Sheltered',
    alt: 'Shelter Icon',
  },
];

  return (
    <div className={styles.Impact}>
        <h2 className={styles.heading}>Our Impact</h2>
         <div className={styles.statsContainer}>
        {impactData.map((item, index) => (
          <div className={styles.statBlock} key={index}>
            <Image
              src={item.icon}
              alt={item.alt}
              width={50}
              height={50}
              className={styles.icon}
            />
            <p className={styles.number}>{item.number}</p>
            <p className={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>
<button
          className={styles.donate}
          aria-label="Learn more about our KVS Trust's impact"
        >
          Read more
        </button>
    </div>
  )
}

export default Impact