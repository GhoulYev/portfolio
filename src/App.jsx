import { useState } from "react";
import styles from "./App.module.scss";
import { TypeAnimation } from 'react-type-animation';

export default function App(){
  const [typingStatus, setTypingStatus] = useState('Initializing');
  const [linkStatus, setLinkStatus] = useState(false);
  const [visibleStatus, setVisibleStatus] = useState(true);
  const blinkClassName = styles.blink;
  const TYPINGSPEED = 200
  return(
    <div className={styles.layout}>
      <div className={styles.bar}>
        <span className={styles.textBar}>Terminal ~ user ~ home</span>
      </div>
      <>
        {
          visibleStatus === true ? <>
          <span className={styles.text}>Welcome to <span className={styles.blue}>terminal.</span> Let’s type the <span className={styles.pink}>command</span>!</span> 
          <TypeAnimation 
          cursor = {false}
          className={`${blinkClassName} ${styles.text}`}
          preRenderFirstString={true}
          sequence={[
            '~ ',
            1200,
            '~ ls',
            (el)=>{
              setTypingStatus("done-ls");
              el.classList.remove(blinkClassName);
            },
          ]}
          wrapper="span"
          speed={TYPINGSPEED}
          repeat={0}
          />
          <span className={styles.text}>
            {typingStatus === "done-ls" ? <span>
              <span className={styles.barbie}>cat.png</span> <span className={styles.green}>portfolio.txt</span> <span className={styles.blue}>game.zip</span> 
              </span> : ""}
          </span>
          <>
          {
            typingStatus === "done-ls" ? <TypeAnimation 
            cursor = {false}
            className={`${blinkClassName} ${styles.text}`}
            preRenderFirstString={true}
            sequence={[
              '~ ',
              2000,
              '~ cat portfolio.txt',
              400,
              (el)=>{
                setTypingStatus("done-cat");
                setVisibleStatus(false);
                el.classList.remove(blinkClassName);
              },
            ]}
            wrapper="span"
            speed={TYPINGSPEED}
            repeat={0}
            /> : ""
          }
          </>
          </> : 
          <>
          <TypeAnimation 
          cursor = {false}
          className={`${blinkClassName} ${styles.text}`}
          style={{whiteSpace: 'pre-line'}}
          sequence={[
            `Hello, My name is Vlad. I am 18 y.o. developer from Belarus.

            I am developing on the NodeJS platform. I create websites, telegram bots, Windows software and much more.

            My social:
            `,
            (el)=>{
              el.classList.remove(blinkClassName);
              setLinkStatus(true);
            },
          ]}
          wrapper="span"
          speed={80}
          repeat={0}
          />
          {linkStatus ? 
            <>
            <TypeAnimation 
            cursor = {false}
            className={`${blinkClassName} ${styles.text}`}
            style={{whiteSpace: 'pre-line'}}
            sequence={[
              `GitHub: https://github.com/GhoulYev
              
              LinkedIn: https://www.linkedin.com/in/ghoulyaev`,
              (el)=>{
                el.classList.remove(blinkClassName);
                el.innerHTML = `GitHub: <a href='https://github.com/GhoulYev' target="_blank">https://github.com/GhoulYev</a>
                
                LinkedIn: <a href='https://www.linkedin.com/in/ghoulyaev' target="_blank">https://www.linkedin.com/in/ghoulyaev</a>`;
              },
            ]}
            wrapper="span"
            speed={80}
            repeat={0}
            />
          </>
          : ""}
          </>
        }
      </>
    </div>
  )
}