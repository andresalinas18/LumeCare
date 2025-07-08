import { useState } from 'react';
import styles from '../styles/Procedures.module.css'; 

export default function Procedures() {
  const [active, setActive] = useState(null);

  const data = [
    {
      name: 'breast',
      image: '/images/breast.webp',
      alt: 'Breast procedure',
      title: 'breast',
      description: 'Our surgical team enhances the shape, size, and symmetry of your bust.',
      list: [
        'Breast Augmentation',
        'Implant-Free Augmentation',
        'Breast Lift',
        'Breast Reconstruction',
        'Breast Reduction',
      ],
    },
    {
      name: 'face',
      image: '/images/face.webp',
      alt: 'Facial aesthetics procedure',
      title: 'face',
      description: 'Face procedures focus on enhancing symmetry and facial harmony.',
      list: [
        'Facelift',
        'Rhinoplasty',
        'Blepharoplasty',
        'Brow Lift',
      ],
    },
    {
      name: 'body',
      image: '/images/body.webp',
      alt: 'Body contouring procedure',
      title: 'body',
      description: 'We sculpt and contour the body for a more defined and confident appearance.',
      list: [
        'Liposuction',
        'Tummy Tuck',
        'Brazilian Butt Lift',
      ],
    },
    {
      name: 'oral',
      image: '/images/smileFace.webp',
      alt: 'Oral and dental procedures',
      title: 'oral',
      description: 'Oral procedures for smile enhancement and dental health.',
      list: [
        'Smile Design',
        'Teeth Whitening',
        'Dental Implants',
      ],
    },
    {
      name: 'non-surgical',
      image: '/images/non-surgical.webp',
      alt: 'Non-surgical aesthetics procedures',
      title: 'non-surgical',
      description: 'Minimally invasive treatments designed to enhance beauty and rejuvenation without downtime.',
      list: [
        'Botox & Fillers',
        'Facial Rejuvenation',
        'Laser Treatments',
        'Body Contouring',
      ],
    },
  ];

  return (
    <section id="procedures" aria-label="Our Medical Procedures">
      <div className={styles.proceduresContainer}>
        {data.map((item, index) => {
          const isActive = active === index;
          return (
            <article
              key={item.name}
              className={`${styles.procedureCard} ${isActive ? styles.active : ''}`}
              onClick={() => setActive(active === index ? null : index)}
            >
              <div className={styles.cardInner}>
                <div
                  className={styles.imageSection}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {!isActive && (
                    <div className={styles.label}>
                      {item.name} <span className={styles.plusIcon}>+</span>
                    </div>
                  )}
                </div>

                {isActive && (
                  <div className={styles.textSection}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <ul>
                      {item.list.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
