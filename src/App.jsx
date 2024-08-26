import styles from "./App.module.scss";

export default function App(){
  return(
    <div className={styles.layout}>
      <div className={styles.bar}>
        <span className={styles.textBar}>Terminal ~ user ~ home</span>
      </div>
      <span className={styles.text}>Welcome to <span className={styles.blue}>terminal.</span> Let’s type the <span className={styles.pink}>command!</span></span>
    </div>
  )
}