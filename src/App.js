import { useEffect, useState } from "react";
import { FaCodepen, FaCoffee, FaEnvelope, FaFacebook, FaGithub, FaGlobe, FaHeart, FaLinkedin, FaPatreon, FaYoutube } from "react-icons/fa";
import { FiArrowUp, FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { decrement, increment, reset } from "./redux/counterSlice";

const links = [
  { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
  { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
  { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
  { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
  { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
  { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHeart },
  { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
  { label: "Patreon", href: "https://patreon.com/a2rp", icon: FaPatreon },
];

const App = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowGoTop(window.scrollY > 420);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a className={styles.brand} href="https://github.com/a2rp/react-redux-toolkit-counter" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Ashish Ranjan logo" />
          <span>Redux Counter</span>
        </a>
        <span className={styles.headerNote}>A small state management demo</span>
      </header>
      <main className={styles.main}>
        <section className={styles.card}>
          <p className={styles.eyebrow}>Redux Toolkit</p>
          <h1>Counter state, kept simple.</h1>
          <p className={styles.description}>Use the controls to update a shared value through a Redux slice.</p>
          <div className={styles.counter} aria-live="polite">
            <button className={styles.control} type="button" onClick={() => dispatch(decrement())} aria-label="Decrease counter"><FiMinus aria-hidden="true" /></button>
            <output className={styles.value} aria-label="Current counter value">{counter}</output>
            <button className={styles.control} type="button" onClick={() => dispatch(increment())} aria-label="Increase counter"><FiPlus aria-hidden="true" /></button>
          </div>
          <button className={styles.reset} type="button" onClick={() => dispatch(reset())}>Reset value</button>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></p>
        <nav aria-label="Links and support">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} title={label} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
              <Icon aria-hidden="true" />
            </a>
          ))}
        </nav>
      </footer>
      {showGoTop && <button className={styles.goTopButton} type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Go to top" title="Go to top"><FiArrowUp /></button>}
    </div>
  );
};

export default App;