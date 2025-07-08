// components/Footer.jsx
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a
          href="https://www.facebook.com/profile.php?id=61576532674215"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LumeCare on Facebook"
        >
          <img src="/images/square-facebook-brands.svg" alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/lumecareofficial/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LumeCare on Instagram"
        >
          <img src="/images/instagram-brands.svg" alt="Instagram" />
        </a>
      </div>
      <p className={styles.footerText}>© 2025 LumeCare. All rights reserved.</p>
    </footer>
  );
}
