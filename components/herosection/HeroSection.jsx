import React from 'react'
import styles from "./hero.module.css";
import { PiMouseScroll } from "react-icons/pi";
const HeroSection = () => {
  return (
    <>
    <main className={styles.main}>
    <div className={styles.contents}>
        
        <div className={styles.buttons}>
            <button>Explore</button>
            <button>our story</button>
        </div>
    </div>
    <video
        src="./spacevideo.mp4"
        autoPlay
        muted
        loop
        className={styles.video}
    />
    <PiMouseScroll  style={{ fontSize: '24px' }} />
</main>

</>
  )
}

export default HeroSection