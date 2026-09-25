import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { decrement, increment, reset } from "./redux/counterSlice";

const links = [["Portfolio", "https://www.ashishranjan.net/", "↗"], ["GitHub", "https://github.com/a2rp", "GH"], ["CodePen", "https://codepen.io/ash1198", "CP"], ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", "in"], ["Facebook", "https://www.facebook.com/theash.ashish/", "f"], ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", "▶"], ["Email", "mailto:ash.ranjan09@gmail.com", "@"], ["Support", "https://a2rp-donation-page.netlify.app/", "♥"], ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", "☕"], ["Patreon", "https://patreon.com/a2rp", "P"]];

const App = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return <div className={styles.container}>
    <header className={styles.header}><a className={styles.brand} href="https://github.com/a2rp/react-redux-toolkit-counter" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Ashish Ranjan logo" /><span>Redux Counter</span></a><span className={styles.headerNote}>A small state management demo</span></header>
    <main className={styles.main}><section className={styles.card}><p className={styles.eyebrow}>Redux Toolkit</p><h1>Counter state, kept simple.</h1><p className={styles.description}>Use the controls to update a shared value through a Redux slice.</p><div className={styles.counter} aria-live="polite"><button className={styles.control} type="button" onClick={() => dispatch(decrement())} aria-label="Decrease counter">−</button><output className={styles.value} aria-label="Current counter value">{counter}</output><button className={styles.control} type="button" onClick={() => dispatch(increment())} aria-label="Increase counter">+</button></div><button className={styles.reset} type="button" onClick={() => dispatch(reset())}>Reset value</button></section></main>
    <footer className={styles.footer}><p>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></p><nav aria-label="Links and support">{links.map(([label, href, icon]) => <a key={label} href={href} title={label} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{icon}</a>)}</nav></footer>
  </div>;
};
export default App;