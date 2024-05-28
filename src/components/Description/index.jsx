import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Link from "next/link";
import Rounded from '../../common/RoundedButton';
export default function Description() {

    const phrase = "A freelance front-end developer I create Implemented websites, mobile applications, and landing pages from concept through deployment. Assessed UX and UI designs for technical feasibility.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <p className='text-6xl font-bold mb-20 uppercase'>alittlebitaboutme/</p>
            <div className={styles.body}>
                
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>If you are looking for someone who works hard, is creative and passionate about hiswork, I believe I can be the right choice for your position.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                       <Link href="/about"> <p>About me</p></Link>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}